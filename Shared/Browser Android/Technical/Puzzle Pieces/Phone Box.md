# Overview

A `PhoneBox` is sort of like an AVD. It's a description of how to run `PhoneImage`s that contains information such as
- What services the phone running will need, like
	- Whether it needs to stream video/audio output
- What type of server the `PhoneRunner` will expose to interact with the phone.
- The resources associated with the emulatoThe priority of the phone that getsr
	- Amount of ram the emulators will need
	- Priority of the emulators

Most importantly, a `PhoneBox` will specify which `PhoneImage` it is meant to be run with.psuh