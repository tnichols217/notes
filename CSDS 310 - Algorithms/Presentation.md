```python
procedure optimal_cache(requests, k)
	cache <- new Cache(size=k)
	misses <- 0
	for i in 1 to length(requests)
		if requests[i] in cache
			continue
		misses++
		
		# Find next time the current request is used
		# index will return -1 if not found
		next_current <- requests.index(requests[i], i+1)
		
		evicts <- []
		for j in 1 to k
			# Find the index of each item in cache's
			# first value after this request
			next_evict <- requests.index(cache[j], i+1)
			evicts.append([next_evict, j])
			if next_evict == -1
				break
		
		# Find maximum of evicts (by first item in each subarray)
		req_to_evict <- max(evicts, x => x[1])[2]
		
		# If any cached item no longer is in the array, replace that
		min_evict <- min(evicts, x => x[1])
		if min_evict[1] == -1
			req_to_evict <- min_evict[2]
		
		# If current request is after all cached items, don't store it
		if next_current >= req_to_evict
			continue
		
		# Replace the request at position req_to_evict
		# in the cache with the new request
		cache[req_to_evict] <- requests[i]
	return misses
```

```python
procedure optimal_cache(requests, k)
	cache <- new cache of size k
	misses <- 0
	for each index i in requests
		if requests[i] is in cache
			skip
		
		misses++
		
		next_request <- next index of requests[i] in requests
		evicts <- []
		for each index j in cache
			next_evict <- next index of cache[j] in requests
			evicts.append([next_evict, j])
			if next_evict == -1
				break
		
		request_to_evict <- maxmimum of evicts by each items first item
		unfound_request <- maxmimum of evicts by each items first item
		
		if unfound_request[1] == -1
			request_to_evict <- unfound_request[2]
		
		if next_request >= request_to_evict
			skip
		
		cache[request_to_evict] <- requests[i]
	return misses
```

For our greedy choice of choosing the last used cache item if that item is after the next usage of the current item,

Let $S$ be the number of cache misses produced by using this greedy choice.

Assume there is an even more optimal solution $S'$ that does not use this greedy choice.

Let our order of requests be $R=[r_{1},\dots,r_{l},\dots,r_{m}\dots,r_{n},\dots,r_{o}]$
Let our cache be $C=[r_{m},r_{n},\dots]$ while processing the value $r_{l}$ in the requests.

Let the denoted $r_{m}$ be the first instance of $r_{m}$ after $r_{l}$, and likewise with $r_{n}$

Let our algorithm choose $r_{n}$ to replace, but this alternative more optimal algorithm choose $r_{m}$ instead. By the time the algorithm gets to $r_{m}$, it will have performed the same amount of cache misses as our solution, as $r_{m}$ and $r_{n}$ are both not present. At this time $r_{m}$ may still be present in our solution, but will definitely not be present in the alternative solution.

Thus, $S=S'-1 \text{ or } S'$ between the gaps of $r_{l}$ and $r_{n}$

Which contradicts the statement that $S'$ is more optimal than $S$, thus $S$ must be the most optimal, as it is equal to, if not better than any other solution.
