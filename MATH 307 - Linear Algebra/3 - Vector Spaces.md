# Vector Spaces

$\vec {\mathbb V}$ is a vector space over field $(\mathbb F, \diamond_F, \circ_F)$ with operations $(\diamond_{V},\circ_{FV})$ if

1. $\vec {\mathbb V}$ is an Abelian Group in $\diamond_V$
2. $\forall \alpha \in\mathbb F,v\in\vec {\mathbb V}: \alpha\circ_{FV} v\in\vec {\mathbb V}$

Often:
1. $\mathbb F=\mathbb R$ and $\vec {\mathbb V}=\mathbb R^{n}, n\in\mathbb N$
2. $\diamond_V$ is defined as element-wise addition ($\diamond_F$ in $\mathbb F$)
3. $\circ_{FV}$ is defined as scalar multiplication

## Linear Combinations

Given $u,v\in\vec{\mathbb V},\alpha,\beta\in\mathbb F$
$(\alpha \circ_{FV} u)\diamond_V(\beta\circ_{FV} v)\in\vec{\mathbb V}$ is a linear combination

## Examples of Vector spaces

Polynomial space satisfies the requirements of vector spaces. They may be added element-wise, and scaled linearly.

A matrix is also an example of a vector space in $m\times n$. Similarly, they also may be added element-wise, and scaled linearly.

## Subspaces

Let $(\vec {\mathbb V},\mathbb F, \diamond_F,\circ_F,\diamond_V,\circ_{FV})$ be a vector space

If
1. $\vec {\mathbb W}\subset \vec {\mathbb V}$
2. $(\vec {\mathbb W},\mathbb F, \diamond_F,\circ_F,\diamond_V,\circ_{FV})$
Then $\vec {\mathbb W}$ is a subspace of $\vec {\mathbb V}$

This is easily satisfied if linear combinations $\vec {\mathbb W}$ are closed and a subset of $\vec{\mathbb V}$

### Affine Spaces

Even if a subset of $\vec {\mathbb V}$ may appear to be a valid subspace, if it does not pass through the origin, but is a valid subspace but shifted by some constant, then it is an affine space.

## Spanning Sets

If any $v\in\vec{\mathbb V}$ may be composed by a linear combination of set $\vec {\mathbb v}$ where $\vec{\mathbb v}\subset\vec{\mathbb V}$, then $\vec{\mathbb v}$ is a spanning set of $\vec{\mathbb V}$

Where $\sum$ is repeated $\diamond_V$

1. The size of $\vec{\mathbb v}$ will need to be at minimum the dimensionality of the space $\vec{\mathbb V}$
2. A linear combination of $\vec{\mathbb v}$ may be represented as $\vec v=\sum\limits_{j=1}^{n}\alpha_{j}\circ_{FV}{\vec{\mathbb v}}_{j}$ where $\alpha\subset\mathbb F$ of equal size as $\vec{\mathbb v}$
3. A spanning set of a vector space is not unique, you may derive an infinite amount of valid spanning sets based off any other spanning set.

### Linear Independence

A set of vectors $\vec{\mathbb v}$ is linearly independent if 
$\vec 0=\sum\limits_{j=1}^{n}\alpha_{j}\circ_{FV}{\vec{\mathbb v}}_{j}\iff\alpha=\vec 0$

1. It is impossible to obtain a vector in $\vec{\mathbb v}$ from the other vectors through a linear combination if $\vec{\mathbb v}$ is linearly independent
2. A linearly independent set of vectors cannot contain $\vec 0$
3. There cannot be linear independence in a one-dimensional vector space

### Basis

A set of vectors $\vec {\mathbb v}$ is a basis of the vector space $\vec {\mathbb V}$ if it is

1. A spanning set of $\vec{\mathbb V}$
2. Linearly independent

### Exchange Theorem

In a vector space $\vec{\mathbb V}$, if a set of vectors $\vec{\mathbb v}\in\vec{\mathbb V}$ is linearly independent then
1. The number of vectors in $\vec{\mathbb v}$ must be less than or equal to the number of vectors in the basis of $\vec{\mathbb V}$

