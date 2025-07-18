{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    gitignore.url = "github:hercules-ci/gitignore.nix";
  };
  outputs = {...} @ inputs:
    inputs.flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = (import inputs.nixpkgs) {
          inherit system;
          config = {
            allowUnfree = true;
            allowBroken = true;
          };
        };
      in {
        devShells = rec {
          rShell = let
            pythonPkg = pythonPackages: with pythonPackages; [
              ipykernel
              vtk
              pandas
              scikit-learn
              pip
              numpy
              numba
              scipy
              sympy
              matplotlib
              radian
              pyyaml
              nbformat
              nbclient
              jupyter
            ];
          in pkgs.mkShell {
            packages = with pkgs; [
              docker-compose
              docker
              podman-compose
              podman-compose
              (pkgs.python3.withPackages (pythonPkg))
              paraview
              quarto
              texliveFull
              texworks
              texstudio
              librsvg
              chromium
            ];
          };
          default = rShell;
        };
        formatter = let
          treefmtconfig = inputs.treefmt-nix.lib.evalModule pkgs {
            projectRootFile = "flake.nix";
            programs = {
              alejandra.enable = true;
              black.enable = true;
              toml-sort.enable = true;
              yamlfmt.enable = true;
              mdformat.enable = true;
              prettier.enable = true;
              shellcheck.enable = true;
              shfmt.enable = true;
            };
            settings.formatter.shellcheck.excludes = [".envrc"];
          };
        in
          treefmtconfig.config.build.wrapper;
        apps = rec {
        };
        packages = rec {
        };
      }
    );
}
