# Runtime of Recursive Methods

## Recursion Trees

$T(n)=aT\left( \frac{n}{b} \right)+f(n):a>0,b>1,f(n)\ge 0$

We draw a tree (or a table) to represent how much work is happening on each layer of recursion:

| Level | # of nodes | Total work for level                  |
| ----- | ---------- | ------------------------------------- |
| $1$   | $1$        | $f(n)$                                |
| $2$   | $a$        | $af\left( \frac{n}{b} \right)$        |
| $3$   | $a^2$      | $a^{2}f\left( \frac{n}{b^2} \right))$ |
| $k$   | $a^k$      | $a^{k}f\left( \frac{n}{b^k} \right))$ |

Where $k$ will often be of the form $\theta(\log n)$

The total runtime will therefore be

$\sum\limits_{l=1}^{\log n}a^lf\left( \frac{n}{b^l} \right)$

For example, if $a=b$ and $f(n)\in\theta(n)$
$T(n)=\theta(n\log n)$

## Master Method

Let our recursive method have a runtime of 

$T(n)=aT\left( \frac{n}{b} \right)+f(n):a>0,b>1,f(n)\ge 0$

Let $c_{crit}=\log_{b}a$

### For $f(n)\in\theta(n^{c}):c\in\mathbb R$

Case 1 and 3:

$c< c_{crit}\implies T(n)\in\theta(n^{c_{crit}})$
$c_{crit}< c\implies T(n)\in\theta(n^c)$

### For $f(n)\in\theta(n^{c_{crit}}\log^{k}n):k\in\mathbb R$

Case 2a, 2b, and 2c:

$k> -1\implies T(n)\in\theta(n^{c_{crit}}\log^{k+1}n)$
$k= -1\implies T(n)\in\theta(n^{c_{crit}}\log\log n)$
$k< -1\implies T(n)\in\theta(n^{c_{crit}})$
