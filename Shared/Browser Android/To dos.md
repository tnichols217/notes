 - [ ] Networking in the cloud
 - [ ] Rewrite JS sdk
	 - [ ] React components
 - [ ] TS library to use ADB socket instead of CLI
 - [ ] Schemas for all Puzzle Pieces
 - [ ] Nixifying Phone images (Robotnix / google images)
 - [ ] Nixing Phone Boxes (Docker)
 - [ ] Phone Drive bind mounting (sdcard - Docker)
 - [ ] Pipe the API (Connecting and managing phone runners from Janus / Control Interface)
 - [ ] Partition the server w/ a control server
 - [ ] Control Server / Task server API
 - [ ] Janus Config nix module
 - [ ] Restructure project: Fix submodules and non-top level flakes
 - [ ] Create a control API
 - Short Term:
	 - [ ] Phone Runner: Get audio/control stream working
	 - [ ] Build Scrcpy with Nix
- [ ] Front facing website for the project

- [ ] Licensing the project

- [ ] add trevor to nixpkgs maintainers so that we can reference in metadata

# Scrcpy Packaging
- [ ] Parameterize screencopy hard coded stuff in SurfaceEncoder 
- [ ] Paraemterize the media encoder options so it isn't super loose

# Dockerizing Android
- [ ] Parameterizing `emulator.nix` so that we can configure the emulator with mkApp
- [ ] Get audio and input working on second and third TCP connections
- [ ] Parameterize screen copy and switch to ts-adb to use socket adb
- [ ] Handle shutdown better (aka figure out when qemu is done shutting down so that we can make a POST when we are done)
- [ ] Layer the image

# Other
- [ ] Make an issue for arion documentation hard coding `/nix/store/fjeioahfeaoiwuh` in the docs themselves
- [ ] Make hercules CLI more idomatic