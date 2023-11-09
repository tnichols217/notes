---
date created: 2023-11-09 00:54
date updated: 2023-11-09 01:17
---

# 1

## a

$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^Kr_{n,k}\|\vec x_n-\vec\mu_k\|^2$
$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^K\sum\limits_{i=1}^Ir_{n,k}(x_{ni}-\mu_{ki})^2$

$\frac{\partial D}{\partial \mu_{ki}}=\sum\limits_{n=1}^N-2r_{n,k}(x_{ni}-\mu_{ki})=0$

$\sum\limits_{n=1}^Nr_{n,k}x_{ni}-r_{n,k}\mu_{ki}=0$
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}-\sum\limits_{n=1}^Nr_{n,k}\mu_{ki}=0$
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}=\sum\limits_{n=1}^Nr_{n,k}\mu_{ki}$
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}=\mu_{ki}\sum\limits_{n=1}^Nr_{n,k}$
$\frac{\sum\limits_{n=1}^Nr_{n,k}x_{ni}}{\sum\limits_{n=1}^Nr_{n,k}}=\mu_{ki}$

## b

$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^Kr_{n,k}\|\vec x_n-\vec\mu_k\|^2$

$\frac{\partial D}{\partial \vec\mu_k}=-2\sum\limits_{n=1}^Nr_{n,k}(\vec x_n-\vec\mu_k)=\vec0$

$\sum\limits_{n=1}^Nr_{n,k}(\vec x_n-\vec\mu_k)=\vec0$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\sum\limits_{n=1}^Nr_{n,k}\vec\mu_k$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\vec\mu_k\sum\limits_{n=1}^Nr_{n,k}$
$\frac{\sum\limits_{n=1}^Nr_{n,k}\vec x_n}{\sum\limits_{n=1}^Nr_{n,k}}=\vec\mu_k$

# 2

## a

# 3

$f(x|\mu,\sigma^2)=\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(x-\mu)^2}$
$f(\vec x|\mu,\sigma^2)=\prod\limits_{n=0}^Nf(\vec x_n|\mu,\sigma^2)$
$f(\vec x|\mu,\sigma^2)=\prod\limits_{n=0}^N\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2}$

$\ln f=\ln(\prod\limits_{n=0}^N\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
$\ln f=\sum\limits_{n=0}^N\ln(\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
$\ln f=\sum\limits_{n=0}^N\ln(\frac{1}{(2\pi\sigma^2)^{1/2}})-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$

## a

$0=\frac{\partial \ln f}{\partial\mu}=\frac{\partial}{\partial\mu}\ln(\prod\limits_{n=0}^N\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
$=\frac{\partial}{\partial\mu}\sum\limits_{n=0}^N\ln(\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
$=\frac{\partial}{\partial\mu}\sum\limits_{n=0}^N\ln(\frac{1}{(2\pi\sigma^2)^{1/2}})+\ln(e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
