# Fourier Series

The claim of the Fourier Series is that any periodic function may be represented as a sum of $\sin$ and $\cos$.

## Orthogonal Signals

Two signals $a, b$ are considered orthogonal if their dot product is zero when integrated.

$\int\limits_{a}^{b}\vec x(t)\cdot\vec y(t)~dt=0$

This does not require it to be $0$ over the entire interval, just that it integrates to become $0$.

## Signal Correlation

We define the correlation between two signals to be $\cos\theta$ where $\theta$ is the angle between the two signals.

$\rho=\cos\theta=\frac{\vec x\cdot\vec y}{|\vec x||\vec y|}$

$=\sqrt{E_{x}E_{y}}^{-1}\int\limits_{-\infty}^{\infty}x(t)y^{*}(t)~dt$

Where if the signals are complex, $y^{*}$ is the complex conjugate.

## Fundamental Period and Frequency

The fundamental period, typically denoted $T$, is the period of time before the function repeats.

The fundamental frequency is just the invese of this:

$f_{0}=\frac{1}{T}$

## Error Functions

In order to create Fourier Series that is as close to the original function as possible, we create an error (or loss) function that we aim to minimise.

We may define one as the power of the difference between our original signal and our alternative signal.

$e(t)=x(t)-\sum\limits\limits_{n=1}^{N}c_{n}x_{n}(t)$

$E_{e}=\int\limits_{t_{1}}^{t_{2}}e^{2}(t)~dt$

## Solving the Fourier Series

Additionally, we find that the optimal values for $c$ must be when

$\frac{d}{d\vec c}E_{e}=\vec 0$

Where error is at the minimum for each possible value of $c$.

Expanding, we see that for any $c_{i}\in\vec c$
And for the corresponding $x_{i}(t)\in\vec x(t)$ where $\vec x(t)$ are the functions composing the Fourier series

$\frac{d}{dc_{i}}\int\limits_{t_{1}}^{t_{2}}\left(x(t)-\sum\limits_{n=1}^{N}c_{n}x_{n}(t)\right)^{2}~dt=0$
$\implies\frac{d}{dc_{i}}\int\limits_{t_{1}}^{t_{2}}\left(x(t)-c_{i}x_{i}(t)\right)^{2}~dt=0$
$\implies\frac{d}{dc_{i}}\int\limits_{t_{1}}^{t_{2}}\left(x^{2}(t)-2c_{i}x_{i}(t)x(t)+c_{i}^{2}x_{i}^{2}(t)\right)^{2}~dt=0$
$\implies\int\limits_{t_{1}}^{t_{2}}\left(-2x_{i}(t)x(t)+2c_{i}x_{i}^{2}(t)\right)^{2}~dt=0$
$\implies c_{i}=\frac{\int\limits_{t_{1}}^{t_{2}}x(t)x_{i}(t)~dt}{\int\limits_{t_{1}}^{t_{2}}x_{i}^{2}(t)~dt}$
$\implies c_{i}=\frac{1}{E_{i}}\int\limits_{t_{1}}^{t_{2}}x(t)x_{i}(t)~dt$

Proving that the scale parameters for each function does not depend on other values nor on the number of functions being composed. This is known as the **finality property**.

## Periodic Functions

For periodic functions of a specific fundamental frequency, we pick our functions to sum upon to be sinusoidals of multiple of the same fundamental frequency.

Doing this ensures that our output maintains the periodicity of the original function.

This means that typically $\vec x(t)=\{x_{n}(t)=\sin(2\pi f_0nt):n\in[1,N]\}$
As $N\to\infty$

Or with the $\cos$ function, or both for functions that require it.

## Spectra

Fourier Series Spectra graphs are just graphs of the parameters corresponding to various vectorized parameters of the summation.

For summations of $\sin$ or $\cos$ you typically would be plotting $c$ vs $n$ (discrete).

For more complicated periodic functions, you may be plotting $c_{\sin},c_{\cos}$ vs $n$ or $c,\theta$ vs $n$.
