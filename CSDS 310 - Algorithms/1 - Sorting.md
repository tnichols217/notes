---
date created: 2024-01-17 09:58
---

# Sorting

## Problem Definition

**Input**:

```java
Array A = <a1, a2, a3, ..., an>
```

**Output**:

```java
Array B = <a1'', a2'', a3'', ..., an''>
```

Such that

- `a1 <= a2 <= a3 <= an`
- All elements in `A` are in `B`

## Types of sorts

### Insertion Sort

If an item is smaller than the 
```
insertion-sort(A, n)
	for i=2 to n do
		key = A[i]
		// Insert A[i] into the sorted subarray A[i-1]
		j = i-1
		while j>0 and A[j]>key do:
			A[j+1] = A[j]
			j = j-1
		A[j+1]=key
```
