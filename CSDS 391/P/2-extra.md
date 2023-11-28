# Multi Layer Networks

Similar to a single layer (0 hidden layers) network, a multi-layer network attempts to create a network such that when an input is passed through, it can accurately predict the output.

When before with a single layer network, each output would be the sum of weights multiplied by every characteristic (input) plus a bias. This number will then be fed through a non-linearity. Whilst in a single layer network, this is all that happens, for a multi layer network imagine the network deriving and tuning new characteristics from your original ones, then training the remaining of the model based on these created characteristics.

# Multiple Non-linearities

Based off the first project, I discovered that the sigmoid often causes training issues where if the input data is far off the end of the sigmoid, the derivative will be so close to 0 that very little training will be done. All tanh, sigmoid, and softmax struggle from this issue as they have horizontal asymtotes. This is when I attempted to use the ReLU function, where $y=x$ when $x>0$, but $y=0$ when $x<0$. This did not look promising to me as the left side of the nonlinearity would suffer from the same issue but worse: where the derivative would completely equal 0 meaning no training would be done. This is when I switched to a leaky ReLU for all the hidden layers as it does not suffer from the same diminishing derivative problem whilst still introducing a nonlinearity. For the last layer I still opted to use a softmax as the output vector should be a one-hot, and the softmax function scales outputs to roughly fit this requirement.

# Multiple Network architectures


