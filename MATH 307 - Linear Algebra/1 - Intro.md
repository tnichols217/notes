---
date created: 2024-01-16 13:16
date updated: 2024-01-16 13:38
---

# Proofs and Mathematical logic

**Any statement as a math object is a logical value: a constant or a function**

- Statements can be true or false (boolean)
- Logical functions are often of the form $f(x)=y$
- Sets are denoted with curly braces and are unordered $\{\}$ or rules

## Logical Operations and Relations

**Unary Operations**: Input -> Output
**Binary Operations**: Input1, Input2 -> Output

**Implication** $A\to B$: B is a necessary condition for A
**Definition of Equivalence** $A\leftrightarrow B=(A\to B)\wedge (B\to A)$
**Transitivity** $(A\to B)\wedge(B\to C)=A\to C$
**Contraposition** $A\to B=\neg B\to \neg A$
**Proof by Contradiction** $A\to B=1\iff\neg(A\to B)=0\iff A\wedge\neg B=0$

## Quantifiers

$\forall$: For all / for any
$\exists$: There exists

## Sets

List of elements: $\{\}$
Condition: $\{x\in\Re:\text{condition}\}$
Reserved Notation:
- $\mathbb N$ Naturals
- $\mathbb R$ Real
- $\mathbb Z$ Integers
- $\mathbb Q$ Rationals
- $\mathbb C$ Complex
$X$: Universal Set
$A^C=X\setminus A=\{x\in X:x\not\in A\}$

## Types of Prooves

**Direct**: A process from start to end with necessarily locally true statements
**Proof by induction**: Proving a statement holds true for all $n$ by proving them consecutively and based on previous $n$
**Proof by contraposition**: Proving the contrapositive to prove the statement
**Proof by contradition**: Proving that the negation of a statement contradicts something necessarily true
