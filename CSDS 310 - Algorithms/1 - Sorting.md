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

> [!def]
> **Loop Invariant**
> At the beginning of each iteration of the outer for loop, the subarray `A[1..i-1]` contains the elements originally in `A[1..i-1]` but in sorted order

```typescript
insertion-sort(A, n):
	// For every element from item 2 on
	for i=2 to n do:
		key = A[i]
		// Insert A[i] into the sorted subarray A[i-1]
		j = i-1
		// Loop over all items left of the key
		while j>0 and A[j]>key do:
			// Shift items right if item is larger than key
			A[j+1] = A[j]
			j = j-1
		// Place key when item on the left is smaller
		A[j+1]=key
```

```typescript
const insertionSort = (A) => {
    let n = A.length
    for (let i = 1; i < n; i++) {
        let key = A[i]
        let j = i - 1
        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j]
            j--
        }
        A[j + 1] = key
    }
    return A
}

const test = () => {
	console.log(insertionSort([5, 2, 4, 6, 1, 3]))
}

test()
```
