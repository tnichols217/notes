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
$M(t)=1+\sum\limits_{k=1}^\infty\frac{t^k}{k!}\prod\limits_{r=0}^{k-1}\frac{a+r}{\alpha+\beta+r}$

## Cauchy $(\theta,\sigma)$

Given $-\infty<x<\infty;\quad-\infty<\theta<\infty;\quad\sigma>0$

$f(x)=\frac{1}{\pi\sigma(1+(\frac{x-\theta}{\sigma})^2)}$

## Chi squared $(p)$

Given $0\le x<\infty;\quad p=1,2,3,...$

$f(x)=\frac{x^{p/2-1}e^{-x/2}}{\Gamma(p/2)2^{p/2}}$
$\mu=p$
$\sigma^2=2p$
$M(t)=(\frac{1}{1-2t})^{p/2}$

## Double Exponential $(\mu,\sigma)$

Given $-\infty<x<\infty;\quad -\infty<\mu<\infty;\quad \sigma>0$

$f(x)=\frac{e^{-|x-\mu|/\sigma}}{2\sigma}$
$\mu=\mu$
$\sigma^2=2\sigma^2$
$M(t)=\frac{e^{\mu t}}{1-(\sigma t)^2}$

## Exponential $\beta$

Given $0\le x<\infty;\quad \beta>0$

$f(x)=\frac{e^{-x/\beta}}{\beta}$
$\mu=\beta$
$\sigma^2=\beta^2$
$M(t)=\frac{1}{1-\beta t}$

## F $(v_1,v_2)$

Given $0\le\infty;\quad v_1,v_2=1,2,3,...$

$f(x)=\frac{\Gamma(\frac{v_1+v_2}{2})}{\Gamma(\frac{v_1}{2})\Gamma(\frac{v_2}{2})}(\frac{v_1}{v_2})^{v_1/2}\frac{x^(v_1-2)/2}{(1+\frac{v_1x}{v_2})^{(v_1+v_2)/2}}$
$\mu=\frac{v_2}{v_2-2}$
$\sigma^2=2(\frac{v_2}{v_2-2})^2\frac{v_1+v_2-2}{v_1(v_2-4)}$
$EX^n=\frac{\Gamma(\frac{v_1+2n}{2})\Gamma(\frac{v_2-2n}{2})}{\Gamma(v_1/2)\Gamma(v_2/2)}(\frac{v_2}{v_1})^n\quad;n<\frac{v_2}{2}$

## Gamma Distribution $(\alpha,\beta)$

Given $0\le x<\infty;\quad \alpha,\beta>0$

$f(x)=\frac{x^{\alpha-1}e^{-x/\beta}}{\Gamma(\alpha)\beta^\alpha}$
$\mu=\alpha\beta$
$\sigma^2=\alpha\beta^2$
$M(t)=(\frac{1}{1-\beta t})^\alpha$

## Logistic $(\mu,\beta)$

Given $-\infty<x<\infty;\quad -\infty<\mu<\infty;\quad\beta>0$

$f(x)=\frac{1}{\beta}\frac{e^{-(x-\mu)/\beta}}{}$
