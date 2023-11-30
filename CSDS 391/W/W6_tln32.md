# 1

## a

$P(X,Y|e)=\frac{P(X,Y,e)}{P(e)}$
$=\frac{P(X,Y,e)}{P(e)}\frac{P(Y,e)}{P(Y,e)}$
$=\frac{P(X,Y,e)}{P(Y,e)}\frac{P(Y,e)}{P(e)}$
$=P(X|Y,e)P(Y|e)$

## b

$P(Y|X,e)P(X|e)=P(Y,X|e)$
$P(X,Y|e)=P(X|Y,e)P(Y|e)$

$P(Y|X,e)=\frac{P(Y,X|e)}{P(X|e)}$
$=\frac{P(X|Y,e)P(Y|e)}{P(X|e)}$

# 2

## a

C

According to the probability law for Bayes's nets
$P(x_1,...,x_n)=\prod\limits_{i=1}^n\theta(x_i|\text{parents}(X_i))$

Therefore
$P(G_{father},G_{mother},G_{child})=P(G_{child})P(G_{mother})P(G_{father})$

## b

A, as it shows that $H_{child}$ is mainly influenced by $G_{child}$ and also that $G_{child}$ is determined mainly by $G_{father}$ and $G_{mother}$

## c

A, for the same reasons

## d

$s$ is not involved as that is the probability that the $G_{child}$ matches $H_{child}$ and we are only calculating $G_{child}$

| $P(G_{child}=r)$ | $G_{father}=r$ | $G_{father}=l$ |
| ---------------- | -------------- | -------------- |
| $G_{mother}=r$   | $1.0-m$        | $0.5$          |
| $G_{mother}=l$   | $0.5$          | $m$            | 

## e

$P(G_{child})=\sum\limits_{G_{mother}}\sum\limits_{G_{father}}P(G_{child},G_{father},G_{mother})$
