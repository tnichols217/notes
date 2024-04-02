# 1

Here are two implementations of the binary search algorithm: one using recursion and the other using an iterative approach.

```java
public static int recursiveBinarySearch(int[] array, int target, int left, int right) {
	if (left <= right) {
		int mid = left + (right - left) / 2;
		if (array[mid] == target)
			return mid;
		if (array[mid] < target)
			return recursiveBinarySearch(array, target, mid + 1, right);
		return recursiveBinarySearch(array, target, left, mid - 1);
	}
	return -1;
}
```

```java
public static int iterativeBinarySearch(int[] array, int target) {
	int left = 0;
	int right = array.length - 1;

	while (left <= right) {
		int mid = left + (right - left) / 2;

		if (array[mid] == target)
			return mid;
		if (array[mid] < target)
			left = mid + 1;
		else
			right = mid - 1;
	}
	return -1;
}
```

Compare the two algorithms in terms of space and time complexity. Explain your answer.

> [!answer]
> Where $N$ is the length of the array:
> ![[CSDS 233 - Intro to Data Structures/Projects/3/Written/tables#^1a|tables]]
> 
> Since `int`s are passed to the next function in the recursive method, java must allocate more memory for each call, as it is passed by value. The iterative approach does not have this drawback.
> 
> Both have the same number of comparisons, with 3 for each iteration, and a worst case of $log_2N$ iterations.
> 
> The more optimized solution would be the `iterativeBinarySearch` as it uses less memory in the same time.
 
# 2

## a

Is it possible to create an iterator on a custom object that does not implement the Iterable interface? Briefly explain why

> [!answer]
> Yes, it is possible
> 
> If the class has a public way to programatically retrieve all the items within that class's data object in order, then you can write an external class that implements an iterator for the other class through its public methods.
> 
> If the class you want to create an iterator for doesn't have public methods to support retrieving all the information in order in any way, or does not contain multiple items to be iterated over, then you cannot create an iterator for that class.

## b

Compare and contrast the Iterator and ListIterator interfaces in Java

> [!answer]
> `Iterator` traverses only forwards while `ListIterator` can traverse in either direction.
> 
> `ListIterator` additionally can add, remove, and get the index of items, while `Iterator` cannot.

# 3

## a

Given an array of 6 elements: 2, 24, 69, 8, 1, 15. Please explain step-by-step how selection sort and insertion sort will be performed on the array. You can choose either the recursive or the iterative way

### i

Selection Sort

> [!answer]
> 1. Initialize your sorted index variable at `0`
> 2. Scan all values to the rig
> Array: `[2,24,69,8,1,15]`
> 

### ii

Insertion Sort

> [!answer]
> 

## b

Why is the best case for Insertion Sort O(N)? Give an example of the scenario in which the best case occurs

# 4

Write pseudo-code/code in Java for the following problem:
Reverse a section of a singly linked list: You have a singly linked list and two integers, left and right, with left ≤ right. Your task is to reverse the nodes of the list from position left to position right and then return the modified list.

For example:
List: 12 → 15 → 24 → 10 → 19
Left: 3
Right: 5
The resulting list should be: 12 → 15 → 19 → 10 → 24