```python
@(lambda func, memo={}: lambda *args: memo.get(args) or memo.update({args: func(*args)}) or memo.get(args))
def coinChange(coins, amount): return amount and min([coinChange(coins, amount - coin) for coin in coins if coin <= amount]) + 1

print(coinChange((1, 2, 5), 9))
```

```TypeScript
procedure coinChange(coins, amount)
	memo <- {0: (0, [])}
	return coinChangeAux(coins, amount, memo)

procedure coinChangeAux(coins, amount, memo)
	if amount in memo
		return memo.get(amount)
	ret <- min(
		[coinChangeAux(coins, amount - coin, memo), coin]
		for coin
		in coins,
		x -> x[1][1]
	)
	ret[1][1] <- ret[1][1] + 1
	ret[1][2].append(ret[2])
	memo.set(amount, ret[1])
	return ret[1]
```
^1p

```col-md
Say $S$ is an optimal solution for coins $c$ and amount $a$.
We claim that since $S$ is optimal, its subproblems $(S_{1}, S_{2})$ must also be optimal.

Assume that $S$'s subproblems are not optimal.

If $S_{1}$ or $S_{2}$ is non-optimal, then there must exist an optimal solution $S_{1}^{*}$ or $S_{2}^{*}$ such that $S_{1}^{*}<S_{1}$ or $S_{2}^{*}<S_{2}$ since optimal in this case means finding the least number of coins.

Since the minimum number of coins $S$ is going to be the sum of its subproblems, $S=S_{1}+S_{2}$, if the subproblems are suboptimal, $S>S_{1} ^{*}+S_{2}$ or $S>S_{1}+S_{2}^{*}$, so $S$ is not optimal, which is a contradiction of our given.

Therefore, our assumption must be false and $S$'s subproblems must be optimal.
```
^1s

```python
import heapq

def edit_distance_with_changes(X, Y):
    m = len(X)
    n = len(Y)
    
    pq = []
    
    heapq.heappush(pq, (0, 0, 0, [], X))
    
    visited = set()
    visited.add((0, 0))
    
    while pq:
        dist, i, j, operations, prev = heapq.heappop(pq)

        # Reached the target
        if i == m and j == n:
            return dist, operations
        
        # Insertion
        if j < n:
            new_state = (i, j + 1)
            if new_state not in visited:
                visited.add(new_state)
                new_str = prev[0:j] + Y[j] + prev[j:]
                new_operations = operations + [f"insert '{Y[j]}' at {j}: {new_str}"]
                heapq.heappush(pq, (dist + 1, i, j + 1, new_operations, new_str))
        
        # Deletion
        if i < m:
            new_state = (i + 1, j)
            if new_state not in visited:
                visited.add(new_state)
                new_str = prev[0:i] + prev[i+1:]
                new_operations = operations + [f"delete '{X[i]}' at {i}: {new_str}"]
                heapq.heappush(pq, (dist + 1, i + 1, j, new_operations, new_str))

        # Replacement
        if i < m and j < n:
            new_state = (i + 1, j + 1)
            if new_state not in visited:
                if X[i] == Y[j]:
                    heapq.heappush(pq, (dist, i + 1, j + 1, operations, prev))
                else:
                    new_str = prev[0:i] + Y[j] + prev[i+1:]
                    new_operations = operations + [f"replace '{X[i]}' with '{Y[j]}' at {j}: {new_str}"]
                    heapq.heappush(pq, (dist + 1, i + 1, j + 1, new_operations, new_str))

# Example usage
X = "esteban"
Y = "stephen"
distance, changes = edit_distance_with_changes(X, Y)
print("Edit distance:", distance)
print("Changes made:")
for change in changes:
    print(change)
```
^1i

