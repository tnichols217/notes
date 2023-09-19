---
date created: 2023-09-18 23:09
date updated: 2023-09-19 00:23
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
2. Sort list using a heuristic if existing
3. Explore the top node based on sorting
4. Repeat step 1 until goal state is found

### Best-first search

- Guarantees the most optimal route
- Uses a lot of memory

1. Generate a list from all child nodes of explored nodes
2. Sort list by distance from starting node
3. Explore the closest child
4. Repeat step 1 until goal state is found

## Search Data Structures

### Node
#### State

The current state of the 

#### Parent

#### Action

#### Path Cost
