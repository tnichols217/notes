# Vector Spaces

$\overline {\mathbb V}$ is a vector space over field $(\mathbb F, \diamond, \circ)$ if

1. $\overline {\mathbb V}$ is an Abelian Group in $\diamond$
2. $\forall \alpha \in\mathbb F,v\in\overline {\mathbb V}: \alpha\circ v\in\overline {\mathbb V}$

Often:
1. $\mathbb F=\mathbb R$ and $\overline {\mathbb V}=\mathbb R^{n}, n\in\mathbb N$
2. $\diamond$ is defined as element-wise addition
3. $\circ$ is defined as scalar multiplication

## Linear Combinations

Given $u,v\in\overline{\mathbb V},\alpha,\beta\in\mathbb F$
$(\alpha \circ u)\diamond(\beta\circ v)\in\overline{\mathbb V}$ is a linear combination

## Examples of Vector spaces

A polynomial satisfies the requirements of vector spaces. They may be added element-wise, and scaled linearly.

A matrix is also an example of a vector space in $m\times n$. Similarly, they also may be added element-wise, and scaled linearly.

## Subspaces

Let $(\overline {\mathbb V},\mathbb F, \diamond,\circ)$ be a vector space

If
1. $\overline {\mathbb W}\subset \overline {\mathbb V}$
2. $(\overline {\mathbb W},\mathbb F, \diamond, \circ)$
Then $\overline {\mathbb W}$ is a subspace of $\overline {\mathbb V}$

This is easily satisfied if linear combinations $\overline {\mathbb W}$ are closed and a subset of $\overline{\mathbb V}$

### Affine Spaces

Even if a subset of $\overline {\mathbb V}$ may appear to be a valid subspace, if it does not pass through the origin, but is a valid subspace but shifted by some constant, then it is an affine space.

## Spanning Sets

If any $v\in\overline{\mathbb V}$ may be composed by a linear combination of set $\vec {\mathbb v}$ where $\vec{\mathbb v}\subset\overline{\mathbb V}$, then $\vec{\mathbb v}$ is a spanning set of $\overline{\mathbb V}$

1. The size of $\vec{\mathbb v}$ will need to be at minimum the dimensionality of the space $\overline{\mathbb V}$
2. A linear combination of $\vec{\mathbb v}$ may be represented as $\vec v=\sum\limits_{j=1}^{n}\alpha_{j}\circ{\vec{\mathbb v}}_{j}$ where $\alpha\subset\mathbb F$ of equal size as $\vec{\mathbb v}$
3. A spanning set of a vector space is not unique, you may derive an infinite amount of valid spanning sets based off any other spanning set.

### Linear Independence

A set of vectors $\vec{\mathbb v}$ is linearly independent if 
$\vec 0=\sum\limits_{j=1}^{n}\alpha_{j}\circ{\vec{\mathbb v}}_{j}\iff\alpha=\vec 0$

1. It is impossible to obtain a vector in $\vec{\mathbb v}$ from the other vectors through a linear combination if $\vec{\mathbb v}$ is linearly independent