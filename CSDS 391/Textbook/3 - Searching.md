---
date created: 2023-09-18 23:09
date updated: 2023-09-19 01:23
---

# Searching

An agent searching ahead and planning is called a **problem-solving agent**.

- They use atomic representations to interpret the world
- Agents that use factored or structures representations are **planning agents**

## Steps

### Goal Formulation

Specifying the target or goal to reach

### Problem Formulation

Specifying possible actions and states - an abstraction of the relevant world. In a place that is deterministic and consistent.

### Search

The agent simulates possible solutions and returns a result when its done

### Execution

Uses the result to execute the simulated result

## Properties of a Search Model

A search model consists of the following modules:

- A state space - often represented as a graph
- An initial state
- A goal state
- Possible actions
- A transition model
- Action cost model

Where you make a path from the initial state to the goal state by performing actions. An optimal solution is

## Graphs

Often a state space can be represented as a graph, with the initial state being the top of the graph and possible actions being children of each node. Visualizing the solution to reach the goal state would be to connect a line from the top of the graph to the solution node.

## Performance metrics

### Completeness

If the algorithm returns the correct result, or is possible of returning a correct result if it exists

### Optimality

If the algorithm returns the best result within reasonable time and space.

### Time Complexity

How long it takes for the algorithm to arrive at a solution or the optimal solution.
Often measured as a function of the size of the input in terms of the most expensive operation (swaps, movement, searches)

### Space Complexity

How much memory or storage the algorithm uses in order to produce a result.

## Common search methods

### Depth first search

- Does not guarantee most optimal route upon first find of the goal
- Memory efficient

1. Pick a child to explore, and move to that child
2. From that child, repeat step 1 until there are no more children or you have reached the goal state
3. Move up one parent until there are unexplored children and go back to step 1 from that state

### Breadth first search

- Guarantees the most optimal route
- Uses a lot of memory

1. Generate a list from all child nodes of explored nodes
2. Explore all children nodes
3. Repeat step 1 until goal state is found

### Best-first search

- Guarantees the most optimal route
- Uses a lot of memory
- Is a type of breadth first search

1. Generate a list from all child nodes of explored nodes
2. Sort list by evaluation function
3. Explore the closest child
4. Repeat step 1 until goal state is found

### Dijkstra's algorithm / uniform-cost search

- Is the same as Best-first search where the evaluation function is the path distance from the starting node
- More applicable for real world use, as paths are not normally of equal cost

### Depth limited search

- Perform depth first search until a limit (pretend that things at the limit have no children)
- Then pick a different node to begin from again

### Bidirectional search

- Performing an algorithm from both the beginning and end state, with the end working backwards
- Once they meet or "see" each other then a path has been found
- Often combined with uniform cost search as less exploring needs to be done

### Greedy best first search

- Incorporate an estimated cost to goal from each node when creating the heuristic

## Search Data Structures

### Frontier

#### State

The current node that the state represents

#### Parent

A pointer to the parent of this node

#### Action

The action applied to get to this state

#### Path Cost

Total cost of getting from the initial position to this state

### Node

#### Parent

The parent node

#### Children

The children nodes

#### Actions

Possible actions

### Queues

#### Priority Queue

A queue where the best node according to a heuristic is popped first

#### FIFO Queue

A queue where the earliest node to be added gets popped first

#### LIFO Queue

A queue where the last node to be added get popped first
