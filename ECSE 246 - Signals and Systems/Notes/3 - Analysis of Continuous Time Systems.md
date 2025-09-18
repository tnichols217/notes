# Analysis of LTICs

## Standard Form

LTICs are able to be formatted in the form:

$\frac{d^{N}y(t)}{dt^{N}}+a_{1}\frac{d^{N-1}y(t)}{dt^{N-1}}+\dots+a_{N-1}\frac{dy(t)}{dt}+a_{N}y(t)$
$=b_{N-M}\frac{d^{M}x(t)}{dt^{M}}+b_{N-M+1}\frac{d^{M-1}x(t)}{dt^{M-1}}+\dots+b_{N-1}\frac{dx(t)}{dt}+b_{N}x(t)$

They can also be represented in differential operator form:

$(D^{N}+a_{1}D^{N-1}+\dots+a_{N-1}D+a_{N})y(t)$
$=(b_{N-M}D^{M}+b_{N-M+1}D^{M-1}+\dots+b_{N-1}D+b_{N})x(t)$

In Matrix form, the formula appears completely simple:

$\vec D_{N}'y(t)\vec a=\vec D_{M}'x(t)\vec b$

Where $\vec D_{n}$ is the vector of increasing-order derivative operators from $0$ up to order $n$.

$\vec D_{N}'\vec a$ is typically referred to as $Q(D)$ and $\vec D_{M}'\vec b$ as $P(D)$

## Properties of this Form

When $M>N$, this LTIC displays unwanted properties, including being unstable.

## Total Response Decomposition

Total Response = Zero-Input Response + Zero-State Response

$y(t)=y_{zir}(t)+y_{zsr}(t)$

This is due to the fact that LTICs are linear, and thus satisfy the superposition principle.

$\vec D_{N}'y_{0}(t)\vec a=0$
$\vec D_{N}'y(t)\vec a=\vec D_{M}'x(t)\vec b$
$\implies\vec D_{N}'(y(t)+y_{0}(t))\vec a=\vec D_{M}'x(t)\vec b$

### Zero Input Response (ZIR)

The zero input response is the response of $y$ when the input $x(t)=0$.

The ZIR is typically represented with the subscript of $_{0}$ or $_{zir}$.

This results in the following expression for the system:
$\vec D_{N}'y_{0}(t)\vec a=0$

Since multiple derivatives of our equation must sum to $0$ over all $t$, we can safely assume the form of $y_{0}(t)$ to be of the form $ce^{\lambda t}$.

This now produces the equation:

$c\vec a'\vec\lambda_{N}e^{\lambda t}=0$

Where $\vec \lambda_{n}$ represents the vector of increasing powers of the constant $\lambda$, from $\lambda^{0}$ to $\lambda^{n}$

Ignoring trivial solutions for $\lambda$ provides:

$\vec a'\vec\lambda_{N}=0=Q(\lambda)$

This formula here is also known as the characteristic equation of the system, as it finds all possible $\lambda$.

This is then factorized to find the roots.

$\vec a'\vec \lambda_{N}=\prod\limits\limits_{n=1}^{N}(\lambda-\lambda_{n})$

We now call the vector of all $\lambda_{n}$, $\vec \lambda_{N}^{*}$

$\vec a'\vec\lambda_{N}=\prod\lambda-\vec\lambda_{N}^{*}$

The resulting general solution will be of the following form, assuming no repeated values in $\vec\lambda_{N}^{*}$

$y_{0}(t)=\vec c'e^{t\vec\lambda_{N}^{*}}$

Where $\vec c$ are arbitrary constants determined by the original constraints of the problem.

#### Repeated Roots

Since the prior solution required our $\lambda$ to be unique, the solution does not work for repeated roots.

Let $\vec\lambda_{N}^{**}$ be the unique values of $\vec\lambda_{N}^{*}$
The following is a re-writing of the original general solution as similar $\lambda$'s constants combine linearly.

$y_{0}(t)=\sum\limits_{\lambda\in\vec\lambda_{N}^{**}}c_{\lambda}e^{t\lambda}$

However, the solution to the differential equation $(D-\lambda)^{n}y=0$ has the general form of $\vec c'\vec t_{\lambda}e^{\lambda t}$

Where $\vec t_{\lambda}$ is a vector from $t^{0}\dots t^{n-1}$ where $n$ is the number of times $\lambda$ is repeated.

Substituting this general solution into our original solution yields

$y_{0}(t)=\sum\limits_{\lambda\in\vec\lambda_{N}^{**}}\vec c_{\lambda}'\vec t_{\lambda}e^{\lambda t}$

In general this can be treated as:

$y_{0}(t)=\vec c'(\vec t\odot e^{t\vec\lambda_{N}^{*}})$

Where $\vec t$ is the vector containing the correspondent $t^{n}$ for each duplicate in $\lambda$

#### Imaginary Roots

There is nothing special about imaginary roots. In real systems, if imaginary roots are present, they must appear in conjugate pairs.

### Unit Impulse Response

The solving process is mainly similar to solving for the ZIR.

First, obtain our $\vec\lambda_{N}^{*}$:

$\vec a'\vec\lambda_{N}=\prod\lambda-\vec\lambda_{N}^{*}$

Our general solution to $h(t)$ will be of the form:

$h(t)=b_{0}\delta(t)+u(t)\sum\limits_{\lambda\in\vec\lambda_{N}^{**}}\vec c_{\lambda}'\vec t_{\lambda}e^{\lambda t}$ or $h(t)=b_{0}\delta(t)+\vec c'(\vec t\odot e^{t\vec\lambda_{N}^{*}})u(t)$

Where $u(t)$ is the unit step function.

Substituting back into our original system:

$\vec D_{N}'y(t)\vec a=\vec D_{M}'x(t)\vec b\implies\vec D_{N}'h(t)\vec a=\vec D_{M}'\delta(t)\vec b$

Where $h(t)$ is the Unit Response

The derivatives of $h(t)$ around $t=0$ will look similar to:

$\dot h(t)=\vec c'(\vec t\odot\vec\lambda_{N}^{*}\odot e^{t\vec\lambda_{N}^{*}})\delta(t)\implies\dot h(t)=K_{1}\delta(t)\quad\text{around 0}$
$\ddot h(t)=K_{1}\dot\delta(t)+K_{2}\delta(t)$ by taking the derivative of the previous equation, and adding a term to account for the possibility of $\dot h(t)$ being discontinuous at $t=0$
This process repeats for further derivatives of $h(t)$

This also means that $K_{1}=h(0^{+})$, $K_{2}=\dot h(0^{+})$, etc.

Around $0$, we may simplify our system:

$\vec a'\text{Toeplitz}(\vec K)=\vec b$

Which allows us to solve for $\vec K$
This also means that $\vec D_{N}'h(0^{+})\vec 1=\vec K$

Substituting in our original system,

$\vec D_{N}'\vec c'(\vec t\odot e^{t\vec\lambda_{N}^{*}})\vec 1=\vec K$

Which allows us to solve for $\vec c$

Thus finalizing our solution for $h(t)$ as:

$h(t)=b_{0}\delta(t)+\vec c'(\vec t\odot e^{t\vec\lambda_{N}^{*}})u(t)$
