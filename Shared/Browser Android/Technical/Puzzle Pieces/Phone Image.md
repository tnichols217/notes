# Overview

This is an image that can be wrapped with a `PhoneBox`. Making these images is highly configurable. You can provide your own image when you make a `PhoneImage`, but you can also use the API to create these images in a super configurable way. There's a few ways to create `PhoneImage`s (and can be more down the line):
- **Supply your own**: Supply a raw Android base image
- **Base Google Image**: Version locked official android base images
- **RobotNix Custom Android Image**: Api wrapper on RobotNix to build highly customized Android base images.
- **Docker builds**: A docker container that produces an android image as an artifact.

If we are building the image then we should inject screencopy.