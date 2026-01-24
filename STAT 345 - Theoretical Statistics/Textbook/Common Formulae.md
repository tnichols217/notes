# Common Formulae

## Poisson / Normal approximation

$np<10$, $p$ small $\implies$ Poisson approximation
$np,n(1-p)>10\implies$ Normal approximation

## CLT

$X_{0<i<n}$ independent RVs.

$\bar X_{n}\approx N\left( \mu, \frac{\sigma^{2}}{n} \right)$

## Markov's Inequality

For any nonnegative random variable $X$ and $a>0$

$P(X\ge a)\le \frac{\mathbb E[X]}{a}$

## Chebychev's Inequality

Let $X$ be a random variable and let $g(x)$ be a non-negative function. Then, for any $r>0$

$P(g(X)\ge r)\le \frac{Eg(X)}{r}$

## Normal Probability Inequality

With $Z$ as a normal distribution,

$P(|Z|\ge t)\le\sqrt{\frac{e}{\pi}}\frac{e^{-t^2/2}}{t}$ for all $t>0$

## Kolmogorov's Inequality

Assuming independent RV $S_{k}$ with finite variance

$P(\max\limits_{1\le k\le n}|S_{k}|\ge\lambda)\le \frac{\text{Var}(S_{n})}{\lambda^{2}}$

## Expectation

$E[g(X)]=\int g(x)f_{X}(x)~dx$

Expectation is linear.

### Joint Expectation

$E[g(X, Y)]=\int\int g(x, y)f_{X,Y}(x, y)~dx~dy$

## Moments

$\mu'_{n}=\mathbb E[X^{n}]$

$\mu_{n}=\mathbb E[(X-\mathbb E[X])^{n}]$

$\mu=\mu'_{1}$
$\text{Var}=\mu_{2}=\mathbb E[X^{2}]-(\mathbb E[X])^{2}$

$M_{X}(t)=\mathbb E[e^{tX}]$
$\mu'_{n}=M_{X}^{(n)}(0)$

$M_{X,Y}(s, t)=\mathbb E[e^{sX+tY}]$
$\mathbb E[X^{m}Y^{n}]=\frac{\partial^{m+n}}{\partial s^{m}\partial t^{n}}M_{X,Y}(s,t)\bigg|_{0,0}$

Independent $\iff M_{X,Y}(s,t)=M_{X}(s)M_{Y}(t)$

## Covariance & Correlation

$\text{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$

$\text{Cov}(aX+b,cY+d)=ac\text{Cov}(X,Y)$

$\rho_{X,Y}=\frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}$
Independent $\implies\rho=0$

## Variance

$\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)+2\text{Cov}(X,Y)$
