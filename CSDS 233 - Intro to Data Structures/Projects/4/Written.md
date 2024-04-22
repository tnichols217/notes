# 1

Given an array of unordered integers A and a target difference D, design an algorithm with O(n) runtime complexity to find the first pair of integers within A such that their difference equals 𝐷. The order in which the integers appear in the pair should match their order in the array (i.e., if the pair is ($a_i$, $a_j$), then 𝑖 < 𝑗). Your algorithm should utilize a hash table of size n the size of the array, for efficient computation. Note: The algorithm only needs to return the first pair that meets the criteria.

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^1|tables]]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^1a|tables]]

# 2

Given input: 4371, 1323, 6173, 4199, 4344, 9679, 1989 and hash function h(x)=x (mod 10), show the result of inserting these keys into a hash table (of size 10) with:

## a

Separate chaining

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2a|tables]]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2aa|tables]]

## b

Open addressing with linear probing

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2b|tables]]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2ba|tables]]

## c

Open addressing with quadratic probing

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2c|tables]]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2ca|tables]]

## d

Open addressing with double hashing and the secondary hash function h2(x) = 7 - (x mod 7)

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2d|tables]]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^2da|tables]]

# 3

Let an array arr = [9, 8, 8, 5, 7, 7, 4, 4, 4, 2]. Sort arr from the smallest to largest value using:

## a

Selection sort

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^3a|tables]]

## b

Insertion sort

> [!answer]
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^3b|tables]]

## c

Quicksort, by partitioning around the last element

> [!answer]
> Where `-` are subinvocations and `->` are returns
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^3c|tables]]

## d

Mergesort

> [!answer]
> Where `|-` are subinvocations and `|->` are returns
> ![[CSDS 233 - Intro to Data Structures/Projects/4/Written/tables#^3d|tables]]
