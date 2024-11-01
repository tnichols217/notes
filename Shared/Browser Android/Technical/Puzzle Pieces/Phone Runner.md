# Overview

This is a specific android emulator process that is running on a `EmulatorCompute` and might be streaming out data through a `JanusFacilitator`.

These `PhoneRunner`s are always created by specifying a `PhoneBox` to run. The actual `PhoneRunner`s have a lot of metadata on things like where they are running, which `JanusFacilitor` they are processing video output through, which ports you can access which pieces of the running devices on, and that sort of thing.

Automatically copy screencopy over if it isn't already on the phone.