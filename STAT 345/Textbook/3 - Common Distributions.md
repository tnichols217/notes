---
date created: 2023-10-02 10:17
---

# Discrete Distributions

## Discrete Uniform Distribution

### PMF

$\text{Uniform}(a,b)=\begin{cases}\frac{1}{b-a+1}&,x=a,a+1,...,b\\0&,\text{otherwise}\end{cases}$

### $\mu$

$EX=\frac{a+b}{2}$

#### Proof

$EX=\sum\limits_{i=a}^b\frac{x}{b-a+1}$
Let $\tilde b=b-a+1$
$EX=\sum\limits_{i=a}^b\frac{x}{\tilde b}$

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
