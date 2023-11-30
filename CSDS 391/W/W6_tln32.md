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

$P(G_{child}=l)=\sum\limits_{G_{mother}}\sum\limits_{G_{father}}P(G_{child}=l,G_{father},G_{mother})$
$=\sum\limits_{G_{mother}}\sum\limits_{G_{father}}P(G_{child}=l|G_{father},G_{mother})P(G_{father})P(G_{mother})$

| $P(G_{child}=l)$ | $G_{father}=r$ | $G_{father}=l$ |
| ---------------- | -------------- | -------------- |
| $G_{mother}=r$   | $m$        | $0.5$          |
| $G_{mother}=l$   | $0.5$          | $1.0-m$            | 

$=m(1-q)^2+q(1-q)+q^2(1-m)$
$\square$

$q=m(1-q)^2+q(1-q)+q^2(1-m)$
$=m-2mq+mq^2+q-q^2+q^2-mq^2$
$=m-2mq+q$

$0=m-2mq$
$2mq=m$
$q=0.5$

This is not true because the real left-handedness in humans is significantly lower than $0.5$ of the population, meaning it is likely not simply inherited through the means predicted.

# 3

## a

ii, iii as adding more givens does nothing once that area of the net is already detached from the query

## b

$P(b, u, \neg m, g, j)=P(b)P(\neg m)P(i|b,\neg m)P(g|i,b,\neg m)P(j|g)$
$=0.9*0.9*0.5*0.8*0.9=0.2916$

## c

$P(j|b, i, m)=\frac{\sum\limits_{g\in{\{t,f\}}}P(j,b,i,m,g)}{\sum\limits_{j,g\in\{t,f\}}P(j,b,i,m,g)}$

$=\frac{0.9*0.9*0.1*(0.9*0.9+0.1*0)}{0.9*0.9*0.1*(0.9*0.9+0.9*0.1+0.1)}$
$=\frac{0.06561}{0.081}$
$=0.81$

## d

Whenever Indicted is not true.

## e

![[Pasted image 20231130172836.png]]

Because the president will likely take into account most of the other factors when giving a pardon and will only impact whether they go to jail or not

# 4

## a

![[Pasted image 20231130173256.png]]

C for coin selected and Hx for result of a traial and T for total heads flipped.

| C   | P(C) |
| --- | ---- |
| a   | 1/3  |
| b   | 1/3  |
| c   | 1/3  |

| Hx\|C | P(Hx=h) |
| ----- | ----- |
| a     | 0.2   |
| b     | 0.6   |
| c     | 0.8   | 

$T=\sum\limits_{H\in\{H_1,H_2,H_3\}}H$
$T\sim\text{binom}(3,P(H_x=h))$

## b

$P(C|T=2)$

$P(T=2|C=a)=\begin{pmatrix}3\\2\end{pmatrix}0.2^20.8=0.096$
$P(T=2|C=b)=\begin{pmatrix}3\\2\end{pmatrix}0.6^20.4=0.432$
$P(T=2|C=c)=\begin{pmatrix}3\\2\end{pmatrix}0.6^20.4=0.384$

$P(C=a,T=2)=P(T=2|C=a)P(C=a)=0.032$
$P(C=b,T=2)=P(T=2|C=b)P(C=b)=0.144$
$P(C=c,T=2)=P(T=2|C=c)P(C=c)=0.128$

$P(C=a|T=2)=\frac{P(C=a,T=2)}{\sum\limits_{C\in\{a,b,c\}}P(C,T=2)}=0.105$
$P(C=b|T=2)=\frac{P(C=b,T=2)}{\sum\limits_{C\in\{a,b,c\}}P(C,T=2)}=0.474$
$P(C=c|T=2)=\frac{P(C=c,T=2)}{\sum\limits_{C\in\{a,b,c\}}P(C,T=2)}=0.421$

Thus, it is most likely that $C=b$, the coin selected is the $b$ coin.

# 5

## a

$M\in\{w, d, l\}$ where a win is defined as the first team winning
$T_x\in\{0, 1, 2, 3\}$ where $T_x$ is defined as the quality of the team
$P(M=w|T_1,T_2)=(T_1>T_2)$
$P(M=d|T_1,T_2)=(T_1==T_2)$
$P(M=l|T_1,T_2)=(T_1<T_2)$

Defines a model where a team wins a match if their quality is higher, and tie if they are equal.

## b

It would look exactly the same as $M$ solely depends on $T_1$ and $T_2$, just like the probabilistic model.

## c


