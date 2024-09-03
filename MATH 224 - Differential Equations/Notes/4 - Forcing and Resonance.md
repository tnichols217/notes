# Forcing and Resonance

## Forced Harmonic Resonators

It takes the form of:

$m\frac{d^{2}y}{dt^2}+b\frac{dy}{dt}+ky=f(t)$

or more commonly as:

$\frac{d^{2}y}{dt^2}+p\frac{dy}{dt}+qy=g(t)$

This is **second-order**, **linear**, **nonhomogeneous** (does have constants on the right side), **constant-coeffecient**, **nonautonomous**

$\frac{d^{2}y}{dt^2}+p\frac{dy}{dt}+qy=0$

Is referred to as the associated **homogenous** equation, as it has nothing on the right side.

## Extended Linearity Principle

Let $y_{p}(t),y_{q}(t)$ be particular solutions of the nonhomogeneous system and $k_1y_{1}(t)+k_2y_2(t)$ be the general solution of the homogeneous system.

1. $k_1y_{1}(t)+k_2y_2(t)+y_p(t)$
   Is the general solution to the nonhomogeneous equation
2. $y_{p}(t)-y_{q}(t)$
   Is a solution to the homogeneous equation

### Proof:

$\frac{d^2y}{dt}(y_{h}+y_{p})+p\frac{dy}{dt}(y_{h}+y_{p})+q(y_{h}+y_{p})$
$=0+g(t)=g(t)$

$\frac{d^2y}{dt}(y_{p}-y_{q})+p\frac{dy}{dt}(y_{p}-y_{q})+q(y_{p}-y_{q})$
$=g(t)-g(t)=0$

## Solving for particular solutions of nonhomogeneous equations

Typically, the easiest way to solve for a particular solution is to guess and check based on what $g(t)$ is.

### Exponentials

For example, if $g(t)=ae^{bt}$ we can guess $y(t)=ke^{bt}$ as a solution, and solve for $k$

If $b$ happens to be an eigenvalue, we can guess $y(t)=kte^{bt}$ as the remaining $e^{bt}$ terms will be absorbed by the homogeneous equation

### Sinusoidals

For $g(t)$ being any sinusoidal we can structure our guess as $k_{1}\sin (at)+k_{2}\cos(at)$

For sinusoidals, we may also replace the sinusoidals with an $e^{iat}$ then take the imaginary portion of the solution for $\sin$ or the real portion for $\cos$

For solutions of the form $ae^{it}$, we may solve for a simple solution by solving this equation

$ae^{it}= |a|e^{i(\theta+t)}$

for $\theta$, which happens to be the phase angle, which can be found from the initial complex $a$ with $\arctan$

## Resonance

Resonance occurs when a sinusoidal nonhomogeneous equation's period lines up (or closely lines up) with the natural frequency of the homogenous equation.

### Beating

Beating occurs if the periods closely line up, creating a graph that looks like a sinusoidal within a low frequency sinusoidal.

```function-plot
data:
	- fn: cos(10*x)+cos(11*x)
	- fn: 2*cos(10.5*x)*cos(0.5*x)
xAxis:
	domain:
		- 0
		- 10
yAxis:
	domain:
		- -2
		- 2
```

The frequency of the beating can be solved for through complexification

$\cos(at)-\cos(bt)$
$=(e^{iat}-e^{ibt})_{re}$

For the sake of simplicity, we will take the real portion at the end

Let
$\alpha= \frac{a+b}{2}$
$\beta= \frac{a-b}{2}$

$=e^{i(\alpha+\beta)t}-e^{i(\alpha-\beta)t}$
$=e^{i\alpha t}(e^{i\beta t}-e^{-i\beta t})$
$=e^{i\alpha t}(2\cos(\beta t))$
$\implies2\cos(\alpha t)\cos(\beta t)$

### Solving the resonant case

When solving resonant cases, we should be using a guess of $k_1t\sin(at)+k_2t\cos(at)$ or $te^{iat}$

This will eventually lead to a solution that shows a linearly increasing sinusoidal.

### Finding amplitude the end behavior of a damped equation

With the form:

$\frac{d^{2}y}{dt^{2}}+p\frac{dy}{dt}+qy= \cos(\omega t)$
$\implies \frac{d^{2}y}{dt^{2}}+p\frac{dy}{dt}+qy= e^{i\omega t}$

We guess $ae^{i\omega t}$

$=-a\omega^{2}e^{i\omega t}+p(ai\omega e^{i\omega t})+q(ae^{i\omega t})$
$a(-\omega^{2}+q-pi\omega)=1$
$a= \frac{1}{-\omega^{2}+q-ip\omega}$

Thus $ae^{i\omega t}$ will have the amplitude of $|a|$

$|a|=\frac{1}{\sqrt{(q-\omega^{2})^2+(p\omega)^{2}}}$

And the phase we tend to choose is 

$\phi=\arctan(\frac{-p\omega}{q-\omega^{2}})$

### Additional parameters

If the phase $\theta$ is a parameter, we simply shift the phase of the particular solution of nonhomogeneous equation.

This can be easily proven with $\tau$-sub

If the amplitude $F$ is a parameter, the solving for $k$ does not change, and will simply be a multiple of a solution of $F=1$
