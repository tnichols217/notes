---
date created: 2023-10-11 12:01
---

# 1

No, solving each game after the random dice rolls using alpha-beta pruning will take significant time, and doing it 50 times per possible move is a lot of processing. What would be recommended instead is to use a playout policy after the random moves to generate feasible endgames after the 50 random moves (much like Monte Carlo Tree Search) or use a heuristic to judge the gamestate.

# 2

## Constraints

- $\text{Alldiff}(F, T, U, W, R, O)$
- $F,T,U,W,R,O\in[0,1,2,3,4,5,6,7,8,9]$
- $2O\mod10=R$
- $C_1=2O//10$
- $(2W+C_1)\mod10=U$
- $C_2=(2W+C_1)//10$
- $(2T+C_2)\mod10=O$
- $C_3=(2T+C_2)//10$
- $F=C_3$

## Solving

We pick the first variable as $O$ as it has 4 constraints related to it following the MRV heuristic.

### 1

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values                |
| -------- | --------------------- |
| F        | [0,1,2,3,4,5,6,7,8,9] |
| T        | [0,1,2,3,4,5,6,7,8,9] |
| U        | [0,1,2,3,4,5,6,7,8,9] |
| W        | [0,1,2,3,4,5,6,7,8,9] |
| R        | []                    |
| O        | 0                     |

