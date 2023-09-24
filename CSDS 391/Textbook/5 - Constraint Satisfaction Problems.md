---
date created: 2023-09-24 13:51
date updated: 2023-09-24 14:03
---

# Constraint Satisfaction Problems

Deal with assigning values to a set of variables such that they satisfy a set of constraints

> [!def]
> **Constraint Satisfaction Problem**
> Assigning values to a set of variables such that they satisfy a set of constraints
>
> ---
>
> **Consistent Assignment**
> A set of values that satisfies all constraints
>
> ---
>
> **Complete Assignment**
> A full set a values of the set of variables that is consistent
>
> ---
>
> **Partial Assignment**
> A set of values that are assigned to not all of the variable
>
> ---
>
> **Partial Solution**
> A Partial Assignment that is consistent

## Components of a CSP

- **Variables** could have **domains** that are simply discrete and finite or as complex as continuous and infinite
- **Constraints** give relations of variables, where the solution to the CSP is the set of variables that satisfy these constraints

## Constraint Graphs

Often it is useful to construct a graph where each edge marks the continuum between the extremities of a constraint

This way a search procedure could be evaluated upon the graph to find a complete assignment

## Types of Constraints

> [!def]
> **Constraint Hypergraph**
> A way of graphing and visualizing contraints by drawing hyperedges where constraints intersect variables and values

### Preference Constraint

A preferred constraint, with a weight of how important it is
- Normally one of the last constraints to be solved as it isn't solid
- 

### Unary Constraint

A constraint that only involves a single variable

- Easy to solve and restrict

### Binary Constraint

A constraint involving the relationship of two variables

A Binary CSP contains only Binary and Unary Constraints

### Global Constraint

A constraint involving any amount of variables (does not need to include all variable)

- Much more difficult to solve as they involve a lot of variables

Common global constraints include

- $\text{Alldiff}$, all variables involved must have different values
- $\text{Atmost}$, sum of variables must be below a resource constraint

## Types of Consistencies

> [!def]
> **Constraint Propagation**
> Reducing a variable's domain based on constraints

### Node Consistency (1-consistency)

A variable is node-consistent if all **unary constraints** are satisfied upon its domain

- Easiest to achieve
- Simply set the domain to be the $\cap$ of all unary constraints and original domain

### Arc Consistency (2-consistency)

A variable is arc-consistent is all **binary constraints** can be satisfied upon each value in its domain
A graph is arc-consistent if all of its variables are

- Relatively easy to solve
- Loop through every edge and check if it is consistent, if not remove that from the domain of each variable, takes $O(cd^3)$

### Path Consistency

A variable is path-consistent is all **binary constraints** can be satisfied upon each triplet of values in its domain

Named path because this implies that the path between two variables is consistent through a third variable

- More difficult to solve
- Must loop through every triplet and check constraints

### $k$-consistency

A graph is $k$-consistent if domains of every variable satisfy constraints of $k$ variables and down

- $k$-consistency implies $(k-1)$-consistency
- Path consistency is only considered 3-consistent if there are no constraints of three variables (binary constraints only)

## Searches for CSPs

