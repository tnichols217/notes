---
date created: 2024-02-19 22:46
---

# 1

Find tightest O(f(n)) for each of the following functions: The tightest big-O bound is the narrowest upper bound within the big-O category.

## a

$f(n)=3n$

> [!answer]
> $3n=O(n)$

## b

$f(n)= \frac{\log(n)}{n^2}$

> [!answer]
> $\frac{\log(n)}{n^2}=O(1)$

## c

$f(n)=n\log n$

> [!answer]
> $n\log n=O(n\log n)$

## d

$f(n)=n+ \frac{n}{2}+ \frac{n}{4}+ ...+\frac{n}{2^n}$

> [!answer]
> $n+ \frac{n}{2}+ \frac{n}{4}+ ...+\frac{n}{2^n}=O(n)$

## e

$f(n)=(\log n)^n+n^4$

> [!answer]
> $(\log n)^n+n^4=O((\log n)^n)$

## f

$f(n)= \frac{n!+n^n}{3n}$

> [!answer]
> $\frac{n!+n^n}{3n}=O(n^{n-1})$

## g-i

Show you work by using the definition of big-O and finding values for c and N.
Reminder f(n) is O(g(n)) — if a positive real number c and positive integer N exist such that f(n) ≤ c × g(n) for all n ≥ N

### g

$2^{n-1}=O(n)$

> [!answer]
> False, the asymptotic behavior of $n$ is strictly less than $2^{n-1}$
> 
> $\lim\limits_{n\to\infty} \frac{n}{2^{n-1}}=\lim\limits_{n\to\infty} \frac{1}{2^{n-1}}$

### h

$n(\log n)^3=O(n^{4/3})$

> [!answer]
> False, no matter how big you made $c$, $\lim_\limits{n\to\infty}cn^{4/3}\not\ge n(\log n)^3$

###