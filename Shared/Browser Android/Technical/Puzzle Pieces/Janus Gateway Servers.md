# Overview

This is the big backend server that all WebRTC traffic gets routed through. It will have a UUID so that eventually there can be multiple different Janus servers running.

These Janus Gateway Servers that facilitate video streams are called `JanusFacilitator`s.

When someone launches a `PhoneRunner` that is within a `PhoneBox` that requires video/audio streaming, it will automatically be assigned to a `JanusFacilitator`. The user will not have control over where the streaming is routed through.