# Vector Norms

In vector space $\mathbb{\vec V}$ over $\mathbb F$

A norm is a function

$\|\cdot\|:\mathbb{\vec V}\to\mathbb R_+$

If
1. Non-negative, $\forall v\in\mathbb{\vec V}:\|v\|\ge0,\|v\|=0\iff v=0$
2. Scaling, $\forall v\in\mathbb{\vec V},\alpha\in\mathbb F:\|\alpha v\|=|\alpha|\|v\|$
3. Triangle Inequality, $\forall v, w\in\mathbb{\vec V}:\|v+w\|\le\|v\|+\|w\|$

## Canonical Norms for $\mathbb R^n$ Spaces

Canonical norms for $\mathbb R^n$ can be defined as

$\|\cdot\|_a:\mathbb{\vec V}\to\mathbb R_+$ 

Where

$\|v\|_a=\left(\sum\limits_{j=1}^nv_j\right)^{1/a},1\le a\in\mathbb R$

### Common norms

The 1-norm is simply the sum of all elements
The 2-norm is the higher dimensional distance function
The infinity-norm is the max of all elements

## Norms based off the inner product

Norms can be based off of the square root of the inner product.
$\|\cdot\|:\mathbb{\vec V}\to\mathbb R_+=\langle\cdot,\cdot\rangle^{1/2}$


In the case of the canonical dot product, this would be equivalent to norm 2, $\|\cdot\|_2$

This is true as
1. $\langle v, v\rangle\ge0\iff \|v\|\ge 0$
	1. $\langle v, v\rangle=0\iff \|v\|= 0\iff v=0$
2. $\|\alpha v\|=\langle\alpha v, \alpha v\rangle^{1/2}=(\alpha\bar\alpha)^{1/2}\langle v, v\rangle^{1/2}=|\alpha|\|x\|$
3. $\|v+w\|^{2}=\langle v+w,v+w\rangle\le\langle v, v\rangle+\langle w, w\rangle=\|v\|^2+\|w\|^2$

## Unit Balls or lp-balls

This is a surface or path where all points on the path have a norm of $1$

$S=\{v\in\mathbb{\vec V}:\|v\|=1\}$

The 1-norm looks like a diamond
The 2-norm looks like a circle
The infinity-norm looks like a cube

