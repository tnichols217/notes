---
date created: 2023-11-09 00:54
date updated: 2023-11-09 13:38
---

# 1

## a

$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^Kr_{n,k}\|\vec x_n-\vec\mu_k\|^2$
$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^K\sum\limits_{i=1}^Ir_{n,k}(x_{ni}-\mu_{ki})^2$

$\frac{\partial D}{\partial \mu_{ki}}=\sum\limits_{n=1}^N-2r_{n,k}(x_{ni}-\mu_{ki})=0$

$\sum\limits_{n=1}^Nr_{n,k}x_{ni}-r_{n,k}\mu_{ki}=0$
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}-\sum\limits_{n=1}^Nr_{n,k}\mu_{ki}=0$
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}=\sum\limits_{n=1}^Nr_{n,k}\mu_{ki}$
$\sum\limits_{n=1}^Nr_{n,k}x_{ni}=\mu_{ki}\sum\limits_{n=1}^Nr_{n,k}$
$\frac{\sum\limits_{n=1}^Nr_{n,k}x_{ni}}{\sum\limits_{n=1}^Nr_{n,k}}=\mu_{ki}$

## b

$D=\sum\limits_{n=1}^N\sum\limits_{k=1}^Kr_{n,k}\|\vec x_n-\vec\mu_k\|^2$

$\frac{\partial D}{\partial \vec\mu_k}=-2\sum\limits_{n=1}^Nr_{n,k}(\vec x_n-\vec\mu_k)=\vec0$

$\sum\limits_{n=1}^Nr_{n,k}(\vec x_n-\vec\mu_k)=\vec0$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\sum\limits_{n=1}^Nr_{n,k}\vec\mu_k$
$\sum\limits_{n=1}^Nr_{n,k}\vec x_n=\vec\mu_k\sum\limits_{n=1}^Nr_{n,k}$
$\frac{\sum\limits_{n=1}^Nr_{n,k}\vec x_n}{\sum\limits_{n=1}^Nr_{n,k}}=\vec\mu_k$

# 2

## a

$P(\theta|y,n)= P(y|\theta,n)P(\theta|n)/P(y|n)$

$P(\theta|y,n)=\begin{pmatrix}n\\y\end{pmatrix}\theta^y(1-\theta)^{n-y}\frac{1}{1}/\frac{1}{1+n}$
$P(\theta|y,n)=(1+n)\begin{pmatrix}n\\y\end{pmatrix}\theta^y(1-\theta)^{n-y}$

## b

with $n=4$, $\theta=3/4$

```function-plot
{
	data: [
		{
			points: [
				[0, 0.004],
				[1, 0.047],
				[2, 0.211],
				[3, 0.422],
				[4, 0.316]
			],
			fnType: "points",
			graphType: "scatter"
		}
	],
	xAxis: {
		domain: [-0.5, 4.5]
	},
	yAxis: {
		domain: [-0.5, 1]
	}
}
```

## c

1. $y=1$, $n=1$
2. $y=2$, $n=2$
3. $y=2$, $n=3$
4. $y=3$, $n=4$

```function-plot
{
	data: [
		{
			fn: '2x^1(x-1)^0'
		}
	],
	xAxis: {
		domain: [-4, 4]
	},
	yAxis: {
		domain: [-1, 6]
	}
}
```

```function-plot
{
	data: [
		{
			fn: '3x^2(1-x)^0'
		}
	],
	xAxis: {
		domain: [-4, 4]
	},
	yAxis: {
		domain: [-1, 6]
	}
}
```

```function-plot
{
	data: [
		{
			fn: '12x^2(1-x)^1'
		}
	],
	xAxis: {
		domain: [-4, 4]
	},
	yAxis: {
		domain: [-1, 6]
	}
}
```

```function-plot
{
	data: [
		{
			fn: '20x^3(1-x)^1'
		}
	],
	xAxis: {
		domain: [-4, 4]
	},
	yAxis: {
		domain: [-1, 6]
	}
}
```

# 3

$f(x|\mu,\sigma^2)=\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(x-\mu)^2}$
$f(\vec x|\mu,\sigma^2)=\prod\limits_{n=0}^Nf(\vec x_n|\mu,\sigma^2)$
$f(\vec x|\mu,\sigma^2)=\prod\limits_{n=0}^N\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2}$

