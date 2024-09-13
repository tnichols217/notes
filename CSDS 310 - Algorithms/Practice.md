# isPalindrome

```TypeScript
let a = ["tacocat", "racecar", "notapalindrone", "12321"]
let isPalindrome = (a) => {
	let l = a.length
	for (let i =0; i <=l/2; i++) {
		if (a[i] != a[l-i-1]) return false;
	}
	return true
}
console.log(a.map(isPalindrome))
```

## Loop invariant

The first $i$ characters of the string will be equivalent to the reverse of the last $i$ characters of the string.

## Initialization

$i=-1$ is off the bounds of the array, so we do not need to check if it is part of the palindrome. Therefore, we start at $i=0$

## Maintenance

Check if the $i$th from the start and $i$th from the end equal. If not, then fail the function.

## Termination

At the middle of the string, we will no longer need to continue iterating as we have already covered the other side of the string. We will terminate the loop when $i$ is half of the length of the string.
