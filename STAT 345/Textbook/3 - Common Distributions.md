---
date created: 2023-10-02 10:17
date updated: 2023-10-03 15:11
---

# Discrete Distributions

## Bernoulli $(p)$

Given $x=0,1;\quad 0\le p\le 1$

$P(X=x)=p^x(1-p)^{1-x}$
$\mu=p$
$\sigma^2=p(1-p)$
$M(t)=(1-p)+pe^t$

## Binomial $(n,p)$

Given $x=0,1,2,...,n;\quad 0\le p\le 1$

$P(X=x)=\begin{pmatrix}n\\x\end{pmatrix}p^x(1-p)^{n-x}$
$\mu=np$
$\sigma^2=np(1-p)$
$M(t)=(pe^t+(1-p))^n$

## Discrete Uniform $(N)$

Given $x=1,2,...,N;\quad N=1,2,...$

$P(X=x)=1/N$
$\mu=\frac{N+1}{2}$
$\sigma^2=\frac{(N+1)(N-1)}{12}$
$M(t)=\frac{1}{N}\sum\limits_{i=1}^Ne^{it}$

### $\mu$

$EX=\sum\limits_{x=1}^N\frac{x}{N}$
$\sum\limits_{i=1}^ki=\frac{k(k+1)}{2}$
$EX=\frac{1}{N}\frac{N(N+1)}{2}$
$EX=\frac{N+1}{2}$

### $\mu_2$

$E(X^2)=\sum\limits_{x=1}^N\frac{x^2}{N}$
$\sum\limits_{i=1}^ki^2=\frac{k(k+1)(2k+1)}{6}$
$E(X^2)=\frac{1}{N}\frac{N(N+1)(2N+1)}{6}$
$E(X^2)=\frac{(N+1)(2N+1)}{6}$

### $\sigma^2$

$\sigma^2=E(X^2)-(EX)^2$
$\sigma^2=\frac{(N+1)(2N+1)}{6}-\frac{(N+1)^2}{4}$
$\sigma^2=\frac{4N^2+6N+2-3N^2-6N-3}{12}$
$\sigma^2=\frac{N^2-1}{12}$

## Geometric $(p)$

Given $x=1,2,...;\quad 0\le p\le 1$

$P(X=x)=p(1-p)^{x-1}$
$\mu=1/p$
$\sigma^2=\frac{1-p}{p^2}$
$M(t)=\frac{pe^t}{1-(1-p)e^t}$

## Hypergeometric $(N,K,M)$

Given $x=0,1,2,...,K;\quad M-(N-K)\le x\le M;\quad N,M,K=0,1,2,...$

$P(X-x)=\frac{\begin{pmatrix}M\\x\end{pmatrix}\begin{pmatrix}N-M\\K-x\end{pmatrix}}{\begin{pmatrix}N\\K\end{pmatrix}}$
$\mu=KM/N$
$\sigma^2=\frac{KM(N-M)(N-K)}{N^2(N-1)}$

## Negative Binomial $(r,p)$

Given $x=0,1,2,...;\quad0\le p\le1$

$P(X=x)=\begin{pmatrix}r+x-1\\x\end{pmatrix}p^r(1-p)^x$
$\mu=\frac{r(1-p)}{p}$
$\sigma^2=\frac{r(1-p)}{p^2}$
$M(t)=(\frac{p}{1-(1-p)e^t})^r$

## Poisson Distribution

Given $x=0,1,2,...;\quad0\le\lambda$

$P(X=x)=\frac{e^{-\lambda}\lambda^x}{x!}$
$\mu=\lambda$
$\sigma^2=\lambda$
$M(t)=e^{\lambda(e^t-1)}$

# Continuous Distributions

## Beta $(\alpha,\beta)$

Given $0\le x\le 1;\quad \alpha>0;\quad \beta>0$

$f(x)=\frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}$
$\mu=\frac{\alpha}{\alpha+\beta}$
$\sigma^2=\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$
$M(t)=1+\sum\limits_{k=1}^\infty\frac{}{}$

## Cauchy $(\theta,\sigma)$

$f(x)=\frac{1}{\pi\sigma(1+(\frac{x-\theta}{}))}$

## Exponential Distribution

For $\beta>0$
$\text{Expo}(\beta)=\begin{cases}\frac{1}{\beta}e^{-x/\beta}&,x\ge0\\0&,x<0\end{cases}$

## Gamma Distribution

### PDF

For $\alpha>0,\beta>0$
$\text{Gamma}(\alpha,\beta)=\begin{cases}\frac{1}{\Gamma(\alpha)\beta^\alpha}x^{\alpha-1}e^{-x/\beta}&,x\ge0\\0&,x<0\end{cases}$

## Cauchy Distribution

### PDF

$\text{Cauchy}=\frac{1}{\pi(1+x^2)}$
