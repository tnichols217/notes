# Assignment 2: Asymptotic Notation and Divide and Conquer
CSDS 310: Algorithms

## 2

Considering functions $f(n) \ge 0, g(n) \ge 0, c > 0$, indicate whether each of the following statements is true. Prove the statements that are true by providing a formal argument that is based on the definition of asymptotic notation. For statements that are false, provide a counter-example to prove that they are false.  

### a

$f(n) \ge 1\to f(n)+c \in O(f(n))$

> [!answer]
> True
> 
> If $f(n)\ge1\implies f(n)\ge0\implies f(n)\in\Omega(1)$
> $\implies 1\in O(f(n))$
> $\implies \exists c_1: 0\le 1\le c_1f(n)$
> As $c>0$
> $\implies \exists c_1: 0\le c\le cc_1f(n)$
> 
> Trivially, $f(n)\in O(f(n))$
> $\iff \exists c_2: 0\le f(n)\le c_2f(n)$
> 
> $\implies 0\le f(n)+c\le (cc_1+c_2)f(n)$
> 
> $cc_1+c_2$ is constant
> 
> $\therefore f(n)+c\in O(f(n))$
> $\square$

## 3

### c

$T(n) = T(\lambda n) + n^{\lambda}$

> [!answer]
> $c_{crit}=\log_{\frac{1}{\lambda}}1=0$
> $c=\lambda$
> $c>c_{crit}$
> 
> $\exists k:af\left( \frac{n}{b} \right)\le kf(n)$
> $f(\lambda n)\le kf(n)$
> $(\lambda n)^{\lambda}\le kn^\lambda$
> $\lambda^{\lambda}\le k$
> $0<\lambda<1\implies 0<\lambda^{\lambda}=k<1$
> 
> Case 3
> $T(n)=\theta(n^{\lambda})$

## 4

You are given an array of $k$ sorted arrays each of which has a length $n/k$ elements. Describe an efficient algorithm to merge these arrays to obtain one sorted array of length $n$.

> [!answer]
> ![[CSDS 310 - Algorithms/HW/2/tables#^4|tables]]
> 
> ### Initialization
> 
> First we initialize our $k$ sized array the minimums of each subarray, which will be the first elements.
> 
> We sort this array in order to find the global minimum
> 
> ### Loop Invariant
> 
> The loop invariant is that the `minimums` array is a sorted array that contains the minimum unused value from each subarray, thus guaranteeing that the current unused minimum is first in this array.
> 
> ### Maintenance
> 
> First, we remove the minimum of the `minimums` array, this is guaranteed to be the smallest unused value from the entire array as the `minimums` array contains the smallest of each subarray. We append this value into the output array.
> 
> Now that we are missing the minimum from the subarray we just moved to the output array, we add the minimum unused value from that subarray back to the `minimums` array, using binary insertion to maintain the sorted status of the `minimums` array.
> 
> ### Termination
> 
> The loop will only run $n$ times as this is a for loop. We are guaranteed to go through all values of the original array as once a subarray has been fully depleted, the other arrays will still be in the `minimums` array, and thus will be depleting.
> 
> Is is impossible to overdeplete a subarray due to the index check, and if we remove one value from the pool of valid values each iteration, all values will be used by the end of $n$ iterations.
> 
> ### Time Complexity
> 
> The most intensive operations within the algorithm are the initial sorting of the $k$ sized array, which is of complexity $\theta(k\log k)$
> 
> The loop, which runs $n$ times, has its most intensive operation as the binary insertion, with time complexity of $\theta(\log k)$, which runs all except for $k$ loops. Therefore the entire loop will be of complexity $\theta((n-k)\log k+n)$
> 
> When we add the complexities of the entire algorithm together, we are left with $\theta(n\log k)$