```typescript
procedure stringDistance(str source, str target) -> int, str[]
	m <- length(source)
	n <- length(target)
	
	prioQueue <- new PriorityQueue((0, 0, 0, [], source))
	visited <- new Set((0, 0))
	
	while prioQueue not empty
		distance, i, j, path, previous <- prioQueue.pop()
		
		// Reached the target
		if i == m and j == n
			return distance, path
		
		// Insertion
		if j < n
			nextPos <- (i, j + 1)
			if nextPos not in visited
				visited.add(nextPos)
				newStr <-
					previous[0:j] +
					target[j] +
					previous[j:]
				newOperations <- [...operations,
					`Insert ${target[j]} at ${j}\
					 to make ${newStr}$`
				]
				prioQueue.add((
					distance + 1,
					...nextPos,
					newOperations,
					newStr
				))
		
		// Deletion
		if i < m
			nextPos <- (i + 1, j)
			if nextPos not in visited
				visited.add(nextPos)
				newStr <-
					previous[0:i] +
					previous[i+1:]
				newOperations <- [...operations,
					`Delete ${source[i]} at ${i}\
					 to make ${newStr}$`
				]
				prioQueue.add((
					distance + 1,
					...nextPos,
					newOperations,
					newStr
				))
		
		// Replacement
		if i < m and j < n
			nextPos <- (i + 1, j + 1)
			if nextPos not in visited
				visited.add(nextPos)
				if source[i] == target[j]
					prioQueue.add((
						distance,
						...nextPos,
						operations,
						previous
					))
				else
					newStr <-
						previous[0:i] +
						target[j] +
						previous[i+1:]
					newOperations <- [...operations,
						`Replace ${source[i]} with ${target[j]}\
						 at ${j} to make ${newStr}$`
					]
					prioQueue.add((
						distance + 1,
						...nextPos,
						newOperations,
						newStr
					))
```

^2p

```Python
def min_edit_dist(X, Y): return (lambda _=(lambda _, m={}: lambda *q: m.get(q) or m.update({q: _(*q)}) or m.get(q))(lambda _,i=0,j=0,k=len(X),l=len(Y): i==k and l-j+1 or j==l and k-i+1 or X[i]==Y[j] and _(_,i+1,j+1) or 1+min(_(_,i+1,j),_(_,i,j+1),_(_,i+1,j+1))): _(_)-1)()

print(min_edit_dist("esteban", "stephen"))
```

```col-md
Say $S$ is an optimal solution for the operations required to get from $source$ to $target$.
We claim that since $S$ is optimal, its prior subproblems $(S_{1}, S_{2}, S_{3})$ must also be optimal. Getting from a prior subproblem is a single or no operation movement, and thus cannot be more optimal.

Assume that $S$'s subproblems are not optimal.

If $S_{n}$ is non-optimal, then there must exist an optimal solution $S_{n}^{*}$ such that $S_{n}^{*}<S_{n}$ since optimal in this case means finding the least number of operations.

Since the minimum number of operations $S$ is going to be the minimum of its subproblems plus one or none, $S=S_{n}+c$, if the subproblems are suboptimal we may construct $S_{n}^{*}$ such that $S_{n}^{*}<S_{n}$. If $S_{n}$ is the minimum of the subproblems, then we may construct a new $S^{*}=S_{n}^{*}+c$.

$S_{n}^{*}<S_{n}\implies S_{n}^{*}+c<S_{n}+c\implies S^{*}<S$

Therefore, our assumption must be false and $S$'s subproblems must be optimal.
```
^2s

```col-md
All strings are possible to be formed from another string by a full removal and a full insertion of the next string. This will be our worst case scenario, and this our maximum distance will be the sum of the length of the strings.

My code adds all possible next moves to the stack such that they may be processed later. We know it will at max take our worst time, this will terminate our loop if there is no early exit. For every possible next string, we are memoizing if we have encountered this string before, to reduce the amount of computation we need by removing recomputation, and removes loops in our solving structure.

Initialization: Start the stack with our original string
Loop Invariant: The stack will contain at least one string that is n steps closer to our target
Loop Proof: All possible moves are in the stack, therefore the correct string that is closest to the target is also in the stack.
Termination: If we reach our target, we end early. If not, we know our worst case of full removal and full addition is the case.
```

