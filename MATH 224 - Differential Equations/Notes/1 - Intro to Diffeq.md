# Population Models

## Exponential

$\frac{dP}{dt}=kP$

The change in population is directly related to the size of the population itself

## Logistic Growth

$\frac{dP}{dt}=k\left( 1-\frac{P}{N} \right)P$

## Predator Prey

$\begin{cases} \frac{dR}{dt}=\alpha R-\beta RF\\ \frac{dF}{dt}=-\gamma F+\delta RF\end{cases}$

Is a first order system that can represent the predation of R by F

# Types of approaches to differential equations

## Analytic

The search for an explicit formula to represent a system.

## Qualitative

Using geometry to estimate or pull out key aspects of a system.

## Numerical

Approximating the actual system over time.

# Checking solutions to a differential system

Ensure that the given $\frac{dy}{dt}$ is equivalent to the derivative of the given solution

# Separable Equations

A differential equation is considered separable if it may be represented as such:

$\frac{dy}{dt}=g(t)h(y)$

## Solving separable differential equations

$\frac{dy}{dt}=g(t)h(y)$
$\frac{1}{h(y)}dy=g(t)dt$
$\int\frac{1}{h(y)}dy=\int g(t)dt$

# Autonomous Equations

When a differential equation does not depend on $t$, but only $y$

## Phase Lines

For autonomous equations, all slope lines are parallel horizontally across the graph.

A Phase line is a representation of the slope across a single vertical slice of the graph, or a simplified form of the graph of $\frac{dy}{dt}=f(y)$ on $(y,f(y))$

Equilibrium points are where $f(y)=0$, and are marked as solid circles on the phase line.

## Linearization Theorem

If $f'(y)<0$ then $y$ is a sink
If $f'(y)>0$ then $y$ is a source
If $f'(y)=0$ then we do not have enough information

# Existence and Uniqueness

If a differential equation definition is continuous, then all solutions for the same initial condition must be the same function.

We can use this to know that solutions cannot cross equilibrium solutions, or any other solution for that matter.

# Parameters

A differential equation may have parameters which help define the differential equation.

These parameters are constants, like $k$ in the exponential growth model.

## Bifurcation

Bifurcation is when a qualitative difference to the Phase line happens due to a change in a parameter.

For example:
$\frac{dy}{dt}=y^2-2y+\mu$
$\frac{dy}{dt}=y(y^2-\mu)$

### Bifurcation diagram

This diagram is a plotting of all equilibrium points in the $(\mu, y)$ plane, or any other parameter.

### Bifurcation Values

Bifurcation values are values of parameters that cause a change in the phase line. These are normally found when a parameter changes the number of x intercepts there are in $f_\mu(y)$

# Linear Differential Equations

First order differential equations are considered linear if 

$\frac{dy}{dt}=a(t)y+b(t)$

## Homogeneous

A linear differential equation is considered homogeneous or unforced if $b(t)=0$

If not, it is considered nonhomogeneous or forced.

### Solutions

#### Linearity Principle

For any solution of a homogeneous differential equation, all constant multiples of that solution are also solutions

$\frac{dy}{dt}=f(y,t)$
$y_1(t)\to ay_1(t)$
If $y_1(t)$ is a solution of $f(y,t)$

#### General Solution

$\frac{dy}{dt}=a(t)y$
$\int \frac{1}{y} dy=\int a(t) dt$
$\ln|y|+c_1=\int a(t) dt$
$y(t)=e^{c_1\int a(t) dt}$
$y(t)=c_2e^{\int a(t) dt}$

## Non-homogeneous

$\frac{dy}{dt}=a(t)y+b(t)$

### Solutions

#### Extended Linearity Principle

If $y_h(t)$ is any solution of the homogeneous equation $a(t)y$ and $y_p(t)$ is any solution of the non-homogeneous equation, then

$cy_h(t)+y_p(t)$ is also a solution to the non-homogeneous equation

#### Guessing solutions

When guessing solutions for the non-homogenous portion of the solution, it normally is best to organize the equation to the form of

$\frac{dy}{dt}-a(t)y=b(t)$

Guessing what $y$ should be should be relatively intuitive given $b(t)$, for examples exponentials should be met with exponentials and sinusoidals should be met accordingly

#### Integrating Factors

With a differential equation of the form

$\frac{dy}{dt}+g(t)y=b(t)$
Where $g(t)=-a(t)$

The product rule states
$\frac{d(\mu(t)y(t))}{dt}=\mu(t) \frac{dy}{dt}+y(t) \frac{d\mu}{dt}$

We can rewrite our differential equation to be of the form

$\mu(t) \frac{dy}{dt}+\mu(t)g(t)y=\mu(t)b(t)$

If $\mu(t)g(t)=\frac{d\mu}{dt}$,
Then $\mu(t)b(t)=\frac{d(\mu y)}{dt}$
And $y(t)=\frac{1}{\mu(t)}\int \mu(t)b(t)~dt$

$\mu(t)g(t)=\frac{d\mu}{dt}$ is a homogeneous linear differential equation with
$\mu(t)=e^{\int g(t)~dt}$ as its solution

Therefore
$\frac{dy}{dt}+g(t)y=b(t)$
$\implies$
$\mu(t)=e^{\int g(t)~dt}$
$y(t)=\frac{1}{\mu(t)}\int \mu(t)b(t)~dt$

## Constant-coefficient

A linear differential equation is considered constant-coefficient if $a(t)=\lambda$ where $\lambda$ is a constant.
