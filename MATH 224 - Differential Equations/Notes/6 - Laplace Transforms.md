# Laplace Transforms

The Laplace transform compares how similar a function is to a standard function.

Its general form is

$\int\limits_{-N}^{N}y(t)q(t)~dt$

For very large $N$
$q(t)$ is the standard function you are comparing to, often of the forms
- $\sin(\omega t)$
- $e^{-zt}$ or $e^{-st}$ and $e^{-i\omega t}$

For the purposes of differential equations, we will most commonly be using $e^{-st}$ in the form

$\int\limits_{0}^{\infty}y(t)e^{-st}~dt$

## Properties of Laplace Transforms

- $L[\frac{dy}{dt}]=sL[y]-y(0)$
- $L[f+g]=L[f]+L[g]$
- $L[cf]=cL[f]$ for constant $c$
- $L^{-1}[F]=f\iff L[f]=F$
- $L[u_a(t)f(t-a)]=e^{-sa}F(s)$
- $L[e^{st}f(t)]=F(s-a)$

## For the application of differential equations

It is often significantly easier to take the Laplace of both sides of the differential equation, then solve for $L[y]$ before inverting it to find $y$

## Heaviside function

Turns "on" functions if you multiply them together

$u_a(t)=\begin{cases}0& \text{if } t<a\\1& \text{if }t\ge a\end{cases}$

## Dirac-Delta function

This is the "derivative" of the Heaviside function.

$\delta_a(t)=\begin{cases}\text{big enough that integrating this instant will increase the integral by 1} &\text{if } t=a\\0& \text{else}\end{cases}$

## Common transforms

- $L[e^{at}]=\frac{1}{s-a}$
- $L[\sin(\omega t)]=\frac{\omega}{s^{2}+\omega^{2}}$
- $L[e^{at}\sin(\omega t)]=\frac{\omega}{(s-a)^{2}+\omega^{2}}$
- $L[t\sin(\omega t)]=\frac{2\omega s}{(s^2+\omega^2)^2}$
- $L[u_{a}]=\frac{e^{-as}}{s}$
- $L[t^n]=\frac{n!}{s^{n+1}}$
- $L[\cos(\omega t)]=\frac{s}{s^{2}+\omega^{2}}$
- $L[e^{at}\cos(\omega t)]=\frac{s-a}{(s-a)^{2}+\omega^{2}}$
- $L[t\sin(\omega t)]=\frac{s^{2}-\omega^{2}}{(s^2+\omega^2)^2}$
- $L[\delta_a]=e^{-as}$
