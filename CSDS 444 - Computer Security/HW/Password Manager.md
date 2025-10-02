# Password Manager

Trevor Nichols
https://github.com/tnichols217/CSDS444-java

## Features

- Argon2id password hashing
- AES password encryption
- Partial file rewrites
- TOTP codes for 2 factor authentication

## Compiling

Maven is used as the build system for this project. All dependencies are specified in the `pom.xml`. A custom version of OpenJDK may be required to run the resulting jars as OpenJDK does not come bundled with `JavaFX`, but Oracle's JDK does.

`mvn package` will build the full maven package.

Nix is used as the meta build system as well as for CI. Meta dependencies (like OpenJDK) are specified with nix, for linux and darwin systems that may not have these installed already.

`nix build` will build the full maven package as well as the corresponding OpenJDK to run it.

`nix build .#appimage` will build a system-agnostic AppImage that bundles all dependencies that will run on any FUSE-enabled UNIX system (mainly Linux).

## Running

https://github.com/tnichols217/CSDS444-java/releases

Artifacts may be downloaded from the releases page on the linked GitHub. Prebuilt `.jar`s and `.AppImage`s are supplied.

Alternatively, on `nix` enabled systems, `nix run github:tnichols217/CSDS444-java` will immediately run the project.

## Source

All source is provided on the linked GitHub as well as with each release.
