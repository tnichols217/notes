---
date created: 2023-10-25 21:15
date updated: 2023-10-25 21:21
---

# 1

## a

Let $M=\begin{bmatrix}0.06&0.08&0.04&0.02\\0.12&0.16&0.08&0.04\\0.09&0.12&0.06&0.03\\0.03&0.04&0.02&0.01\end{bmatrix}$

Then $P(x=i\cup y=j)=M_{(j,i)}$

If this were a valid probability distribution, then the sum of the probabilities of all possible samples will add up to $1$.

$0.06+0.08+0.04+0.02+$
$0.12+0.16+0.08+0.04+$
$0.09+0.12+0.06+0.03+$
$0.03+0.04+0.02+0.01$
$=1$

Therefore, this is a valid probability distribution

## b

Let $\vec A=\begin{bmatrix}0.2\\0.4\\0.3\\0.1\end{bmatrix}$ and $\vec B=\begin{bmatrix}0.3&0.4&0.2&0.1\end{bmatrix}$

Such that $M=\vec A\vec B$

The probability of getting a particular $P(x=i)$ would be equal to $\sum\limits_{j=1}^{n}P(x=i\cap y_j)$ for partition $y$. Since we decomposed the probability matrix into a vector multiplication, we can say that:

$P(x=i)=\vec A_i*\sum\vec B$
$\sum \vec B=1$
$P(x=i)=\vec A_i$

$P(x=i)=\begin{bmatrix}0.2\\0.4\\0.3\\0.1\end{bmatrix}_{i}$
$\square$

## c

Yes, since in part (b) we decomposed the probability matrix of $x$ and $y$ into two vectors, $x$ and $y$ are independent as the independence rule holds.

$P(X\cap Y)=P(X)P(Y)$

We already proved in part (b) $P(X)=\vec A_{i}$
A similar proof can prove that $P(Y)=\vec B_j$

Given $P(X\cap Y)=M_{(j,i)}$

Since $M_{(j,i)}=\vec A_i\vec B_j$ => $P(X\cap Y)=P(X)P(Y)$

# 2

## a

$P(A|B\cap C)=P(B|A\cap C)$

$P(B\cap C)=P(A\cap C)$ By Conditional Probability Rule

$P(B|C)=P(A|C)$ Also by Conditional Probability Rule
$\square$

## b

$P(A|B\cap C)=P(A)$
Implies Independence between $A$ and $B\cap C$, but tells us nothing about the relationship between $B$ and $C$

Let $P(A=i)=[0.15,0.35,0.5]_i$

Let $P(B=j\cap C=k)=\begin{bmatrix}0.05&0.05&0.15\\0.15&0.2&0.15\\0.125&0.1&0.025\end{bmatrix}_{(k,j)}$

For the sample $(i,j,k)=(1,1,1)$

$P(a|b\cap c)=0.15$
$P(a)=0.15$

$P(b|c)=0.1538$
$P(b)=0.25$

Which are very clearly not equal.

## c

$P(A|B)=P(A)$

# 3

$P(L)=\sum\limits_{i=F}^T\sum\limits_{j=F}^T$