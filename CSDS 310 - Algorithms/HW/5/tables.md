```TypeScript
procedure domination_factor(n, E, z)
	SCCs <- Kosaraju(n, E)
	groups <- length(SCCs)
	grouping <- Array(n)
	group_max <- Array(groups)
	for scc in 1..groups
		for node in SCCs[scc]
			grouping[node] <- scc
			val <- z[node]
			if val > group_max[scc]
				group_max[scc] <- val
	dag_edges <- []
	node_edges <- Array(groups)
	for edge in E
		a <- grouping[E[1]]
		b <- grouping[E[2]]
		if a != b and [a, b] not in dag_edges
			dag_edges.append([a, b])
			node_edges[a].append(b)
	sorted_dag <- topological_sort(groups, dag_edges)
	for edge in sorted_dag.reversed()
		child_max <- grouping_max[edge.to]
		if child_max > grouping_max[edge.from]
			grouping_max[edge.from] <- child_max
	node_max <- Array(n)
	for node in 1..n
		node_max <- group_max[grouping[node]]
	return node_max
```
^1c

```col-md
This algorithm functions in four main steps
1. Finding SCCs and the maximum domination factor for each SCC
2. Constructing a DAG out of the SCCs
3. Traversing the DAG in reverse topological order, setting the current domination factor to be the max of itself or its children
4. Setting the domination factor for each node within each SCC to the domination factor of the SCC

All nodes within the same SCC will have the same domination factor. This is because if one node is able to beat a team of rank $j$, and all teams within the same SCC are able to beat each other, then they are also able to beat a team of rank $j$.

In the DAG of SCCs, if an SCC is able to beat another SCC, then the parent SCC will be able to beat whatever the child SCC is able to beat, by properties of the DAG. Therefore, the domination factor of an SCC is the max of the domination factors within the SCC and all the SCCs that it can beat.
```
^1p

```TypeScript
procedure domination_factor(n, E, z)
	SCCs <- Kosaraju(n, E)
	group_max <- empty array of same size as SSCs
	for each scc in SCCs
		calculate the max z for each node in this SCC
			store it into group_max
	
	dag_edges <- empty array
	for each edge in E
		convert each node in edge to its group
		if edge is not in dag_edges
			dag_edges.append(edge)
	
	sorted_dag <- topological_sort(SCCs, dag_edges)
	for each edge in sorted_dag.reversed()
		if grouping_max[edge.to] > grouping_max[edge.from]
			grouping_max[edge.from] <- grouping_max[edge.to] 
	
	node_maxes <- empty array of length n
	for each node
		node_maxes[node] <- group_max of this node
	return node_maxes
```
^1pc

```col-md
Each loop is of order $n$, $e$, $e$, $n$
So the runtime is overall $O(n+e)$
```
^1rt

```TypeScript
procedre rivalries(n, E)
	depth, unused_edges <- BFS(n, E)
	for edge in unused_edges
		if edge.from % 2 != edge.to % 2
			return false
	B <- []
	H <- []
	for node in n
		if depth[node] % 2 == 0
			B.append(node)
		else
			H.append(node)
	return B, H
```
^3pc

```col-md
Given an arbitrary BFS, starting at the root, we may assign this node to either group as there are no constraints. The depth one will all have edges connecting to the root. Since the root has been assigned to a group, the first depth must be of the other group. The same may be said about depth two and depth one, where depth two must be of the same group of the root.

More strictly:

Where $d_{i}$ is defined as the set of nodes at depth $i$ for an arbitrary BFS,

All nodes in $d_{j+1}$ must have an edge connecting it to a node in $d_{j}$ for any $j\le l$ where $l$ is max depth for the BFS run.

Therefore, all nodes in $d_{j+1}$ must be in a different group than nodes in $d_{j}$, as they all have rivalries with each other.

Therefore, alternating depths in an arbitrary BFS must be in opposite groups.

We may then check all other edges and if they do not go from an even depth to an odd layer then there is no possible arragement such that there are two groups, as it becomes necessary that two people of the same group have a rivalry.
```
^3p

```col-md
Since BFS is $O(n+e)$
And our algorithm additionally utilizes a loop of edges and a loop of nodes, it is also $O(n+e)$.

Therefore, overall, it is also $O(n+e)$
```
^3rt