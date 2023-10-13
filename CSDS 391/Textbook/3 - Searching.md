---
date created: 2023-09-18 23:09
date updated: 2023-10-13 01:05
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

### Uninformed Search

#### Depth first search

- Does not guarantee most optimal route upon first find of the goal
- Memory efficient

1. Pick a child to explore, and move to that child
2. From that child, repeat step 1 until there are no more children or you have reached the goal state
3. Move up one parent until there are unexplored children and go back to step 1 from that state

#### Breadth first search

- Guarantees the most optimal route
- Uses a lot of memory

1. Generate a list from all child nodes of explored nodes
2. Explore all children nodes
3. Repeat step 1 until goal state is found

#### Best-first search

- Guarantees the most optimal route
- Uses a lot of memory
- Is a type of breadth first search

1. Generate a list from all child nodes of explored nodes
2. Sort list by evaluation function
3. Explore the closest child
4. Repeat step 1 until goal state is found

#### Dijkstra's algorithm / uniform-cost search

- Is the same as Best-first search where the evaluation function is the path distance from the starting node
- More applicable for real world use, as paths are not normally of equal cost

#### Depth limited search

- Perform depth first search until a limit (pretend that things at the limit have no children)
- Then pick a different node to begin from again

#### Bidirectional search

- Performing an algorithm from both the beginning and end state, with the end working backwards
- Once they meet or "see" each other then a path has been found
- Often combined with uniform cost search as less exploring needs to be done

### Informed Search

#### Greedy best first search

- Use an estimated cost to goal from each node when creating the heuristic
- For example taking an absolute distance from that node to the target without exploring to get an estimate
- Then pick the node that is estimated to be the closest to the goal

#### A* search

1. Pop first element on priority queue
2. Check if is goal
3. Get neighbors
   1. Calculate heuristics and add to queue
   2. Add to visited list
4. Repeat until goal is found

- Most common algorithm
- Uses the sum of the current distance from the initial node and the estimated cost to the target node as its heuristic
- If the heuristic is admissible, then A* search is complete and optimal based on the triangle inequality
- Uses a lot of memory

##### Admissible Heuristics

- Never overestimates the possible path to the goal state

#### Weighted A\* search

- Similar to A* except the estimated target cost is weighted above 1 compared to the distance from initial state weight
- Gives multiple times speedup at the cost of a slightly less optimal result

#### Beam search

- Similar to A\* except limits the size of the unexplored nodes to a certain number and discards the rest
- Much lower memory consumption at the cost of a less optimal result and may not be complete

#### Iterative Deepening A\* (IDA\*) search

- Similar to A* except uses an iterative deepening approach
- It only keeps all nodes from the start to finish in memory and uses those to compare
- Uses less memory at the expense of higher compute time
- Uses the $f$-cost of the smallest node that exceeded the previous cutoff

#### Recursive best-first search RBFS

- Attempts to mimic a best first search
- Explores down until it hits the $fLimit$, then backs up, picking the second lowest estimated score
- Uses the distance from start as well as estimated distance to end to organize nodes
- Uses much less memory, better option if A* is too heavy
- Reexplores a lot of nodes (waste of resource and time)

#### Simple Memory bounded A\* (SMA\*)

- Similar to A*, except when reaching the memory limit, the worse node is thrown away
- If a branch comes to a dead end or is proven suboptimal (due to triangle inequality), it can be thrown away and the memory used to re-explore

#### Bidirectional Heuristic Search

- Performs an informed search from both the beginning and the end working to meet in the middle
- Cannot be proven to be optimal
- Has two types:
  - front to front
    - Have the goal update to the other frontier
  - front to end
    - Have the goal remain to be the other side (root or goal)
- For front to front, the heuristic is often max(2g, g+h)

## Search Contours

An imagined map of where a search function searches first, with rings of how long it takes before a search function going to explore that node.

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

## Heuristics

- Often characterized by their **effective branching factor**, a ratio of how much this heuristic tends to make branches at each node
- Often better if the EBF is minimized to produce an optimal result with little computation

### Subproblems

- Often times a larger problem can be divided up into smaller chunks which can be precomputed or computed faster than the entire problem at once

### Precomputation

- Precomputing and storing costs between verticies and other short routes

#### Landmarking

- Precomputing and storing optimal pathes between landmarks

#### Differential Heuristic

- Using a precomputed path but subtracting off the end of it
- Differential because of the subtraction
