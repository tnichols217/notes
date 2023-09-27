---
date created: 2023-09-27 15:03
date updated: 2023-09-27 15:08
---

# 1

Yes, uniform cost search could be a special case of A-star search. A-star search is a modified breadth first search that picks the next node to explore based on its cost from the beginning and its expected cost to the goal based on a heuristic. A-star simply adds these two costs together to choose the most optimal node to explore. Uniform cost search is also a modified breadth first search which only picks the best node on its cost from the initial state. Where this differs from A-star is its lack for accounting for the estimated cost to the end. This means that if we used A-star with a heuristic that estimates its cost to goal as 0 every time, the sum of the initial cost and estimated cost will equal the initial cost only, just like uniform cost search.

# 2
