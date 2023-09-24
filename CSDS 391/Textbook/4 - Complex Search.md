---
date created: 2023-09-23 18:23
date updated: 2023-09-23 18:29
---

# Complex Search

- Some problems just require finding the goal state
- The path to get there does not matter
- This applies to optimization problems and can be solved with local search

## Local Search

> [!def]
> **Local Search**
> An algorithm that operates only on the current state and a target goal state

- Is not systematic, may never explore some areas
- May explore previously visited areas
- Much lower memory cost, more efficient for huge data sets
- Can find a reasonable solution in big sets of data

## Optimization Problem

> [!def]
> **Optimization Problem**
> A problem whose solution is to find the best state according to an objective function
>
> - Maximizing the objective function across all inputs

- Uses an objective function to measure performance
- The goal is to find a set of inputs that will maximize the objective function
- Often for larger input sets, local search is used as it works on large sets and does not care about the path
- The goal is to find the global maximum or minimum

### Hill-Climbing and Gradient Descent

- Takes a state and heads in the direction with the steepest change either up or down

#### Often has problems with 

- Local maxima and failing to find higher maxima
- Ridges, as they must go down before going up
- Plateaus, as the function does not know where to go to go up

### Simulated Annealing

Combining an optimal move with a random walk to allow for more exploration

### Local Beam Search

Keeping track of multiple ($k$) best states instead of just one
#### Often has problems with

- Clustering the $k$ states, making it just a $k$ times speed reduction

### Evolutionary Algorithms

Using a set's solutions to create children solutions through recombination. Bad solutions are dropped and some randomness is added (mutations) each generation.

## Search with Nondeterministic Actions

When an agent cannot be fully sure what state they are in or able to go to, but knows limited information about the properties of the state (**belief state**).

These problems must be solved with a conditional plan, so that when conditions are met or the path changes, it will be able to account and solve the problem.


