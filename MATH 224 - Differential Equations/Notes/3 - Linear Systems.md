# Linear Systems

## The Harmonic Oscillator

A model for a mass on a spring

$-ky-b \frac{dy}{dt}=m \frac{d^2y}{dt^2}$
$\implies\begin{cases} \frac{dy}{dt}=v\\ \frac{dv}{dt}=-\frac{k}{m}y- \frac{b}{m}v\end{cases}$

## Constant coefficient

$\begin{cases}\frac{dx}{dt}=ax+by\\ \frac{dy}{dt}=cx+dy\end{cases}$

Where $a,b,c,d$ are constants

### Matrix form

$\mathbf Y=\begin{bmatrix}x(t)\\y(t)\end{bmatrix}$
$\mathbf A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$

$\frac{d\mathbf Y}{dt}=\mathbf{AY}$

Where the dimension of the system may be arbitrary

### Equilibrium Points

$\mathbf Y=\vec 0$
Will always be a solution to constant coefficient equations.

If the determinant $\det\mathbf A=0$ there may be other equilibrium points

If $\mathbf A=\mathbf 0$ then every point is an equilibrium point

## Linearity Principle

1. If $\mathbf Y(t)$ is a solution, then for any arbitrary constant $k$, $k\mathbf Y(t)$ is also a solution
2. If $\mathbf Y_1(t)$ and $\mathbf Y_2(t)$ are solutions, then their sum is also a solution

### Proof

This is because if

$\begin{cases}\frac{d\mathbf Y_1}{dt}=\mathbf A\mathbf Y_1\\\frac{d\mathbf Y_2}{dt}=\mathbf A\mathbf Y_2\end{cases}$

then

$k\frac{d\mathbf Y_1}{dt}=k\mathbf A\mathbf Y_1$
$\implies\frac{d\mathbf kY_1}{dt}=\mathbf A(k\mathbf Y_1)$

and 

$\frac{d\mathbf Y_1}{dt}+\frac{d\mathbf Y_2}{dt}=\mathbf A\mathbf Y_1+\mathbf A\mathbf Y_1$
$\implies\frac{d(\mathbf Y_1+\mathbf Y_2)}{dt}=\mathbf A(\mathbf Y_1+\mathbf Y_2)$

## General Solution given two independent solutions

Given two solutions $\mathbf Y_1$ and $\mathbf Y_2$
to the problem $\frac{d\mathbf Y}{dt}=\mathbf A\mathbf Y$
with the initial value $\mathbf Y(0)=\vec y_0$

We will denote the initial values of $\mathbf Y_1$ and $\mathbf Y_2$ with $\vec y_1$ and $\vec y_2$ respectively

Via the linearity principle, we know $k_1$ and $k_2$ exist such that

$\begin{cases}k_{1}\vec y_1+k_{2}\vec y_{2}= \vec y_0\\k_{1}\mathbf Y_1+k_{2}\mathbf Y_{2}= \mathbf Y\end{cases}$

Let $\mathbf K=\begin{bmatrix}k_{1}\\k_2\end{bmatrix}$
Let $\mathbf Y_{0}=\begin{bmatrix}\vec y_{1}&\vec y_{2}\\\vdots&\vdots\end{bmatrix}$
Let $\mathbf {\vec Y}=\begin{bmatrix}\mathbf Y_{1}&\mathbf Y_{2}\end{bmatrix}$

$\implies\begin{cases}\mathbf Y_{0}\mathbf K= \vec y_0\\\mathbf{\vec Y}\mathbf K= \mathbf Y\end{cases}$
$\implies\begin{cases}\mathbf K= \mathbf Y_{0}^{-1} \vec y_0\\\mathbf{\vec Y}\mathbf K= \mathbf Y\end{cases}$

## Straight Line Solutions

There may exist straight line solutions to a linear system.

If a straight line solution exists, the following equation must be satisfied:

Given $\frac{d\mathbf Y}{dt}=\mathbf A\mathbf Y$
$\mathbf A\vec V=\lambda\vec V$

Where $\lambda$ is a constant

### Finding eigenvalues and eigenvectors

We may rearrange this equation to be of the form

$(\mathbf A-\lambda\mathbf I)\vec V=\vec 0$

If $\vec V\ne \vec 0$ then the first matrix must be degenerate, therefore

$\det(\mathbf A-\lambda\mathbf I)=0$

From this equation, we are able to solve for valid $\lambda$s. These $\lambda$s are called **eigenvalues**. This equation will be a quadratic called the characteristic polynomial.

The coefficients for this polynomial may be shortcutted with $a=1$, $b=T$, $c=D$ where $T$ is the trace of the matrix and $D$ is the determinant.

The matrix $(\mathbf A-\lambda\mathbf I)$ being degenerate, will have an entire line of valid solutions for $\vec V$ in the equation

$(\mathbf A-\lambda\mathbf I)\vec V=\vec 0$

All solutions for $\vec V$ for a particular $\lambda$ will be multiples of itself. Any valid $\vec V$ for its associated $\lambda$ is called an **eigenvector**

