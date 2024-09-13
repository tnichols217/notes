# Sets

## Monoids

A set $\mathbb A$ is a monoid if when equipped with an operation $\diamond$

1. **Closure**: $a,b\in \mathbb A\implies a\diamond b\in \mathbb A$
2. **Associativity**: $(a\diamond b)\diamond c=a\diamond (b\diamond c)$
3. **Identity**: $\exists e\in \mathbb A: \forall a\in \mathbb A: a\diamond e=e\diamond a=a$

## Groups

A monoid is a group if

1. **Inverse**: $\forall a\in \mathbb A:\exists b\in \mathbb A:a\diamond b=b\diamond a=e$

## Abelian Groups / Communitative Group

A group is Abelian if

1. **Communitativity**: $\forall a, b\in \mathbb A:a\diamond b=b\diamond a$

## Rings

$(\mathbb R, \diamond, \circ)$
A set $\mathbb R$ is a ring if with operations $\diamond, \circ$

1. $\mathbb R$ is an Abelian group with $\diamond$
2. $\mathbb R$ is a monoid with $\circ$
3. **Distributive**: $\forall a, b, c\in \mathbb R:a\circ(b\diamond c)=(a\circ b)\diamond(a\circ c)$

## Fields

A set $\mathbb F$ is a field if with operations $\diamond, \circ$

1. $(\mathbb F, \diamond, \circ)$ is a Ring
2. $\mathbb F$ is communicative with $\circ$
3. Every element of $\mathbb F$ other than the identity of $\diamond$ has an inverse in $\circ$

In a Field $(\mathbb F, +, *)$,
1. $0$ is unique
2. $1$ is unique
3. $\forall x\in\mathbb F$, $-x$ is unique
4. $\forall x\in\mathbb F$ with $x=0$, $x^{-1}$ is unique
5. $\forall x\in\mathbb F$, $0*x=0$
6. $\forall x\in\mathbb F$, $-1*x=-x$

### Ordered Fields

A field is an ordered field if $\mathbb F$ is equipped with a relation $<$ s.t.
1. $\forall x,y\in\mathbb F\implies x<y, y<x\text{, or }x=y$
2. $\begin{cases}x<y\\z\le w\end{cases}\implies x+z<y+w$
3. $\begin{cases}0<x\\0<y\end{cases}\implies 0<x*y$

Derived traits of ordered fields
1. $\begin{cases}x<y\\y<z\end{cases}\implies x<z$
2. $\begin{cases}0<x\\0<y\end{cases}\implies0<x+y$
3. $x\ne 0\implies 0<x \text{ or }0<-x$
4. $0<x\implies -x<0$
5. $x<y\implies -y< -x$
6. $x\ne 0\implies x*x>0$
7. $0<x<y\implies y^{-1}<x^{-1}$

## Complex Numbers

Complex Numbers are just pairs of real numbers

$z=(a, b),\quad a, b\in\mathbb R$

$z_1*z_2=(a_{1}*a_{2}-b_{1}*b_{2},a_1*b_2+a_2*b_1)$

### Conjugation

Given $z\in\mathbb C$
$\bar z=(a, -b)$

Complex conjugation has the property that $z\bar z$ has no imaginary component.
$|z|=$ Modulus of $z=\sqrt{z\bar z}$

### Inversion

$z^{-1}= \frac{a}{a^{2}+b^{2}}-i \frac{b}{a^{2}+b^{2}}$

### Polar Form

$z=|z|(\cos\theta +\sin\theta)$

Where $|z|$ is the length, and $\theta$ is the direction

#### Euler's Formula

$e^{i\theta}=\cos\theta +\sin\theta$

# Functions

## Relations

A relation between sets $A$ and $B$ is defined as 
$\{(a,b)|a\in A,b\in B\}$

## Functions

A function is defined as an assignment from set $A$ to set $B$
$f:A\to B$

Each element in the domain $A$ may only map a to one element in the range $B$

A function is **injective** if all elements of $A$ map to unique elements in $B$
A function is **surjective** if all elements of $B$ have a corresponding element in $A$
A function is **bijective** if it is injective and surjective

## Operators

A unary operator is a function from $A$ to $B$

A binary operator takes an ordered pair of the sets $(A_1,A_2)$ and maps it to an element of the set $B$
