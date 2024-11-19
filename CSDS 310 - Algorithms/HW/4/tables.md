```python
procedure maxPay(A, B)
	return A.sort(), B.sort()
```
^2p

```col-md
Our greedy choice chooses the largest number in $A$, and the largest number in $B$, then continues to make choices from there.

Assume that this does not lead to an optimal solution.

Let $S$ be the optimal solution that does not use both the largest $A$ and $B$.

Let $a_{i}=\max A$, $b_{j}=\max B$
And $a_{j}$ and $b_{i}$ be their corresponding numbers.

By definition, $a_{i}$ and $b_{j}$ cannot be paired: $a_{i}>a_{j}$ or $b_{j}>b_{i}$

Let the original product of these pairs be $a_{i}^{b_{i}}a_{j}^{b_{j}}P$ Where $P$ is the product of all the other pairs

Let our new product be $a_{i}^{b_{j}}a_{j}^{b_{i}}P$

$b_{j}>b_{i}$
$b_{j}-b_{i}>0$

$a_{i}>a_{j}$
$a_{i}^{b_{j}-b_{i}}>a_{j}^{b_{j}-b_{i}}$
$a_{i}^{b_{j}-b_{i}}-a_{j}^{b_{j}-b_{i}}>0$
$a_{i}^{b_{i}}a_{j}^{b_{i}}(a_{i}^{b_{j}-b_{i}}-a_{j}^{b_{j}-b_{i}})>0$
$a_{i}^{b_{j}}a_{j}^{b_{i}}-a_{i}^{b_{i}}a_{j}^{b_{j}}>0$
$a_{i}^{b_{j}}a_{j}^{b_{i}}>a_{i}^{b_{i}}a_{j}^{b_{j}}$
$a_{i}^{b_{j}}a_{j}^{b_{i}}P>a_{i}^{b_{i}}a_{j}^{b_{j}}P$

Thus our original solution cannot be optimal.

Therefore a solution containing the pair of maximums will always be greater than a solution not containing the maximums.
```
^2r

```python
procedure minDeadline(t, d)
	return [
		x[1]
		for x
		in sorted(
			zip(
				d,
				range(len(d))
			),
			x => x[0]
		)
	]
```
^3p

```col-md
Our greedy choice is to pick to do the activity that is due the soonest first, claiming that this leads to the minimum max late activity. This leads to a selection of activities by the order of their deadline.

Assume that this ordering of activities $S$ is suboptimal.

There must be an optimal ordering that we call $S^{*}$

We can now define an order of swaps that will convert our solution $S$ into the optimal solution $S^{*}$

Let $s_{i}^{*}$ be the $i$th activity in the solution ordering $S^{*}$ and correspondingly $s_{i}$ for $S$.

Let $p_{s_{i}^{*}}$ be the position of $s_{i}^{*}$ in the set $S$.

Now we define a set of swaps $W_{i}$ that will move $s_{p_{s_{i}^{*}}}$ to the position $i$ in our solution set $S$. First, swap $p_{s_{i}^{*}}$ forward one position. Repeat until it is in the $i$ position.

We are abot to get from $S$ to $S^{*}$ by the swap order $W$ which is defined as the list of swaps $W_{1},W_{2},\dots,W_{n}$.

For any swap $j$ and $j-1$ we can guarantee that $d_{j}>d_{j-1}$ as we maintain the sorted status of the array for all items right of $i$ in the set of swaps $W_{i}$ and right of $p_{s_{i}^{*}}$ during the swapping process.

Let $T_{k}=\sum\limits_{i=1}^{k}s_{i}$, which represents the total time taken since the beginning until the completion of activity $s_{i}$.

We now define the completion times of the items $j$ and $j-1$ in the swap as $T_{j}=T_{j-2}+s_{j-1}+s_{j}$ and $T_{j-1}=T_{j-2}+s_{j-1}$. We can denote the delay of item $j$ and $j-1$ as
$\Delta_{j}=T_{j-2}+s_{j-1}+s_{j}-d_{j}$ and
$\Delta_{j-1}=T_{j-2}+s_{j-1}-d_{j-1}$.

After swapping $j$ and $j-1$, our delays will be
$\Delta_{j}^{*}=T_{j-2}+s_{j}-d_{j}$
$\Delta_{j-1}^{*}=T_{j-2}+s_{j}+s_{j-1}-d_{j-1}$

We can denote $\Delta_{j}^{*}$ and $\Delta_{j-1}^{*}$ in terms of $\Delta_{j}$ and $\Delta_{j-1}$ now.

$\Delta_{j}+d_{j}=\Delta_{j-1}^{*}+d_{j-1}$
$\Delta_{j}=\Delta_{j-1}^{*}+d_{j-1}-d_{j}$
$\Delta_{j}<\Delta_{j-1}^{*}$ since $d_{j}>d_{j-1}$

$\Delta_{j-1}=\Delta_{j-1}^{*}-s_{j}$
$\Delta_{j-1}<\Delta_{j-1}^{*}$

Thus, the delay after any swap in the swap order $W_{i}$ will lead to a less optimal solution. As such, our original solution $S$ will be more optimal than $S^{*}$ regardless of how you choose $S^*$ to be, assuming $S^{*}\ne S$.
```
^3r
