# Quantum Mechanics

**Quantum Mechanics**: a method to explain the behavior of small particles (electron size)

Normally takes one of two approaches: Heisenburg's or Schrodiner's

## Comparisons with Classical Mechanics

|          | Classical Mechanics            | Quantum Mechanics                               |
| -------- | ------------------------------ | ----------------------------------------------- |
| Position | $x$                            | $x$                                             |
| Momentum | $p=mv$                         | $\frac{\hslash}{j}\frac{\partial}{\partial x}$  |
| Energy   | $E=KE+PE=\frac{1}{2}mv^{2}+PE$ | $-\frac{\hslash}{j}\frac{\partial}{\partial t}$ |

## Photoelectric Effect

When the surface of metal is exposed to light in a vacuum, electrons and ejected.

## Probability Density Functions (PDFs)

Gives the probability of obtaining a certain range by integrating over the PDF.

The integral of all PDFs from $-\infty$ to $\infty$ must $=1$ as the probability of getting absolutely anything must be $100\%$

Useful in quantum mechanics as we are able to calculate an expected (or average) value for particles, without needing to know the specific location of a particle.

### Expected Values

$Ex=\int\limits_{-\infty}^{\infty}xP(x)dx$

and for any general function $g(x)$, the $Eg(x)$ would be

$Eg(x)=\int\limits_{-\infty}^{\infty}g(x)P(x)dx$

Where $P(x)$ is our PDF

## Schrodinger's Approach

Schrodinger conceptualized quantum mechanics as wave mechanics.

1. There exists uncertainty
2. Uncertainties must be accounted for with probabilities
3. All particles are described with a wave function $\psi(x, y, z, t)$
	1. This function is **continuous**, **finite**, **single valued**

### The Wave Function $\psi$

The wave function represents any quantum particle.

It is:
1. continuous
2. finite
3. single valued
4. complex
5. Decomposible into position and time $\psi(\vec x, t)=\psi(\vec x)\psi(t)$

Its PDF is $\bar\psi\psi$ where $\bar\psi$ is the complex conjugate of $\psi$.

This PDF is able to give probabilities of where the particle may be

### "Deriving" Energy in a Quantum system

Analogous to the Classical formula:

$E=KE+PE=\frac{1}{2}mv^{2}+PE$

$PE=\mathbfit{v}$

$-\frac{\hslash}{j}\frac{\partial}{\partial t}=\frac{1}{2m}\left(\frac{\hslash}{j}\frac{\partial}{\partial x}\right)^{2}+PE$
$-\psi(x)\frac{\hslash}{j}\frac{\partial}{\partial t}\psi(t)=\frac{1}{2m}\left(\frac{\hslash}{j}\frac{\partial}{\partial x}\right)+PE$
