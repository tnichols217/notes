# Multi Layer Networks

Similar to a single layer (0 hidden layers) network, a multi-layer network attempts to create a network such that when an input is passed through, it can accurately predict the output.

When before with a single layer network, each output would be the sum of weights multiplied by every characteristic (input) plus a bias. This number will then be fed through a non-linearity. Whilst in a single layer network, this is all that happens, for a multi layer network imagine the network deriving and tuning new characteristics from your original ones, then training the remaining of the model based on these created characteristics.

# Multiple Non-linearities

Based off the first project, I discovered that the sigmoid often causes training issues where if the input data is far off the end of the sigmoid, the derivative will be so close to 0 that very little training will be done. All tanh, sigmoid, and softmax struggle from this issue as they have horizontal asymtotes. This is when I attempted to use the ReLU function, where $y=x$ when $x>0$, but $y=0$ when $x<0$. This did not look promising to me as the left side of the nonlinearity would suffer from the same issue but worse: where the derivative would completely equal 0 meaning no training would be done. This is when I switched to a leaky ReLU for all the hidden layers as it does not suffer from the same diminishing derivative problem whilst still introducing a nonlinearity. For the last layer I still opted to use a softmax as the output vector should be a one-hot, and the softmax function scales outputs to roughly fit this requirement.

# Multiple Network architectures

Here is a graph of time taken training vs. accuracy

![[Pasted image 20231128184332.png]]
(Generated with TensorBoard)

With the following color scheme for different network architectures:

![[Pasted image 20231128184409.png]]

As you can see in the data, the architecture of two hidden layers with size 8 and 8 generalized the fastest and also converged the fastest.

![[Pasted image 20231128184536.png]]

It even beat a network with more layers but less characteristics per layer: 5555, and 555.

The worst performing in the bunch was the model with no hidden layers, it generalized slow and never converges to an acceptable error.

# K-means clustering

K-means clustering will only ever be able to characterize models by their proximity to a generated mean. This means that K-means clustering is not possible to classify a dataset where different classes are not clustered around the same area, possibly intertwining and creating other patterns with the other classes.

Based off the previous K-means clustering on the iris dataset in P2, it quickly is able to find and create clusters on the dataset that roughly resemble that of the truth. Although it appears to have problems nearer to the decision boundaries where it will converge to a boundary that does not match that of the truth, because k-means clustering does not have feedback from known truths.

K-means clustering converges quickly and is easy to compute however, but will not offer as much accuracy as possible compared to neural networks. In the case of this dataset, since the classification boundaries are relatively simple, k-means works comparatively well, but NNs do perform better in a similar training time.

# Optimizers / Algorithmic Learning Rate

![[Pasted image 20231128190829.png]]

After training the same model over all the different optimizers, with layers of 8 and 8, I found that the best optimizers were ORMSprop, Adam, then Nadam in that order.
