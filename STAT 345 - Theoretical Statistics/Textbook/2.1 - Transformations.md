---
date created: 2023-09-25 09:30
date updated: 2023-09-25 13:10
---

# Transformations of Variables

## Mapping a Variable through a Function

Where $g(\cdot)$ is a function

- If $X$ is a random variable, then $Y=g(X)$ is also a random variable
- $P(Y\in A)=P(X\in g^{-1}(A))$

## Inverse Mapping a Variable

Where $Y=g(X)$

- The inverse is defined as $g^{-1}(\{y\})=\{x\in X:g(x)=y\}$
- Only maps 1-to-1 if $g(\cdot)$ is strictly monotonous

## CDF of a Mapping

Where $F_X(x)$ is the CDF of $X$

$Y=g(X)$
$X=g^{-1}(Y)$

$F_Y(y)=F_X(g^{-1}(y))$

But if $g$ is decreasing, we set $F_Y(y)=1-F_X(g^{-1}(y))+P(X=g^{-1}(y))$ to ensure the limit approaches 1 as $y$ approaches $\infty$ and add back the probability of the discrete value exactly at $y$

## PDF of a Mapping

The PDF is just the derivative of the CDF

$\frac{d}{dy}F_Y(y)=\frac{d}{dy}F_X(g^{-1}(y))$

$f_Y(y)=f_X(g^{-1}(y))|\frac{d}{dy}g^{-1}(y)|$

## Non monotonous $g$

When $g$ is non-monotonous, we can split it up into chunks $g_i$ such that each chunk is monotonous

This means the PDF will be

$f_Y(y)=\begin{cases}{\sum\limits_{i=1}^k f_X(g_i^{-1}(y))|\frac{d}{dy}g_i^{-1}(y)|}&y\in A_i\\0&\text{otherwise}\end{cases}$