$\ln f=\ln(\prod\limits_{n=0}^N\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
$\ln f=\sum\limits_{n=0}^N\ln(\frac{1}{(2\pi\sigma^2)^{1/2}}e^{-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2})$
$\ln f=\sum\limits_{n=0}^N-\frac{1}{2}\ln(2\pi\sigma^2)-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2$

## a

$0=\frac{\partial \ln f}{\partial\mu}=\frac{\partial}{\partial\mu}\sum\limits_{n=0}^N-\frac{1}{2}\ln(2\pi\sigma^2)-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2$
$=-\frac{1}{2\sigma^2}\frac{\partial}{\partial\mu}\sum\limits_{n=0}^N(\vec x_n-\mu)^2$
$=-\frac{1}{2\sigma^2}\sum\limits_{n=0}^N-2(\vec x_n-\mu)$
$=\frac{1}{\sigma^2}\sum\limits_{n=0}^N(\vec x_n-\mu)$

$\implies 0=\sum\limits_{n=0}^N\vec x_n-\sum\limits_{n=0}^N\mu$
$\implies 0=\sum\limits_{n=0}^N\vec x_n-N\mu$
$\implies \mu=\frac{1}{N}\sum\limits_{n=0}^N\vec x_n$
$\square$

## b

$0=\frac{\partial \ln f}{\partial\sigma}=\frac{\partial}{\partial\sigma}\sum\limits_{n=0}^N-\frac{1}{2}\ln(2\pi\sigma^2)-\frac{1}{2\sigma^2}(\vec x_n-\mu)^2$
$=\sum\limits_{n=0}^N\frac{\partial}{\partial\sigma}\frac{1}{2}\ln(2\pi\sigma^2)+\sum\limits_{n=0}^N\frac{\partial}{\partial\sigma}\frac{1}{2\sigma^2}(\vec x_n-\mu)^2$
$=\sum\limits_{n=0}^N\frac{1}{2}\frac{4\pi\sigma}{2\pi\sigma^2}+\sum\limits_{n=0}^N\frac{-2}{2\sigma^3}(\vec x_n-\mu)^2$
$=\sum\limits_{n=0}^N\frac{1}{\sigma}-\sum\limits_{n=0}^N\frac{1}{\sigma^3}(\vec x_n-\mu)^2$
$=\frac{N}{\sigma}-\frac{1}{\sigma^3}\sum\limits_{n=0}^N(\vec x_n-\mu)^2$

$\implies\frac{N}{\sigma}=\frac{1}{\sigma^3}\sum\limits_{n=0}^N(\vec x_n-\mu)^2$
$\implies N\sigma^2=\sum\limits_{n=0}^N(\vec x_n-\mu)^2$
$\implies \sigma^2=\frac{1}{N}\sum\limits_{n=0}^N(\vec x_n-\mu)^2$
$\square$

# 4

## a

$X\in\{C_1,C_2\}$

$P(X=C_1)=2P(X=C_2)$

$1=\sum\limits_{x\in\{C_1,C_2\}}P(X=x)$
$=P(X=C_1)+P(X=C_2)$
$=3P(X=C_2)$
$\implies\begin{cases}P(X=C_1)=\frac{2}{3}\\P(X=C_2)=\frac{1}{3}\end{cases}$

|     | $C_1$         | $C_2$         |
| --- | ------------- | ------------- |
| $X$ | $\frac{2}{3}$ | $\frac{1}{3}$ |
$\square$

## b

Assuming $\mu_1<\mu_2$,

$E=P(X_1>\theta\cap X\in C_1)+P(X_2<\theta\cap X\in C_2)$
$E=P(X_1>\theta)P(X\in C_1)+P(X_2<\theta)P(X\in C_2)$

$X_n\sim N(\mu_n,\sigma_n)$
$P(X_1>\theta)=1-F_{X_1}(\theta)$
$P(X_2<\theta)=F_{X_2}(\theta)$

$F_N(x)=\Phi(x)$
$F_{X_n}(x)=F_N(\frac{x-\mu}\sigma)=\Phi(\frac{x-\mu_n}{\sigma_n})$

$E=\frac{2}{3}(1-\Phi(\frac{\theta-\mu_1}{\sigma_1}))+\frac{1}{3}(\Phi(\frac{\theta-\mu_2}{\sigma_2}))$
$=2/3-2\Phi(\frac{\theta-\mu_1}{\sigma_1})/3+\Phi(\frac{\theta-\mu_2}{\sigma_2})/3$
$\square$

## c

Let $N(z)=\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2}$
$\frac{d\Phi}{dz}=N(z)$

$0=\frac{\partial E}{\partial\theta}=2/3-2\Phi(\frac{\theta-\mu_1}{\sigma_1})/3+\Phi(\frac{\theta-\mu_2}{\sigma_2})/3$
$=N(\frac{\theta-\mu_2}{\sigma_2})/3\sigma_2-2N(\frac{\theta-\mu_1}{\sigma_1})/3\sigma_1$

$\implies N(\frac{\theta-\mu_2}{\sigma_2})/\sigma_2=2N(\frac{\theta-\mu_1}{\sigma_1})/\sigma_1$
$\implies \frac{1}{\sigma_2}e^{-\frac{1}{2\sigma_2^2}(x-\mu_2)^2}=\frac{1}{\sigma_1}e^{-\frac{1}{2\sigma_1^2}(x-\mu_1)^2}$
$\implies \ln(\frac{\sigma_1}{\sigma_2})=\frac{1}{2\sigma_2^2}(\theta-\mu_2)^2-\frac{1}{2\sigma_1^2}(\theta-\mu_1)^2$
$\implies \ln(\frac{\sigma_1}{\sigma_2})=\frac{1}{2\sigma_2^2}(\theta^2-\mu_2\theta+\mu_2^2)-\frac{1}{2\sigma_1^2}(\theta^2-\mu_1\theta+\mu_1^2)$
$\implies 0=(\frac{1}{2\sigma_2^2}-\frac{1}{2\sigma_1^2})\theta^2+(\frac{1}{2\sigma_1^2}\mu_1-\frac{1}{2\sigma_2^2}\mu_2)\theta+(\frac{1}{2\sigma_2^2}\mu_2^2-\frac{1}{2\sigma_1^2}\mu_1^2-\ln(\frac{\sigma_1}{\sigma_2}))$

Where
$A=\frac{1}{2\sigma_2^2}-\frac{1}{2\sigma_1^2}$
$B=\frac{1}{2\sigma_1^2}\mu_1-\frac{1}{2\sigma_2^2}\mu_2$
$C=\frac{1}{2\sigma_2^2}\mu_2^2-\frac{1}{2\sigma_1^2}\mu_1^2-\ln(\frac{\sigma_1}{\sigma_2})$

$\theta=\frac{-B\pm\sqrt{B^2-4AC}}{2A}$
$\square$
