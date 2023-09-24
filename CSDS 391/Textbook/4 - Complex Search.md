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

## Hill-Climbing and Gradient Descent

- Takes a state and heads in the direction with the steepest change either up or down

### Often has problems with 

- Local maxima and failing to find higher maxima
- Ridges, as they must go down before going up
- 