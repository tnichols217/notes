# Searches

Contains
- Goal
- Start
- Actions
- Transition cost
- Action cost
- Environment / State space

Measured by
- Completeness
- Optimality
- Time / Space Complexity

# Types of Searches

## Uninformed Search

Depth First: Keep going until cannot, then swap children
Breadth First: Expand all children of the closest node
Best-first: Expand the node closest to the result
Uniform-cost: Expand closest node accounting for node distance
Depth limited: Depth first up to a limit
Bidirectional: Start from beginning and end and meet in the middle

## Informed Search

Greedy Best-first: Expand the closest node
A\*: Expand the smallest heuristic + distance to start
Weighted A\*: Multiply heuristic by a constant to make A* more greedy
Beam: best first, but only keep the top k nodes
IDA\*: A* but only add nodes to frontier if below the threshold
SMA\*: A* but keep top nodes until memory runs out, then prune
