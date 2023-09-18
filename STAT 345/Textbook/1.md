---
date created: 2023-09-16 17:00
date updated: 2023-09-18 19:11
---

# Probability Theory

### Probabilitiy Identities and Theorems

#### Kolmogorov (Probability) axioms

$P(E)\ge 0$
$P(\mathbb{U})=1$
$P(\bigcup\limits_{i=1}^{\infty}A_i)=\sum\limits_{i=1}^{\infty}P(A_i)$ where $A$ is pairwise disjoint

#### Property of Probabilities (Theorem 1)

$P(\varnothing)=0$
$P(A)\le 1$
$P(A^C)=1-P(A)$

#### Theorems of Probabilities

$P(B\cap A^C)=P(B)-P(A\cap B)$
$P(A\cup B)=P(A)+P(B)-P(A\cap B)$
If $A\subset B$. then $P(A)\le P(B)$

#### Bonferroni's Inequality

$P(A\cap B)\ge P(A)+P(B)-1$

#### Partitions and Boole's Inequality

$P(A)=\sum\limits_{i=1}^\infty P(A\cap C_i)$ for any partition $C$
$P(\bigcup\limits_{i=1}^\infty A_i)\le\sum\limits_{i=1}^\infty P(A_i)$ for any sets A

#### Axiom of Countable Additivity

$P(A\cup B)=P(A)+P(B)$
Where $A$ and $B$ are disjoint

#### Conditional Probability

Given both $A$ and $B$ are in $S$
$P(A|B)=\frac{P(A\cap B)}{P(B)}$
$P(A|B)=P(B|A)\frac{P(A)}{P(B)}$
Transforms the effective sample space of $A$ from $S$ to $B$

#### Bayes' Rule

$P(A_i|B)=\frac{P(B|A_i)P(A_i)}{\sum\limits_{j=1}^\infty P(B|A_i)P(A_j)}$

#### Statistical Independence

Two events $A$ and $B$ are statistically independent if the following holds true:

$P(A\cap B)=P(A)P(B)$
or
$P(A|B)=P(A)$

If two events are independent, then so are

$A$ and $B^C$
$A^C$ and $B$
$A^C$ and $B^C$

#### Mutual Independence

A collection of events $A_1,...,A_n$ are mutually independent is for any subcollection $A_{i_1},...,A_{i_k}$ we have:

$P(\bigcap\limits_{j=1}^kA_{i_j})=\prod\limits_{j=1}^kP(A_{i_j})$
The Intersection of any amount of any events is equal to the product of each event's probability.

## Counting

### Simple Counting Formulae

Where $n$ is the the total objects and $r$ is the number of selected objects

|           | Without Replacement                | With Replacement                       |
| --------- | ---------------------------------- | -------------------------------------- |
| Ordered   | $\frac{n!}{(n-r)!}$                | $n^r$                                  |
| Unordered | $\begin{pmatrix}n\\r\end{pmatrix}$ | $\begin{pmatrix}n+r-1\\r\end{pmatrix}$ |

#### Choose Formula

$\begin{pmatrix}n\\r\end{pmatrix}=\frac{n!}{r!(n-r)!}$
