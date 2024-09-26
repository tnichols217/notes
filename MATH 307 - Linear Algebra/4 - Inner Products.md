# Inner Products

With vector space $\vec{\mathbb V}$ over field $(\mathbb F, \diamond_F, \circ_F)$
The dyadic mapping
$\langle a,b\rangle:\vec{\mathbb V}\times\vec{\mathbb V}\to\mathbb F$
is an inner product on $\vec{\mathbb V}$ if with $\vec a,\vec b,\vec c\in\vec{\mathbb V},\alpha\in\mathbb F$:
1. Conjugate symmetry: $\langle \vec a,\vec b\rangle=\overline{\langle \vec b, \vec a\rangle}$
2. Positivity: $\langle \vec a, \vec a\rangle\ge0$
3. Sesqulinearity: $\langle\alpha a\diamond_{V}b,c\rangle=\alpha\langle a,c\rangle\diamond_{V} \langle b, c\rangle$

## Dot Products

The dot product is the canonical inner product of vectors of the type $\vec{\mathbb V}=\mathbb F^n$ where $(\mathbb F, \diamond_F, \circ_F)$ is a field and $n\in\mathbb N$

With $\vec a,\vec b\in\vec{\mathbb V}$, $\sum$ is repeated $\diamond_F$, and $\overline{}$ is the complex conjugation operator.
The dot product operator $\cdot$ is defined as
$\vec a\cdot \vec b=\sum\limits_{j=1}^{n}a_j\overline{b_{j}}$

Dot products have the special property that
$\cos \phi=\frac{\vec a\cdot \vec b}{\|\vec a\|\|\vec b\|}$
Where $\phi$ is the angle between $\vec a$ and $\vec b$

## Inner Products for functions

A valid inner product for the space of $\mathbb G=\mathbb P_k[0,1]$ (polynomial space)
Where $f,g\in\mathbb G$

Could be:
$\int\limits_{0}^{1}f(x)\overline{g(x)}~dx$

## Orthogonality

For $a,b\in\mathbb{\vec V}$

$\langle a, b\rangle=0\iff a\perp b$

## Properties of Inner Products

### Decomposing a vector

For any pair of vectors $u,v\ne0$ with a valid inner product may be uniquely decomposed as

$u=\alpha v+w$

With

$w\perp v,\alpha\in \mathbb C$
$\alpha=\frac{\langle u,v\rangle}{\|v\|^2}$

### Pythagoras' Theorem

$u=v+w,\quad u\perp w$
$\|u\|^2=\|v\|^2+\|w\|^2$

### Cauchy-Schwarz Inequality

$|\langle u,v\rangle|\le \|u\|\|v\|$

They only equal if $v=0$ or $u=0$
$u=\alpha v$ for some $\alpha\in\mathbb F$

## Orthonormal Bases

An orthonormal base is a base that is

1. Mutually orthogonal, where $\langle v_j,v_k\rangle=0 \text{ for } j\ne k$
2. Normalized, where $\|v_{j}\|,1\le j\le n$

Orthogonality also implies linear independence

## Projections

In order to project $\vec u$ onto $\vec v$ where $u,v\in\mathbb{\vec V}$

$P_{\vec v}(\vec u)=\frac{\langle \vec u,\vec v\rangle}{\|\vec v\|^{2}}\vec v$

This will give a vector in the direction of $\vec v$ which is the closest point to $\vec v$ from $\vec u$

### Gram-Schmidt Orthogonality Process

The Gram-Schmidt Orthogonality Process converts any spanning set of a vector space into an orthogonal spanning set, or an orthonormal spanning set.

The process is fairly straightforward:
1. For each vector in the spanning set:
	1. Subtract the projection of it on all previous vectors from itself

If creating an orthonormal spanning set, simply normalize afterwards.

Given $\vec V=\{\vec v_{1},\vec v_{2},\dots,\vec v_{n}\}$ is a spanning set, the definition of each vector will be:

$\vec V'=\{\vec v_{1}',\vec v_{2}',\dots,\vec v_{n}'\}$
Where: $\vec v_{k}'=\vec v_k-\sum\limits_{j=1}^{k-1}P_{\vec v_{j}}(\vec v_{k})$