### Specific solutions for distinct real non-zero eigenvalues

The solution associated with an eigenvalue and its associated eigenvector must satisfy the equation

$\frac{d\mathbf Y}{dt}=\mathbf A\mathbf Y$

If we let the initial condition be $\vec V$, $\mathbf Y$ must always lie on a multiple of $\vec V$ as $\mathbf A\vec V=\lambda \vec V$ and $\frac{d\mathbf Y}{dt}=\mathbf A\mathbf Y$

Therefore, for initial conditions of multiples of $\vec V$,

$\frac{d\mathbf Y}{dt}=\lambda \mathbf Y$
Where $\lambda$ is the associated eigenvalue for the eigenvector $\vec V$

This differential equation can be easily solved for $\mathbf Y$ with an exponential

$\mathbf Y(t)=e^{\lambda t}\vec V$

For positive $\lambda$s, the solution points away from the origin, while the opposite is true for negative $\lambda$s. If both $\lambda$s are positive, then the origin is a source; a sink if both are negative; or a saddle if they are of different signs. 

If the eigenvectors are distinct and real, then there will be two distinct solutions for $\mathbf Y$ which may be combined with the linearity principle.

As such, the general solution will be:

$\mathbf Y(t)=k_1e^{\lambda_{1}t}\vec V_{1} + k_2e^{\lambda_{2}t}\vec V_{2}$

### Specific solutions for imaginary eigenvalues

Assuming the matrix $\mathbf A$ being real, the only time solutions for $\lambda$ will be imaginary is when both solutions for $\lambda$ are imaginary, due to $\det(\mathbf A-\lambda\mathbf I)=0$ producing a quadratic of $\lambda$ with real coefficients. Additionally, the solutions for $\lambda$ will be conjugates of each other. This may be proved trivially.

However, due to $\lambda$ being imaginary, the associated eigenvectors will also be imaginary, making the solution of $e^{\lambda t}\vec V$ not make sense. This $\mathbf Y(t)$ does satisfy the conditions however, just not on the real plane.

Using Euler's formula:
$e^{a+ib}=e^{a}(\cos b+i\sin b)$
We are able to split the solution into real and imaginary parts.

Let $a+ib=\lambda$, where $a$ and $b$ are real.
$e^{\lambda t}\vec V=\vec Ve^{at}(\cos (bt)+i\sin (bt))$

After multiplying through with $\vec V$, the solution may be separated into its real and imaginary parts $\mathbf Y_{re}$ and $i\mathbf Y_{im}$

$\mathbf Y(t)=\mathbf Y_{re}(t)+i\mathbf Y_{im}(t)$

Since $\mathbf Y(t)$ is a valid solution,

$\frac{d\mathbf Y}{dt}=\mathbf A\mathbf Y$
$\frac{d\mathbf Y_{re}+i\mathbf Y_{im}}{dt}=\mathbf A(\mathbf Y_{re}+i\mathbf Y_{im})$
$\frac{d\mathbf Y_{re}}{dt}+i\frac{d\mathbf Y_{im}}{dt}=\mathbf A\mathbf Y_{re}+i\mathbf A\mathbf Y_{im}$
$\implies\begin{cases}\frac{d\mathbf Y_{re}}{dt}=\mathbf A\mathbf Y_{re}\\\frac{d\mathbf Y_{im}}{dt}=\mathbf A\mathbf Y_{im}\end{cases}$

As such, $\mathbf Y_{re}$ and $\mathbf Y_{im}$ are valid solutions for $\mathbf Y$

These solutions may be combined similarly to the real case to form a general solution:
$\mathbf Y(t)=k_{1} \mathbf Y_{re} + k_{2} \mathbf Y_{im}$

As $\sin$ and $\cos$ are periodic and non-increasing nor decreasing, if $a$ is positive, then the origin is a spiral source; a spiral sink if it were negative, and a center if $a=0$, where all solutions are periodic ellipses.

## Repeated Eigenvalues

Systems that have a non-zero repeated eigenvalue have solutions similar to other linear systems.

Similar to the other systems, a solution would be the particular solution given by the singular eigenvalue:

$\mathbf Y_p(t)=ke^{\lambda t}\vec V$

However, this solution only gives one dimension of freedom in the initial condition plane.

Assume that one of the non-diagonal attributes of the matrix $\mathbf A$ is $0$. This implies that one of the differential equations within the system is decoupled from the rest of the system.

It can also be easily shown that the solution for a decoupled linear differential equation is of the form $k_{2}e^{b t}$ where $b$ is the coefficient of the linear equation. Additionally, $k_2$ is the initial condition of the decoupled equation.

Lastly, the other differential equation can also be easily shown to be of the form $k_{1}e^{at}+k_{2}te^{bt}$. This can easily be vectorized as $e^{\lambda t}\vec V_{0}+te^{\lambda t}\vec V_1$. Where $\vec V_0$ is the initial condition. $\lambda$ is the coefficient of the decoupled equation, or a calculated eigenvalue, it can be easily shown that these are equivalent. In the case of a decoupled equation.

