---
date created: 2023-10-02 10:17
---

# Discrete Distributions

## Discrete Uniform Distribution

### PMF

$\text{Uniform}(n)=\begin{cases}\frac{1}{n}&,x=1,2,3,.\\0&,\text{otherwise}\end{cases}$

### $\mu$

$EX=\frac{a+b}{2}$

#### Proof

$EX=\sum\limits_{x=a}^b\frac{x}{b-a+1}$
$EX=\sum\limits_{x=1}^b\frac{x}{b-a+1}-\sum\limits_{x=1}^{a-1}\frac{x}{b-a+1}$
$\sum\limits_{i=1}^ki=\frac{k(k+1)}{2}$
$EX=\frac{b(b+1)}{2(b-a+1)}-\frac{a(a-1)}{2(b-a+1)}$
$EX=\frac{b(b+1)-a(a-1)}{2(b-a+1)}$
$EX=\frac{b^2+b-a^2+1}{2(b-a+a)}$
$EX=\frac{(b+a)(b-a+1)}{2(b-a+1)}$
$EX=\frac{b+a}{2}$

### $\sigma^2$

$\sum\limits_{i=1}^ki^2=\frac{k(k+1)(2k+1)}{6}$
$\sigma^2=E(X^2-\mu)$
$EX^2=\sum\limits_{x=a}^{b}\frac{x^2}{b-a+1}$
$E(X-\mu)^2=\sum\limits_{x=\frac{a-b}{2}}^{\frac{b-a}{2}}\frac{x^2}{b-a+1}$



$EX^2=\sum\limits_{x=1}^b\frac{x^2}{b-a+1}-\sum\limits_{x=1}^{a-1}\frac{x^2}{b-a+1}$
$EX^2=\frac{b(b+1)(2b+1)}{6(b-a+1)}-\frac{a(a-1)(2a-1)}{6(b-a+1)}$
$EX^2=\frac{b(b+1)(2b+1)-a(a-1)(2a-1)}{6(b-a+1)}$
$EX^2=\frac{2b^3+3b^2+b-2a^3+3a^2-a}{6(b-a+1)}$



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
