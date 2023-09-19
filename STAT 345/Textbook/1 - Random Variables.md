---
date created: 2023-09-18 19:31
---

# Random Variables

> [!def]
> **Random Variable**
> A function that maps a Sample Space $S$ into the real numbers
> Maps countable spaces to discrete numbers and uncountable spaces to continuous numbers
>
> Ex: number of people voting yes (sum of yes's)

## Induced Probability Function

With a random variable $X$ on $S$ with range $\chi=\{x_1,...,x_m\}$
We can define the induces probability function $P_\chi$ in $\chi$
We observe $X=x_i$ if

$P_\chi(X=x_i)=P(\{s_j\in S:X(s_j)=x_i\})$ for countable $\chi$
$P_\chi(X\in A)=P(\{s\in S: X(s)\in A\})$
That the probability of $X=x_i$ on $\chi$ is equal to the probability of set with values that get transformed to $x_i$ by function $X$

## Inverse Mapping $X^{-1}$

Defined as a function that meets the criteria:

$X^{-1}(y)=\{x\in S:X(x)=y\}$

Maps results of $X$ back to all the possible samples that could have made that result.
If the function mapping is 1-to-1, then the inverse will always be a singular value instead of a set of values.

## Cumulative Distributive Function $F$

$F_X(x)=P_X(X\le x)\qquad\forall x\in R$
Defined as the sum of every possibility below a value

- $F_X(x)$ must be defined for all $x\in R$
- Same for discrete (step function) and continuous (continuous function
- $\lim\limits_{x\rightarrow-\inf}F(x)=0\qquad\lim\limits_{x\rightarrow\inf}F(x)=1$
- $F(x)$ does not decrease over $x$
- $F(x)$ is right continuous
- $F(x)$ is uniquely identifiable for all probability functions

### CDF Theorem

$P(a<X\le b)=P(\{X\le b\}\setminus\{X\le a\})$
$=P(\{X\le b\})-P(\{X\le b\}\cap\{X\le a\})$
$=P(\{X\le b\})-P(\{X\le a\})$
$=F(b)-F(a)$

For continuous distributions of $X$
$P(a<X\le b)$
$=P(a\le X\le b)$
$=P(a\le X<b)$
$=P(a<X<b)$

### The Exponential CDF

$F(X)=\cases{0\qquad\qquad\ \ x<0\\1-e^{-x}\qquad x\ge0}$

## PMFs and PDFs $f$

The PMF/PDF of a random variable if and only if

- $f_x(x)\ge0\qquad f_x\le R$
- Either
  - $\Sigma f(x)=1$ (PMF)
  - $\int_{-\infty}^\infty f(x)dx=1$ (PDF)

### The Probability Mass Function

$f(x)=P_X(X=x)$
$F(x)=\sum\limits_{u\le x}f(u)$
The probability that a point equals a value 

To inverse:

> $f(x)=F(x)-\lim\limits_{u\uparrow x}F(u)$

Is the probability that a distribution takes a particular value (for discrete distributions)

### The Probability Density Function

$F_X(x)=\int_{-\infty}^{x}f_X(u)du\qquad\forall x\in R$
The integral of the CDF

To inverse:

> $f(x)=\frac{d}{dx}F(x)$

Is defined only for continuous distributions
