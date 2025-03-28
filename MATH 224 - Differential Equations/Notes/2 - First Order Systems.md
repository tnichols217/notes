# First-Order Systems

First-order systems have multiple related rates that tend to depend on each other for their change over time, for example a predator prey system.

## Vectors and First-Order Systems

Take, for example, this predator-prey system:


$\begin{cases}\frac{dR}{dt}=2R-1.2RF\\\frac{dF}{dt}=-F+0.9RF\end{cases}$

This system can be plotted on an $(R,F)$ plane as a vector or direction field to understand its movement.

Let $\vec P(t)=\langle R(t),F(t)\rangle$
$\frac{d\vec P}{dt}=\left\langle  \frac{dR}{dt}, \frac{dF}{dt} \right\rangle$
Let $\vec V(\vec P)$ be $\frac{d\vec P}{dt}$, our original system (in systems that do not depend on time)

This gives us $\frac{d\vec P}{dt}=\vec V(\vec P)$

We can now understand that a vector field across all $\vec P$ will have a vector associated by $\vec V(\vec P)$

## Equilibrium Points

Equilibrium points in systems are when $\vec V(\vec P)=\vec 0$, where $\vec P$ is the equilibrium point
This simply means that if the system were at this point, $\vec P$ would not move over time.

In predator-prey and many other relationships, $\vec P=\vec 0$ will often be an equilibrium point.

## Converting Second-Order Differential Equations into a First Order System

Given any second-order differential equation, we are able to assign a dummy variable to the first derivative of the variable of interest.

For example:

$\frac{d^2y}{dt^2}+p \frac{dy}{dt}+qy=0$

$\implies \begin{cases} \frac{dy}{dt}=v\\ \frac{dv}{dt}=-qy-pv\end{cases}$

### Linear second-order differential equations

For all second-order differential equations, we may skip converting to a system as a particular solution will always be of the form $e^{\lambda t}$ where $\lambda$ can easily be solved in this case with the trace-determinant shortcut. The general solution may be easily obtained through the linearity principle:

$\mathbf Y=k_1e^{\lambda_{1}t}+k_{2}e^{\lambda_{2}t}$

## Decoupled Systems

Fully decoupled systems are systems where the variables do not depend on each other, such as:

$\begin{cases} \frac{dx}{dt}=-2x\\ \frac{dy}{dt}=-y\end{cases}$

These can be solved independently in order to find a general solution of the system

### Partially Decoupled Systems

Partially decoupled systems are when at least one variable does not depend on the rest of the system, such as:

$\begin{cases} \frac{dx}{dt}=-2x+y\\ \frac{dy}{dt}=-y\end{cases}$

These can be solved by solving the decoupled variables first

## Euler's method

Given a system that can be represented as

$\frac{d\vec Y}{dt}=\vec V(\vec Y)$

Pick a step size $\Delta t$

Choose a starting point $\vec P=\vec Y(0)$

We can approximate $\vec Y(\Delta t)$ by calculating $\vec Y(0)+\vec V(\vec Y)\Delta t$
We can now repeat this process indefinitely.

## Uniqueness

Autonomous system solutions cannot intersect unless they are the same solution. 
This is true because if they did intersect and were different solutions, they would have a different derivative at the same point, which is not possible in an autonomous system.

### "Fencing"

Periodic solutions separate their interior from their exterior as internal solutions may never cross out and vice versa.

Other solutions may also separate the space, like infinite lines or a combination of multiple solutions and static solutions.

## The SIR Model

The SIR model is a ideal simplistic model of epidemic spread.

It categorizes people into Susceptible, Infected, or Recovered groups and follows a system as such:

$\begin{cases} \frac{dS}{dt}=-\alpha SI\\ \frac{dI}{dt}=\alpha SI-\beta I\\ \frac{dR}{dt}=\beta I\end{cases}$

Where:
$S+I+R=1$
$\alpha$ is the contagion constant
$\beta$ is the recovery constant

## The Lorenz Attractor

Born out of weather predictions, Edward Lorenz created this simplified system to display the effects of "chaotic" systems

$\begin{cases} \frac{dx}{dt}=\sigma(y-x)\\ \frac{dy}{dt}=\rho x-y-xz\\ \frac{dz}{dt}=-\beta z+xy\end{cases}$

The parameters he chose in particular were

$\begin{cases}\sigma=10\\\beta= \frac{8}{3}\\\rho=28\end{cases}$

Three dimensional systems have much less restriction than those of two or one dimensional, as the sample space is significantly less likely to be partitioned by simple cases.

