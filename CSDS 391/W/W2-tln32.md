---
date created: 2023-09-27 15:03
date updated: 2023-09-27 15:39
---

# 1

Yes, uniform cost search could be a special case of A-star search. A-star search is a modified breadth first search that picks the next node to explore based on its cost from the beginning and its expected cost to the goal based on a heuristic. A-star simply adds these two costs together to choose the most optimal node to explore. Uniform cost search is also a modified breadth first search which only picks the best node on its cost from the initial state. Where this differs from A-star is its lack for accounting for the estimated cost to the end. This means that if we used A-star with a heuristic that estimates its cost to goal as 0 every time, the sum of the initial cost and estimated cost will equal the initial cost only, just like uniform cost search.

# 2

## Fagaras

Cost: 0

1. Fagaras ≠ Drobeta
2. Neighbors
   1. Sibiu
      1. f = 99
      2. g = 173
      3. h = 272
   2. Bucharest
      1. f = 211
      2. g = 274
      3. h = 485
3. Visited List
   1. Fagaras
   2. Sibiu
   3. Bucharest
4. Current Priority Queue
   1. 272: Sibiu
   2. 485: Bucharest

## Sibiu

Cost: 99

1. Sibiu ≠ Drobeta
2. Neighbors
	1. Oradea
		1. f = 151 + 99
4. Current Priority Queue
   1. 272: Sibiu
   2. 485: Bucharest = 250
		2. g = 273
		3. h = 523
	2. Arad
		1. f = 140 + 99 = 239
		2. g = 202
		3. h = 441
	3. Rimnieu Village
		1. f = 80 + 99 = 179
		2. g = 145
		3. h = 324
	4. Fagaras
		1. In visited list
3. Visited List
	1. Fagaras
	2. Sibiu
	3. Bucharest
	4. Oradea
	5. Arad
	6. Rimnieu Village
	7. Fagaras
4. Current Priority Queue
	1. 485: Bucharest
	2. 