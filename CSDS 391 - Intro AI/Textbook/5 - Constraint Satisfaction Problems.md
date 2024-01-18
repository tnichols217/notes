---
date created: 2023-09-24 13:51
date updated: 2023-09-24 17:00
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
- Must use an optimization search after constraint propagation to find the best solution

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

Often after completing constraint propagation, there will still be a lot of possibilities for each variable, we will then need to search for just a or the best solution

Also note that CSPs's are communicative, where the order of variable selection does not matter if selecting the same values. This greatly reduces tree size and search time

### Backtracking Search for CSPs

Similar to a recursive depth-first search

- memory efficient
- when reaching an invalid or failure state, the recursions unravel until a node with valid children
- if there are no preference constraints, then return the first solution to be found

#### Variable Ordering

> [!def]
> **Minimum-remaining-vriable (MRV) heuristic**
> Pick the first variable that has the smallest possible state space so that a fail state can eliminate the tree quickly
>
> ---
>
> **Degree heuristic**
> Choose the variable that is involved in the most constraints to reduce the search branching factor first
>
> ---
>
> **Least-constraining-value heuristic**
> If possible, it tends to be more optimal to choose variables that reduce the remaining states the **least** after choosing the first variable to find any solution as fast a possible

#### Forward Checking

Whenever a variable is assigned, delete every arc-inconsistent value from every other variable

##### MAC (Maintaining Arc Consistency)

An algorithm that iterates over every edge instead of just edges relating to other variables, as it can propagate new deletions to other edges too

#### Types of Backtracking

##### Chronological Backtracking

Backtrack to the most recent node that still has valid children

##### Conflict-directed Backtracking

Backtrack to the last node that assigned a variable which is in conflict with the failed node

#### Constraint Learning

When a node fails, mark down the nodes that failed a constraint so that forward checking and back jumping can avoid it

### Local Search for CSPs

1. Begin with a random complete assignment of variable
2. Pick a random conflicted variable
3. Modify the value of the variable such that the number of conflicts is at a minimum (**min-conflicts heuristic**)

- Can be used as an online search

#### Tabu Search

Keep a small list of recently visited states and their heuristic to prevent revisitation

#### Constraint weighting

Adds importance to a particular constraint, so that the topology is not entirely flat, and that the search will focus on keeping a particular constraint solved

### CSP Search Structure

> [!def]
> **Independent Subproblems**
> When a cluster of nodes are completely detached from another cluster of nodes and may be solve independently
>
> ---
>
> **Directional Arc Consistency**
> Under a particular order of the variables of a CSP, all variables are arc consistent with all variables before it

#### Tree Solver

1. Sort tree of nodes into a linear line
2. Loop through each node and ensure they are consistent with prior variables

#### Cutset Conditioning

Removing a part of the problem, then remerging it later

1. Pick a subset of nodes (**cycle cutset**) such that their removal produces a tree
2. For all solutions of the slimmed tree
   1. Perform constraint propagation on the cutset
   2. If the cutset still has values, return the cutset merged with the slimmed tree

#### Tree Decomposition

Splitting the graph into a tree by grouping multiple nodes into a meta-node in a tree such that

1. Every original variable must appear in the new tree
2. Every variable edge must be shown on the graph
3. If a variable appears in two nodes in the tree, it must appear in every node along the path connecting those node

Effectively solves possible states for each constraint then merges them with the tree solver

#### Symmetry Breaking Constraints

Adding constraints to remove possible value symmetries

- Allows faster solving by faster filtering
- Removes duplicated like the permutations of the colors in the 4 color map problem
