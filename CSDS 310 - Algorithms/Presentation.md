```python
procedure optimal_cache(requests, k)
	indices <- {}
	cache <- new priority queue of size k
	misses <- 0
	
	for each index i in requests
		if requests[i] not in indices
			indices[requests[i]] <- [i]
		else
			indices[requests[i]].append(i)
	
	for each x in indices
		x.append(infinity)
	
	for each index i in requests
		if requests[i] not in cache
			misses++
		
			if cache is not full
				cache.add(requests[i], indices[requests[i]].remove(0))
			
			if indices[requests[i]] < indices[cache[0]]
				cache.remove(0)
				cache.add(requests[i], indices[requests[i]].remove(0))
		
		else
			cache.set_priority(
				requests[i],
				indices[requests[i]].remove(0)
			)
		
	return misses
```

For our greedy choice of choosing the last used cache item if that item is after the next usage of the current item,

Let $S$ be the number of cache misses produced by using this greedy choice.

Assume there is an even more optimal solution $S'$ that does not use this greedy choice.

Let our order of requests be $R=[r_{1},\dots,r_{l},\dots,r_{m}\dots,r_{n},\dots,r_{o}]$
Let our cache be $C=[r_{m},r_{n},\dots]$ while processing the value $r_{l}$ in the requests.

Let the denoted $r_{m}$ be the first instance of $r_{m}$ after $r_{l}$, and likewise with $r_{n}$

Let our algorithm choose $r_{n}$ to replace, but this alternative more optimal algorithm choose $r_{m}$ instead. By the time the algorithm gets to $r_{m}$, it will have performed the same amount of cache misses as our solution, as $r_{m}$ and $r_{n}$ are both not present between $r_{l}$ and $r_{m}$. At this time $r_{m}$ may still be present in our solution, but will definitely not be present in the alternative solution.

Thus, $S=S'-1 \text{ or } S'$ from $r_{l}$ to $r_{m}$

If this alternative algorithm chooses to store $r_{m}$ and there are additional instances of $r_{m}$ before $r_{n}$, then by the time we reach $r_{n}$, $S=S'$.

If not, then $S=S'-1$ must necessarily be true.

Which contradicts the statement that $S'$ is more optimal than $S$, thus $S$ must be the most optimal, as it is equal to, if not better than any other solution.
