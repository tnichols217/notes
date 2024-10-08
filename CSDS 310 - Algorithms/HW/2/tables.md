```python
procedure mergeArrays(k, n, a[k][n/k])
	# Extract the first item and its location in the array and sort them via their value using merge sort
	# theta(k log(k))
	minimums <- AVLTree<[int, int, int]> (
		[a[i][1], i, 1] for i in 1..k,
		metric <- (i => i[1])
		)
	
	output <- Array<int>(n)
	
	# repeats n times
	for each i in 1..n
		# Remove the minimum from the minimum array and put it into the output array
		# theta(log(k)) (AVL Tree)
		min <- minimums.deleteMin()
		output[i] <- min[1]
		# Iterate index of minimum in relevant subarray
		newIndex <- min[3] + 1
		# This if statement will only be false k times
		if newIndex <= n/k
			# Insert a new item into the sorted minimum array using binary insertion
			# theta(log(k))
			minimums.insert(
				[a[min[2]][newIndex], min[2], newIndex]
				)
	# total loop will be of the complexity of:
	# theta((n-k) log(k) + n) => theta((n-k) log(k))
	
	return output
	# overall complexity will be theta((n+k) log(k))
```
^4
