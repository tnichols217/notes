```python
@(lambda func, memo={}: lambda *args: memo.get(args) or memo.update({args: func(*args)}) or memo.get(args))
def coinChange(coins, amount): return amount and min([coinChange(coins, amount - coin) for coin in coins if coin <= amount]) + 1

print(coinChange((1, 2, 5), 9))
```

```TypeScript
procedure coinChange(coins, amount)
	memo <- {0: (0, [])}
	return coinChangeAux(coins, amount, memo)

procedure coinChangeAux(coins, amount, memo)
	if amount in memo
		return memo.get(amount)
	ret <- min(
		[coinChangeAux(coins, amount - coin, memo), coin]
		for coin
		in coins,
		x -> x[1][1]
	)
	ret[1][1] <- ret[1][1] + 1
	ret[1][2].append(ret[2])
	memo.set(amount, ret[1])
	return ret[1]
```
^1p

```col-md
Say $S$ is an optimal solution for coins $c$ and amount $a$.
We claim that since $S$ is optimal, its subproblems $(S_{1}, S_{2})$ must also be optimal.

Assume that $S$'s subproblems are not optimal.

If $S_{1}$ or $S_{2}$ is non-optimal, then there must exist an optimal solution $S_{1}^{*}$ or $S_{2}^{*}$ such that $S_{1}^{*}<S_{1}$ or $S_{2}^{*}<S_{2}$ since optimal in this case means finding the least number of coins.

Since the minimum number of coins $S$ is going to be the sum of its subproblems, $S=S_{1}+S_{2}$, if the subproblems are suboptimal, $S>S_{1} ^{*}+S_{2}$ or $S>S_{1}+S_{2}^{*}$, so $S$ is not optimal, which is a contradiction of our given.

Therefore, our assumption must be false and $S$'s subproblems must be optimal.
```
^1s

```TypeScript
procedure stringDistance(start, target)
	stack <- [[start]]
	memo <- set(stack)
	nextStack <- []
	maxTime <- len(start) + len(target) + 1
	letters <- set(start + target)
	for distance in 0...maxTime
		for s in stack
			if s[1] == target
				return [distance, s]
			for character in 1...len(s[1]) + 1
				newStrings = []
				// Deletions
				newStrings.append(
					s[1][1...character - 1] +
					s[1][character + 1...-1]
				)
				for letter in letters
					// Replacements
					newStrings.append(
						s[1][1...character - 1] +
						[letter] +
						s[1][character + 1...-1]
					)
					// Insertions
					newStrings.append(
						s[1][1...character - 1] +
						[letter] +
						s[1][character...-1]
					)
				nextStack <- nextStack +
					(newStrings not in memo)
				memo <- memo + newString
			stack <- [
				[item] + s[1]
				for item
				in nextStack
			]
			nextStack <- []
	return false
```

```col-md

```