$\vec V_1$ can be solved for like such:

$\frac{d\mathbf Y}{dt}=\mathbf A\mathbf Y$

$\mathbf Y=e^{\lambda t}\vec V_{0}+te^{\lambda t}\vec V_1$

$\lambda e^{\lambda t}\vec V_{0}+(1+\lambda t)e^{\lambda t}\vec V_{1} =e^{\lambda t}\mathbf A\vec V_{0}+te^{\lambda t}\mathbf A\vec V_1$
$\implies\begin{cases}\lambda \vec V_{1}=\mathbf A\vec V_1\\\lambda \vec V_{0} + \vec V_{1}=\mathbf A\vec V_0\end{cases}$
$\implies\begin{cases}\lambda \vec V_{1}=\mathbf A\vec V_1\\\vec V_{1}=(\mathbf A-\mathbf I\lambda)\vec V_0\end{cases}$

$\therefore\vec V_1$ is either an eigenvector or $\vec 0$ 

If $\vec V_{1}=\vec 0$,
$\lambda \vec V_{0} =\mathbf A\vec V_0$

Thus, if $\vec V_0$ is an eigenvector, $\vec V_1$ is $\vec 0$, else $\vec V_1$ will be an eigenvector.

As such, the general solution will be

$\begin{cases}\mathbf Y=e^{\lambda t}\vec V_{0}+te^{\lambda t}\vec V_1\\\vec V_{1}=(\mathbf A-\mathbf I\lambda)\vec V_0\end{cases}$

With $\vec V_0$ as the initial condition.

This turns out to be the general solution for any repeated eigenvalue differential system. I am unsure why and could not find a proof for this at the moment.

## Repeated diagonal Matrices

A repeated diagonal matrix means that both equations are independent and as such all vectors are also eigenvectors.

The matrix takes the form of

$\begin{bmatrix}a&0\\0&a\end{bmatrix}$

In this system, $\lambda = a$

The solution is $\mathbf Y=e^{\lambda t}\vec V_0$

## Zero as an eigenvalue

Having zero as an eigenvalue immediate implies that the system is degenerate.

All associated eigenvectors for a zero eigenvalue are all equilibrium points.

All other points will approach the zero-eigenvector line 

## Damping

In the mass-spring harmonic oscillator equation:

$m\frac{d^{2}y}{dt^2}+b\frac{dy}{dt}+ky=0$

The oscillator may be categorized based on different characteristics:
- Undamped: $b=0$
- Underdamped: $b^2-4km<0$
- Critically damped: $b^2-4km=0$
- Overdamped: $b^2-4km>0$

An underdamped system will oscillate / orbit the origin.

## Categorizing systems

Systems may be categorized via their eigenvalues or their determinant and traces.

Let $R=T^2-4D$

Where $T$ is the trace and $D$ is the determinant

|         | $T<0$                 | $T=0$           | $T>0$                   |
| ------- | --------------------- | --------------- | ----------------------- |
| $D>R$   | Spiral Sink           | Center          | Spiral Source           |
| $D=R$   | One line sink         | $\downarrow$    | One line source         |
| $R>D>0$ | Two line sink         | All equilibrium | Two line sourrce        |
| $D=0$   | Equilibrium line sink | $\uparrow$      | Equilibrium line source |
| $D<0$   | $\rightarrow$         | Saddle          | $\leftarrow$            |

## Examples

### 1 - Undampened Harmonic Oscillator

$\frac{d^{2}y}{dt^2}=-y$

> [!answer]
> $\begin{cases} \frac{dy}{dt}=v\\ \frac{dv}{dt}= -y\end{cases}$
> $\mathbf Y(t)=\begin{bmatrix}y(t)\\v(t)\end{bmatrix}$
> $\frac{d\mathbf Y}{dt}=\begin{bmatrix}0&1\\-1&0\end{bmatrix}\mathbf Y$
> 
> We can verify our guess of $y(t)=\sin(x)$
> 
> $\frac{d\mathbf Y}{dt}=\begin{bmatrix}0&1\\-1&0\end{bmatrix}\mathbf Y$
> $\begin{bmatrix}\cos (t)\\-\sin(t)\end{bmatrix}=\begin{bmatrix}\cos (t)\\-\sin(t)\end{bmatrix}$
> 
> We can verify another guess of $y(t)=\cos(x)$
> 
> $\frac{d\mathbf Y}{dt}=\begin{bmatrix}0&1\\-1&0\end{bmatrix}\mathbf Y$
> $\begin{bmatrix}-\sin (t)\\-\cos(t)\end{bmatrix}=\begin{bmatrix}-\sin (t)\\-\cos(t)\end{bmatrix}$
> 
> And thus we have our general solution of
> 
> $\mathbf Y=\begin{bmatrix}\sin(t)\\\cos(t)\end{bmatrix}\mathbf K$
> Where $\mathbf K$ is any two-dimensional vector

