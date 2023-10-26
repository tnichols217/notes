---
date created: 2023-10-25 21:15
date updated: 2023-10-25 23:55
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

Let both $A$ and $B$ be independent coin flips.
Let $C$ be the probability that there is one head in $A$ and $B$

$P(A|B)=0.5$
$P(A)=0.5$

$P(A|B\cup C)=0$
$P(A|C)=0.5$

# 3

## a

$P(L)=\sum\limits_{i=F}^T\sum\limits_{j=F}^TP(L\cap G_i\cap V_j)$
$=0.00882+0.0108+0.049+0.0016$
$=0.07022$

## b

$P(G)=\sum\limits_{i=F}^T\sum\limits_{j=F}^TP(L_i\cap G\cap V_j)$
$=0.049+0.0004+0.049+0.0016$
$=0.1$

## c

$P(L|G)=P(L\cap G)/P(G)=\frac{1}{P(G)}\sum\limits_{i=F}^TP(L\cap G\cap V_i)$
$=10(0.049+0.0016)$
$=0.506$

## d

$P(G=T|L=T\cup V=T)=P(G\cap(L\cup V))/P(L\cup V)$
$=\frac{1}{P(L\cup V)}\sum\limits_iP(G\cap(L\cup V)_i)$
$=\frac{1}{0.0072+0.0004+0.00882+0.0108+0.049+0.0016}(0.0004+0.049+0.0016)$
$=\frac{0.051}{0.07782}$
$=0.6553585196607556$

## e

$P(L^C|G)=P(L^C\cap G)/P(G)$
$=10(0.049+0.0004)$
$=0.494$

For the probability that you do not get a leak ($L^C$), given you know there is glass on the tire ($G$), with no information on the valve.

# 4

|       | $D$      | $D^C$    |
| ----- | -------- | -------- |
| $E$   | 0.000198 | 0.000002 |
| $E^C$ | 0.04999  | 0.94981  |

## a

$P(E|D)=0.000198/(0.000198+0.04999)$
$=0.003945166175181318$

## b

$P(D)/P(E\cup D)=1/P(E|D)$
$=253.4747474747475$

## c

|       | $D_2$   | $D_2^C$ |
| ----- | ------- | ------- |
| $E$   | 0.00019 | 0.00001 |
| $E^C$ | 0.09998 | 0.89982 |

$P(E|D\cup D_2)=P(D|E)P(D_2|E)P(E)/P(D)P(D_2)$
$=P(D\cup E)P(D_2\cup E)/P(D)P(D_2)P(E)$
$=(0.000198*0.00019)/((0.000198+0.04999)(0.00019+0.09998)0.0002)$
$=0.03741547236120847$

# 5

## a

Yes, given only the data that it appears blue and that discrimination is 75% reliable, we can still conclude that it is most likely blue with low certainty. (75% chance it is blue, with 25% chance its green)

## b

Yes, we can now calculate with more certainty.
