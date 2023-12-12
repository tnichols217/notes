# Intelligent Agents

An **agent** is anything that can perceive its environment (through sensors) and act upon it (through actuators)

- **Percept sequences** is the history of perception of an agent
- **Agent function** is what maps percept sequences into actions
- **Tabulating** is putting inputs and outputs of an agent into a table

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

# CSP
## Constraints
Node Consistency: all unary constraints are satisfied
Arc Consistency: all binary constraints can be satisfied with current possible values
Path Consistency: all binary constraints can be satisfied upon triplets of nodes






