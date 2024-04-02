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

# 2

## a

Is it possible to create an iterator on a custom object that does not implement the Iterable interface? Briefly explain why

## b

Compare and contrast the Iterator and ListIterator interfaces in Java

# 3

## a

Given an array of 6 elements: 2, 24, 69, 8, 1, 15. Please explain step-by-step how selection sort and insertion sort will be performed on the array. You can choose either the recursive or the iterative way

## b

