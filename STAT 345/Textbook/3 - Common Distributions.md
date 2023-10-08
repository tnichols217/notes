---
date created: 2023-10-02 10:17
date updated: 2023-10-03 15:11
---

# Discrete Distributions

## Bernoulli $(p)$

Given $x=0,1;\quad 0\le p\le 1$

$P(X=x)=p^x(1-p)^{1-x}$
$EX=p$
$\sigma^2=p(1-p)$
$M(t)=(1-p)+pe^t$

## Binomial $(n,p)$



## Discrete Uniform

Given $x=1,2,...,N;\quad N=1,2,...$

$P(X=x)=1/N$
$EX=\frac{N+1}{2}$

### PMF

$\text{Uniform}(N)=\begin{cases}\frac{1}{N}&,x=1,2,3,...,N\\0&,\text{otherwise}\end{cases}$

### $\mu$

$EX=\frac{N+2}{2}$

#### Proof

$EX=\sum\limits_{x=1}^N\frac{x}{N}$
$\sum\limits_{i=1}^ki=\frac{k(k+1)}{2}$
$EX=\frac{1}{N}\frac{N(N+1)}{2}$
$EX=\frac{N+1}{2}$

### $\mu_2$

$E(X^2)=\frac{(N+1)(2N+1)}{6}$

#### Proof

$E(X^2)=\sum\limits_{x=1}^N\frac{x^2}{N}$
$\sum\limits_{i=1}^ki^2=\frac{k(k+1)(2k+1)}{6}$
$E(X^2)=\frac{1}{N}\frac{N(N+1)(2N+1)}{6}$
$E(X^2)=\frac{(N+1)(2N+1)}{6}$

### $\sigma^2$

$\sigma^2=\frac{N^2-1}{12}$

#### Proof

$\sigma^2=E(X^2)-(EX)^2$
$\sigma^2=\frac{(N+1)(2N+1)}{6}-\frac{(N+1)^2}{4}$
$\sigma^2=\frac{4N^2+6N+2-3N^2-6N-3}{12}$
$\sigma^2=\frac{N^2-1}{12}$

## Bernoulli Distribution

For win/loss scenarios where 1 is defined as a success and 0 is a failure.

### PMF

$\text{Bernoulli}(p)=p^x(1-p)^{1-x}$

## Binomial Distribution

### PMF



## Poisson Distribution

### PMF

For $\lambda>0$
$\text{Poisson}(\lambda)=\begin{cases}\frac{e^{-\lambda}\lambda^x}{x!}&,x=0,1,2,...\\0&,\text{otherwise}\end{cases}$

# Continuous Distributions

## Exponential Distribution

### PDF

For $\beta>0$
$\text{Expo}(\beta)=\begin{cases}\frac{1}{\beta}e^{-x/\beta}&,x\ge0\\0&,x<0\end{cases}$

## Gamma Distribution

### PDF

For $\alpha>0,\beta>0$
$\text{Gamma}(\alpha,\beta)=\begin{cases}\frac{1}{\Gamma(\alpha)\beta^\alpha}x^{\alpha-1}e^{-x/\beta}&,x\ge0\\0&,x<0\end{cases}$

## Cauchy Distribution

### PDF

$\text{Cauchy}=\frac{1}{\pi(1+x^2)}$
