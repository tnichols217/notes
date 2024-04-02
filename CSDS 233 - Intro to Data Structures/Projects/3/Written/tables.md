|                        | Recursive               | Iterative               |
| ---------------------- | ----------------------- | ----------------------- |
| Space (number of ints) | $O(4\log_2N)=O(log N)$  | $O(3)=O(1)$             |
| Time (by comparisons)  | $O(3\log_2N)=O(\log N)$ | $O(3\log_2N)=O(\log N)$ |
^1a

```ts
function reverse(array: SinglyLinkedList, left: int, right: int) {
	let a = array[left-1]
	let filo = new Stack();
	for (i = a; i.next != None; i=i.next {
		filo.add(i)
	}
	for (i = filo.pop(); filo.hasNext(); i = filo.pop()) {
		a.next = i
		a = i
	}
}
```
^4a