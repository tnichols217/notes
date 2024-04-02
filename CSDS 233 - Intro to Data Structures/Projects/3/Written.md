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
	return -1
}
```