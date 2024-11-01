# Overview

A REST API that defines endpoints for:
- Phone images ("`PhoneImage`")
	- These are the base images for the phones and devices that will run in containers on servers. It defines things like the operating system and potentially packages on the phone.
- Phone boxes ("`PhoneBox`")
	- These are interfaces that you can use to access the `PhoneBox`s. Each `PhoneImage` can have multiple `PhoneBox`s, and one `PhoneBox` can be used by many `PhoneImage`s. 
	- A `PhoneBox` is pretty versatile. It can be things like
		- The API schema that you'll use to "puppet" the phone, so, Websockets, HTTP, etc, and the things that you will want access to, like video output (NOT accessing things like a video stream will conserve compute/throughout)
		- Hardware stuff, like the screen size you want to use, whether there should be buttons in certain places, which virtual SD cards are mounted, etc.
- Phone drives ("`PhoneDrive`")
	- These are virtual SD cards that let you persist data on emulators. They are pretty simple, but they also do things like ensuring that you only ever have an SD card in one live phone at once.
- Phone runners ("`PhoneRunner`")
	- These are actual processes running on hardware in the cloud to emulate phones. They are abstracted away to `PhoneBox`s so that you can just "run" a `PhoneRunner` directly from a `PhoneBox`. `PhoneRunner`s contain information about the process, such as where it is running, uptime, etc.