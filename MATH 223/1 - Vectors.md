---
date created: 2023-08-28 09:52
date updated: 2023-08-30 10:39
---

> [!col]
>
> > [!col-md]
> >
> > # Scalars
> >
> > Effectively just real numbers
> > Single property: magnitude or length
>
> > [!col-md]
> >
> > # Vectors
> >
> > Described by two properties: **magnitude** and **direction**
> > Forces are described by vectors, with direction and magnitude
> > Shown with $\vec{AB} = <x_1 - x_0, y_1 - y_0>$

# Properties of Vectors

1. Has an **initial point** and **terminal point**, where the vector starts and ends
2. Has a **magnitude**, the length of the vector or the distance between the two points
   1. Can be calculated by using Pythagoras across the terminus
3. Vectors of the same components are equal, even if the initial points are different

# Operations with Vectors

## Addition

The sum of the components of the vector

1. The same as putting the tail onto the head of the other and drawing the vector from the first head to the last tail
2. $\begin{flalign}\vec{v}=\begin{bmatrix}a\\b\end{bmatrix}\\ \vec{w}=\begin{bmatrix}c\\d\end{bmatrix}\\ \vec{v}+\vec{w}=\begin{bmatrix}a+c\\b+d\end{bmatrix}\end{flalign}$

## Multiplication with a scalar

Multiplies each component by the scalar
$\vec{v}=\begin{bmatrix}a\\b\end{bmatrix}$
$c\vec{v}=\begin{bmatrix}ca\\cb\end{bmatrix}$

If $c$ is negative, the direction of the vector flips and the magnitude multiplies by $c$

## Subtraction

Is the same as addition, except the second operand is negated
$\vec{v}-\vec{w} = \vec{v}+(-\vec{w})$

## Dot Product

The sum of element-wise multiplication in a vector
$\vec{a}=\langle a_1,a_2,a_3\rangle$
$\vec{b}=\langle b_1,b_2,b_3\rangle$
$\vec{a}\cdot\vec{b}=a_1b_2+a_2b_2+a_3b_3$
$\vec{a}\cdot\vec{a}=|\vec{a}|^2$

1. Dotting by 0 always gives 0
2. Dotting is communicative and associative
3. If $\theta$ is angle between $\vec{a}$ and $\vec{b}$, then $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\theta)$

# Vectors in 3D space

## Right hand rule

Most commonly, for 3D space we follow the right hand rule. on your right hand when your hand curls it moves from $x$ to $y$, and when your thumb points up, that is $z$

## The Origin

The origin is the point at which all components of the vector is zero.
All axes and coordinate planes pass through the origin.

## Coordinate Planes

A coordinate plane of two axes consists of all points that can be made by scaling and adding those two axes.
The plane does not extend into any other axis, so all components of other axes are 0
