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

