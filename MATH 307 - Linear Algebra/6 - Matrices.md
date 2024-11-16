# Matrices

A matrix is essentially a rectangle of values. The form of a matrix is normally represented as $m\times n$ where $m$ is the number of rows in the matrix and $n$ is the number of columns in a matrix. This matrix will have dimension of $mn$

## Special Matrices

The zero matrix of a shape is defined as the matrix of that shape with all elements as zeros.

The identity matrix (or multiplicative identity) is a square matrix where the top left to bottom right diagonal is all ones and the rest being zeros.

## Vectors as Matrices

We may normally treat vectors as matrices in multiple operations. Commonly, vectors are represented as column vectors, where the equivalent matrix has a singular column with the vector in it $(m\times 1)$. Alternatively, row vectors are the same, just with the vector in a singular row instead $(1\times m)$.

## Basic Operations

### Transpose

The transpose of a matrix is defined as the diagonal reflection of the original matrix. Where:

$A^T_{p,q}=A_{q,p}$

The resulting shape will be $n\times m$ when the original shape was $m\times  n$

Complex transposes are represented with the $^{H}$ operator, where you flip the matrix and take the complex conjugate of all elements.

### Addition

Matrices of similar shapes may be added element-wise, with each element in the same position of both matrices being added together.

### Scalar Multiplication

Scalar multiplication is where a singular element of compatible type as the elements within the matrix is multiplied across all elements of the matrix.

### Matrix-matrix multiplication

Matrices may be multiplied together if their shapes match. The second dimension of the first matrix must be the same as the first dimension of the second matrix, such that if the first matrix is $m\times n$, the second matrix may be $n\times o$. The resulting matrix will be $m\times o$, where each element is defined as:

$P_{p, q}=\sum\limits_{r=1}^{n}A_{p, r}B_{r, q}$

This multiplication is also associative, so $P=A(BC)=(AB)C$

It is unfortunately not communicative though.

### Inverses

The left inverse of $A$ is defined as the matrix that when multiplied with $A$ from the left, will product an identity matrix. $BA=I$

The right inverse is the exact same, except it is on the right side of $A$. $AB=I$

If $A$ is square, the left and right inverses will be the same. If $A$ is rectangular, then the left and right inverses will not be the same.

If a matrix is invertible, it is also unique to that matrix, additionally, its conjugate transpose is also invertible.

Also, $(A^{H})^{-1}=(A^{-1})^{H}$

## Linear Mappings

For any two vector spaces $\mathbb {\vec V}$ and $\mathbb {\vec W}$ over the same field $\mathbb F$

A function $F:\mathbb{\vec V}\to\mathbb{\vec W}$ is a linear mapping
$\iff\forall \vec v\in\mathbb{\vec V},\vec w\in\mathbb{\vec W}, \alpha\in\mathbb F:F(\alpha \vec v+\vec w)=\alpha F(\vec v)+F(\vec w)$

It is also common that if $F$ is a linear mapping with a simple argument, then the parenthesis are omitted: $F(\vec v)=F\vec v$

## Orthogonality

A matrix is considered orthogonal iff its columns are all mutually orthogonal with respect to the standard inner product of the space.

If a matrix is orthogonal and each column is of unit length, then

$A^{T}A=I\implies A^{T}=A^{-1}$

Since orthogonal matrices must be square,

$A^{T}A=AA^{T}$

The same result will be true with complex matrices if you replace $^{T}$ with $^{H}$, these are called unitary matrices.

## Householder Reflections

The householder reflection is a matrix that reflects column vectors about a hyperplane.

$H=I-2vv^{H}$

Where $H$ is the transformation matrix and $v$ is the unit normal vector to the hyperplane.

The householder reflection is Hermetian, Unitary, and involutary:
$H=H^{H}=H^{-1}$

## UV decomposition

UV decomposition is when you decompose any matrix into a unitary matrix and an upper triangular matrix — a matrix that only has values along the diagonal and the top right triangle of the matrix.

### Using Householder Reflections

First, begin with the first column of $A$, $a_0$.

We will find a Householder reflection that will reflect this $a_0$ onto the $e_{0}=\begin{bmatrix}\|a_0\|&0&\dots&0\end{bmatrix}^{T}$ vector. This can be done by looking for the vector perpendicular to the hyperplane of reflection.

The normalized perpendicular reflection vector $v_{0}$ is simply $\frac{a_{0}-e_{0}}{\|a_{0}-e_{0}\|}$.

We may now construct the Householder matrix from our vector $v_{0}$, $H_{0}=I-2v_{0}v_{0}^{H}$

If this reflection matrix is applied to our matrix $A$, then the first column will be transformed to $e_{0}$, beginning the triangularization of $A$.

We now know $A=H_{0}(H_{0}A)$ where $H_{0}$ is unitary and $H_{0}A$ is beginning to be upper triangular.

