---
date created: 2023-09-24 13:51
date updated: 2023-09-24 13:51
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

### Unary Constraint

A constraint that only involves a single variable
- Easy to solve and restrict

### Binary Constraint

A constraint involving the relationship of two variables
- 
