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
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}-\sum\limits_{n=1}^Nr_{n,k}\mu_{ki}=0$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\sum\limits_{n=1}^Nr_{n,k}\vec\mu_k$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\vec\mu_k\sum\limits_{n=1}^Nr_{n,k}$
$\frac{\sum\limits_{n=1}^Nr_{n,k}\vec x_n}{\sum\limits_{n=1}^Nr_{n,k}}=\vec\mu_k$

## b

$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^Kr_{n,k}\|\vec x_n-\vec\mu_k\|^2$

$\frac{\partial D}{\partial \vec\mu_k}=-2\sum\limits_{n=1}^Nr_{n,k}(\vec x_n-\vec\mu_k)=\vec0$

$\sum\limits_{n=1}^Nr_{n,k}(\vec x_n-\vec\mu_k)=\vec0$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\sum\limits_{n=1}^Nr_{n,k}\vec\mu_k$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\vec\mu_k\sum\limits_{n=1}^Nr_{n,k}$
$\frac{\sum\limits_{n=1}^Nr_{n,k}\vec x_n}{\sum\limits_{n=1}^Nr_{n,k}}=\vec\mu_k$