Now, take the submatrix of $A$ excluding the first row and column.
Repeat the process to find $e_{1}$, $v_{1}$, and $H_{1}$

Let $H_{1}^{*}=\begin{bmatrix}1&0&\cdots &0\\0\\\vdots&&H_{1}\\0\end{bmatrix}$

We now know $A=H_{0}H_{1}^{*}(H_{1}^{*}H_{0}A)$ where $H_{0}H_{1}^{*}$ is unitary and $H_{1}^{*}H_{0}A$ is more upper triangular.

This process may be repeated until the right term is upper triangular. This term is called $V$ and the left term is called $U$.

## Matrix Norms

### Induced Norm

Given two vector norms:
$\|\cdot\|_{(n)}\:\mathbb R^{n}\to\mathbb R_{+}$
$\|\cdot\|_{(m)}\:\mathbb R^{m}\to\mathbb R_{+}$

The Induced norm of matrix $m\times n$ is:
$\|A\|_{(n,m)}=\sup\limits_{x\ne 0}\frac{\|Ax\|_{(m)}}{\|x\|_{(n)}}$

This practically gives you the maximum scaling a matrix can do on a vector: giving the maximum transformed norm over the original norm.

#### 1-norm

The Induced 1-norm of a matrix may be easily calculated by taking the maximum of the column sums.

This makes sense as we may construct an input vector with all zeros except for a 1 corresponding to the maximum column. This vector will be scaled up to the sum of that column.

#### $\infty$-norm

The calculation for the $\infty$ norm is extremely similar, just that we take the maximum of the rows.

This makes sense as it maximises one particular component of the output vector, thus giving the max $\infty$-norm of the matrix.

### Frobenius Norm

Given a vector norm:
$\|\cdot\|_{(m\times n)}\:\mathbb R^{n}\to\mathbb R_{+}$

Simply treat the matrix like a huge vector and find the norm of that.

This is normally the 2-norm. This is also the 2-norm of the 2-norms of the columns or rows.

## Four Fundamental Subspaces

The four fundamental subspaces of a matrix $A$ are the

1. Range of $A$
2. Null Space of $A$
3. Null Space of $A^{T}$
4. Range of $A^{T}$

### Orthogonal Spaces

Two spaces $V$ and $W$ are orthogonal iff
$\forall v\in V,w\in W:v^{T}w=0\iff V\perp W$

### Range of $A$: $\mathbfscr R(A)$

$v\in\mathbfscr R(A)\iff\exists w:Aw=v$

With $a_{i}$ being the $i$th column of $A$
$\mathbfscr R(A)=\text{span}\{a_1,\dots,a_{m}\}$

Meaning the range is equivalent to the span of the columns of $A$

### Null Space of $A$: $\mathbfscr N(A)$

$v\in\mathbfscr N(A)\iff Av=\vec 0$

### Perpendicularity of subspaces of $A$

Given that

$v\in\mathbfscr R(A)\iff\exists w:Aw=v$
$u\in\mathbfscr N(A^{T})\iff A^{T}u=\vec 0$

$u^{T}A=\vec 0^{T}$
$u^{T}Aw=\vec 0^{T}w$
$u^{T}v=0=\langle u,v\rangle$

$\implies \mathbfscr R(A)\perp \mathbfscr N(A^{T})$

The same is true for $A^{T}$

## SVD Decomposition

The SVD decomposition decomposes any arbitrary matrix $A\in m\times n$ into three matrices $U\Sigma V^{T}$ where $U\in m\times m$, $\Sigma\in m\times n$, $V\in n\times n$.

$\Sigma$ is a diagonal matrix where each successive element is smaller than the previous.
$U$, $V$ are both unitary matrices, which may be inverted by transposing them.

The value $r$ commonly represents the number of non-zero values upon $\Sigma$'s diagonal. This represents the dimension of the range of $A$.

The first value in the $\Sigma$ matrix is equivalent to the 2-norm of the matrix $A$

The matrix $A$ is only invertible if the entire diagonal of the $\Sigma$ matrix is positive. The inverse will be equivalent to $V\Sigma^{-1}U^{T}$.

### Lean SVD

$A=\sum\limits_{j=1}^{r}\sigma_{j}u_{j}v_{j}^{T}$

Where $u_{j}$ is the $j$th column of $U$ and $v_{j}$ is the $j$th column of $V$

### Relation to the four fundamental subspaces

The range of $A$ would be equivalent to the span of the first $r$ columns of $U$.

If you take the decomposition $U\Sigma V^{T}$, $U\Sigma$ results in an $m\times n$ matrix with the first $r$ columns being multiples of the first $r$ columns of $U$, and the remaining columns being $0$. Now, any matrix multiplication from this will be a linear combination of the first $r$ columns of $U$.

This makes the remaining columns of $U$ the null space of $A^{T}$

The same is true of $A^{T}$ and the matrix $V$.

