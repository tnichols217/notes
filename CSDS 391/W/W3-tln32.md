---
date created: 2023-10-11 12:01
---

# 1

No, solving each game after the random dice rolls using alpha-beta pruning will take significant time, and doing it 50 times per possible move is a lot of processing. What would be recommended instead is to use a playout policy after the random moves to generate feasible endgames after the 50 random moves (much like Monte Carlo Tree Search) or use a heuristic to judge the gamestate.

# 2


