---
date created: 2023-09-18 19:11
date updated: 2023-09-18 19:11
---

# Set Symbols and operators

## Set $\{\}$

A collection of elements
$\{1, 2, 3\}$

## Union $\cup$

Combining two sets together
$\{1,2,3\}\cup\{3,4,5\}=\{1,2,3,4,5\}$

## Intersection $\cap$

The set with elements that are part of the two intersecting sets
$\{1,2,3\}\cap\{3,4,5\}=\{3\}$

## Subset $\subset$

A statement that all of one set's elements are part of another set's elements
$\{3,4\}\subset\{3,4,5\}$

## Not Subset $\not\subset$

The opposite of a subset, pretty self explanatory
$\{3,6\}\not\subset\{3,4,5\}$

## Superset $\supset$

All of $B$'s elements are at least contained in $A$
$\{3,4,5\}\supset\{3,4\}$

## Not Superset $\not\supset$

Not a superset
$\{3,4,5\}\not\supset\{3,6\}$

## Complement $A^C$

All the elements that are not in A in the area of interest. Symbolized with $C$ in the superscript
$\{1,3,5\}^C=\{2,4,6\}$ where $\mathbb{U}=\{1,2,3,4,5,6\}$

## Difference $\setminus$

Whatever is in A but not in B. Uses $\setminus$.
$\{1,2,3,4,5,6\}\setminus\{3,4\}=\{1,2,5,6\}$

## Element of $\in$

Represents that an element is inside a set
$2\in\{1,2,3\}$

## Not element of $\notin$

An element is not part of a set
$4\notin\{1,2,3\}$

## Empty Set $\varnothing$

Represents $\{\}$

## Sigma Algebra $\sigma$

A set of sets $B$ that

1. Contains $\varnothing$
2. If $A\in B$, then $A^C\in B$
3. If $A_1,A_2,A_3,...\in B$ then $\bigcup\limits_{i=1}^{\infty}A_i\in B$

It is also a subset of the Power set of $A$

## Power Set $\textbf{P}$

The set of every possible subset of A
$P(\{1,2\})=\{\{\},\{1\},\{2\},\{1,2\}\}$

## Probability Function $P$

A function that returns the probability of a condition in a sample space with associated sigma algebra such that the **Axioms of Probability are true**

1. $P(A)\ge0$ for all $A\in B$
2. $P(S)=1$
3. If $A_1,A_2,A_3,...\in B$ are pairwise disjoint, then $P(\bigcup\limits_{i=1}^{\infty}A_i)=\sum\limits_{i=1}^{\infty}P(A_i)$

## Cartesian Product $\times$

Every ordered pair from A to B

$\{1,2\}\times\{3,4\}=\{(1,3),(1,4),(2,3),(2,4)\}$

## Cardinality $||$

The number of items in a set
$|\{1,2\}|=2$

## Such That $\mid$ or $:$

A way to construct a set by filtering it by the condition set by the such that operator
$\{x\in\mathbb{I}\mid0<x<5\}=\{1,2,3,4\}$

## For All $\forall$

A statement about all of a set
$\forall x>1,x^2>x$

## There Exists $\exists$

A statement that something exists under a condition

$\exists x\mid x^2>x$

# Common named sets

## Universal Set $\mathbb{U}$

The set of every possible value of interest

## Natural Numbers $\mathbb{N}$

Every Positive integer
$\{0,1,2,3,...\}$

## Integers $\mathbb{Z}$

Every number that does not have a decimal component
$\{...,-3,-2,-1,0,1,2,3,...\}$

## Rational Numbers $\mathbb{Q}$

Any fraction
$\{1, 0.12, 232.1,...\}$

## Algebraic Numbers $\mathbb{A}$

Any complex number that is a root of a non-zero polynomial in one variable, with rational coefficients.
$\{-\sqrt{2},3.18,i,...\}$

## Real Numbers $\mathbb{R}$

All Integers, Rational numbers, and Irrational numbers
$\{3,3.124,\pi\}$

## Imaginary Numbers $\mathbb{I}$

The square root of any negative number
$\{i,2i,\pi i,...\}$

## Complex Numbers $\mathbb{C}$

The sum of any $\mathbb{R}$eal number and $\mathbb{I}$maginary number
$\{1+i,i,1,...\}$