```python
import numpy as np

def find_optimal_path(r, f, i, j, max_iter=100):
    '''
    Get from currency i to currency j with exchange cost of f(n) where n is the number of steps.
    r[a, b] represents the exchange rate from currency a to b
    '''
    # Begin with first conversion from initial currency
    start = r[i]
    # The pathes for each target currency for each step are stored in this array
    max_track = np.array([i] * start.shape[0]).reshape(-1, 1)
    # The max value for each currency for each step is stored in this array
    maxes = np.array(start.reshape(-1, 1) - f(1))
    # The pathes for the max at each step is stored in this array

    for i in range(max_iter-1):
        # Calculate converting to all other currencies
        nex = r * start.reshape(-1, 1)
        # Pick the maximum conversion for each currency
        max_row = nex.argmax(axis=0)
        start = nex[max_row, np.arange(nex.shape[1])]
        # Track the path to get to the maximum conversion
        max_track = np.hstack((max_track, max_row.reshape(-1, 1)))
        maxes = np.hstack((maxes, start.reshape(-1, 1) - f(i+1)))

    maxInd = maxes.argmax(axis=1)
    maxVals = maxes[np.arange(maxes.shape[0]), maxInd]
    final_track = [j]
    max_track = np.flipud(max_track.T)
    [final_track.insert(0, max_track[i, final_track[0]]) for i in range(maxInd[j] + 1)]
    return maxVals[j], np.array(final_track)

# Example 
r = np.array([
    [1,     2,      3,      4],
    [1/2,   1,      6,      7],
    [1/3,   1/6,    1,      8],
    [1/4,   1/7,    1/8,    1]
])

f = lambda x: x+1

v, t = find_optimal_path(r, f, 0, 3)

print(v)
print(t)
```
^3i

```typescript
procedure findOptimalPath(r, f, i, j, max_iterations)
	start <- r[i]
	max_track <- Array.repeat(i, length(start)).transpose
	maxes <- start.transpose - f(1)
	for i in 0...max_iterations - 1
		next <- r * start.transpose
		start, max_row <- next.maximum(direction=0)
		max_track <- max_track.append(max_row.transpose)
		maxes <- max.append(start.transpose)
	
	max_vals, max_index <- maxes.maximum(direction=1)
	final_track <- [j]
	max_track <- max_track.transpose.vflip
	final_track.unshift(max_track[i, final_track[0]])
		for i
		in 0...max_index[j]+1
	return max_vals[j], final_track
```
^3p

```col-md
Say $S$ is an optimal solution for the conversions required to get from currency $i$ to currency $j$.
We claim that since $S$ is optimal, its prior subproblems $S_{n}$ must also be optimal. Where a subproblem is defined as the optimal path to get to all possible currencies in one less step. Getting from a prior subproblem to the final solution is a single or no operation movement, and thus cannot be more optimal, where the final solution is defined as one conversion from any prior subproblem, or no conversion from the subproblem corresponding to the target currency.

Assume that $S$'s subproblems are not optimal.

If $S_{n}$ is non-optimal, then there must exist an optimal solution $S_{n}^{*}$ such that $S_{n}^{*}>S_{n}$ since optimal in this case means finding the most money out of all conversions.

Since the maximum conversion $S$ is going to be the maximum of its subproblems multiplied by conversion minus the conversion costs, $S=S_{n}r_{n,j}+f(c)$, if the subproblems are suboptimal we may construct $S_{n}^{*}$ such that $S_{n}^{*}>S_{n}$. If $S_{n}$ is the maximum of the subproblems, then we may construct a new $S^{*}=S_{n}^{*}r_{n,j}+f(c)$.

$S_{n}^{*}>S_{n}\implies S_{n}^{*}r_{n,j}+f(c)>S_{n}r_{n,j}+f(c)\implies S^{*}>S$

Therefore, our assumption must be false and $S$'s subproblems must be optimal.
```
^3s