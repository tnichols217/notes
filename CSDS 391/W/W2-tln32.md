---
date created: 2023-09-27 15:03
date updated: 2023-09-27 16:08
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
      1. f = 151 + 99 = 250
      2. g = 273
      3. h = 523
   2. Arad
      1. f = 140 + 99 = 239
      2. g = 202
      3. h = 441
   3. Rimnicu Village
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
   1. 321: Rimnicu Village
   2. 441: Arad
   3. 485: Bucharest
   4. 523: Oradea

## Rimnicu Village

Cost: 179

1. Rimnieu Village ≠ Drobeta
2. Neighbors
   1. Sibiu
      1. In visited list
   2. Craiova
      1. f = 146 + 179 = 325
      2. g = 96
      3. h = 421
   3. Pitesti
      1. f = 97 + 179 = 276
      2. g = 177
      3. h = 453
3. Visited List
   1. Fagaras
   2. Sibiu
   3. Bucharest
   4. Oradea
   5. Arad
   6. Rimnicu Village
   7. Fagaras
   8. Craiova
   9. Pitesti
4. Current Priority Queue
   1. 421: Craiova
   2. 441: Arad
   3. 453: Pitesti
   4. 485: Bucharest
   5. 523: Oradea

## Craiova

Cost: 325

1. Craiova ≠ Drobeta
2. Neighbors
	1. Drobeta
		1. f = 120 + 325 = 445
		2. g = 0
		3. h = 445
	2. Rimnicu Village
		1. In visited list
	3. Pitesti
		1. In visited list
3. Visited List
   1. Fagaras
   2. Sibiu
   3. Bucharest
   4. Oradea
   5. Arad
   6. Rimnicu Village
   7. Fagaras
   8. Craiova
   9. Pitesti
   10. Drobeta
4. Current Priority Queue
   1. 441: Arad
   2. 445: Drobeta
   3. 453: Pitesti
   4. 485: Bucharest
   5. 523: Oradea

## Arad

Cost: 239

1. Arad ≠ Drobeta
2. Neighbors
	1. Zerind
		1. f = 75 + 239 = 314
		2. g = 239
		3. h = 553
	2. Timisoara
		1. f = 118 + 239 = 357
		2. g = 164
		3. h = 521
	3. Sibiu
		1. In visited list
3. Visited List
   1. Fagaras
   2. Sibiu
   3. Bucharest
   4. Oradea
   5. Arad
   6. Rimnicu Village
   7. Fagaras
   8. Craiova
   9. Pitesti
   10. Drobeta
   11. Zerind
   12. Timisoara
4. Current Priority Queue
   1. 445: Drobeta
   2. 453: Pitesti
   3. 485: Bucharest
   4. 521: Timisoara
   5. 523: Oradea
   6. 553: Zerind

## Drobet

Cost: 445

1. Drobet = Drobet
2. Path:
	1. Drobet
	2. Craiova
	3. Rimnicu Village
	4. Sibiu
	5. Fagaras

# 3

## a

Depth first search, it only knows about the current state and does not keep any competitors in memory

## b

A-star search, the way nodes are picked are the same, and without pruning the choices, its just A-star

## c

Gradient Descent, without any temperature, there are no random movements, so it just uses gradient descent

## d

Random walk, it just randomly looks at a value and hopes its better

# 4

A-star uses huge amounts of memory compared to simulated annealing. A-star is not feasible for large data sets, whilst simulated annealing performs very well. Simulated annealing does not always provide the best solution, but it is pretty fast at producing a well optimized solution quickly, A-star takes much longer to find a solution. 

# 5

Similar to simulated annealing, have a temperature value that slowly decreases over time or iterations. Implement a similar technique to random walk to improve the exploration of gradient ascent, where larger temperatures are more explorative and more likely to select unfavorable trades, while lower temperatures are safer and only take favorable trades. Once the temperature reaches 0, simply default back to gradient ascent to find that area's local maxima. The gradient could be considered a heuristic as it would give a rough estimate as to how close to the top of a local maxima is assuming the maxima are rounded at their peaks. I do not see much use for implementing the gradient as a heuristic for simulated annealing though.

# 6

## a

In minimax, MAX always assumes that MIN will play optimally, so the algorithm does not account for MIN's play-style or deficiencies. So whether MAX plays an optimal MIN or a subobtimal MIN, it will still see every game tree the same regardless.

## b

Say MAX and MIN are playing rock-paper-scissors. Presuppose we know that MIN likes to play scissors abnormally more than the other actions.

A regular MAX would not care about which action he chooses as they all have theoretically the same chance of winning, but using the information that MIN likes to play scissors, we would bias our choice to rock in order to beat MIN more.

# 7

Because we know that that variable must have a solution within the set. It it does not, then the whole set is unsolvable. If we select the variable with the smallest state space or greatest constraints, then we eliminate many possibilities without a chance of removing the solution combination. When selecting values, selecting a value that reduces the space the most will most likely lead to no solution first, as when we select values we are not guaranteed to still have the solution within our search set, thus we are more likely to hit the solution with fewer backtracks if we pick a non-limiting value.

# 8

## a

I would likely choose a local search for CSPs, as they are fast and efficient at solving to find a solution to a problem. The constraints would be that words must fill the length of the cavity, and one box can only contain a single letter. A heuristic would be the number of letter collisions and the number of empty spaces. Local search should aim to minimize this heuristic.

## b

I would choose to have the variables be words as they significantly reduce the state space.