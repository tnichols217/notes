```PseudoCode
procedure findSum(A[n],B[n],x)
	i <- 1
	j <- n
	s <- A[i] + B[j]
	while s != x do
		if s > x then
			j <- j - 1
			if j = 0
				return false
		else
			i <- i + 1
			if i = n + 1
				return false
		s <- A[i] + B[j]
	return (i, j)
```
^2

```typescript
let findSum = (A,B,x) => {
	let i = 0
	let j = A.length - 1
	let s = A[i] + B[j]
	while (s != x) {
		if (s > x) {
			j = j - 1
		} else {
			i = i + 1
		}
		s = A[i] + B[j]
	}
	return [i, j]
}
console.log(findSum([1,4,6,8,12,27],[2,8,11,16,32,88],100))
```

```PseudoCode
procedure LydianWins(n)
	for each _ <- 1..n
		ans <- n nand 1
	return (bool) ans
```
^3

```PseudoCode
procedure LydianWins(m, n)
	total <- m + n
	pisidians <- n
	for each _ <- total-1..1
		total <- total - 1
		// If both selected people are Pisidians
		if RANDOM() < pisidians / total && RANDOM() < (pisidians - 1) / total
			pisidians <- pisidians - 2
		if pisidians = 1 || total = pisidians
			return false
		else if pisidians = 0
			return true
	return ERROR
```
^3a