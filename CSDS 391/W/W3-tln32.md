---
date created: 2023-10-11 12:01
---

# 1

No, solving each game after the random dice rolls using alpha-beta pruning will take significant time, and doing it 50 times per possible move is a lot of processing. What would be recommended instead is to use a playout policy after the random moves to generate feasible endgames after the 50 random moves (much like Monte Carlo Tree Search) or use a heuristic to judge the gamestate.

# 2

## Constraints

- $\text{Alldiff}(F, T, U, W, R, O)$
- $F,T,U,W,R,O\in[0,1,2,3,4,5,6,7,8,9]$
- $C_1,C_2,C_3\in[0,1]$
- $2O\mod10=R$
- $C_1=2O//10$
- $(2W+C_1)\mod10=U$
- $C_2=(2W+C_1)//10$
- $(2T+C_2)\mod10=O$
- $C_3=(2T+C_2)//10$
- $F=C_3$

## Breaking Down Constraints into Binary Constraints

- $F,T,U,W,R,O\in[0,1,2,3,4,5,6,7,8,9]$
- $C_1,C_2,C_3\in[0,1]$
- None of $F,T,U,W,R,O$ equal each other
- $2O\mod10=R$
- $C_1=2O//10$
- $2W\mod10\in[U,U-1]$
- $U\mod2=C_1$
- $C_2=2W//10$
- $2T\mod10\in[O,O-1]$
- $O\mod2=C_2$
- $C_3=2T//10$
- $F=C_3$

## Solving

We pick the first variable as $O$ as it has 4 constraints related to it following the MRV heuristic.

### 1 $O$

#### Possible Values

| Variable | Values                | Remaining Restraints |
| -------- | --------------------- | -------------------- |
| $F$      | [1]                   | 1                    |
| $T$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $U$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | [0,1,2,3,4,5,6,7,8,9] | 1                    |
| $O$      | [0,1,2,3,4,5,6,7,8,9] | 4                    |
| $C_1$    | [0,1]                 | 2                    |
| $C_2$    | [0,1]                 | 2                    |
| $C_3$    | [0,1]                 | 2                    | 

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [5]                 | 1                    |
| $U$      | [1,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [1,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | []                  | 0                    |
| $O$      | 0                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Variable Selection

Fails, backtracks to previous conflicting assignment.

### 2 $O$

#### Possible Values

| Variable | Values                | Remaining Restraints |
| -------- | --------------------- | -------------------- |
| $F$      | [1]                   | 1                    |
| $T$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $U$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | [0,1,2,3,4,5,6,7,8,9] | 1                    |
| $O$      | [0,1,2,3,4,5,6,7,8,9] | 4                    |
| $C_1$    | [0,1]                 | 2                    |
| $C_2$    | [0,1]                 | 2                    |
| $C_3$    | [0,1]                 | 2                    | 

#### Value Selection

$1$ is selected.

#### Forward Checking

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | []                  | 1                    |
| $T$      | [0,5]               | 1                    |
| $U$      | [0,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | [2]                 | 0                    |
| $O$      | 1                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [1]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Variable Selection

Fails, backtracks to previous conflicting assignment.

### 3 $O$

#### Possible Values

| Variable | Values                | Remaining Restraints |
| -------- | --------------------- | -------------------- |
| $F$      | [1]                   | 1                    |
| $T$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $U$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | [0,1,2,3,4,5,6,7,8,9] | 1                    |
| $O$      | [0,1,2,3,4,5,6,7,8,9] | 4                    |
| $C_1$    | [0,1]                 | 2                    |
| $C_2$    | [0,1]                 | 2                    |
| $C_3$    | [0,1]                 | 2                    | 

#### Value Selection

$2$ is selected.

#### Forward Checking

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [1,6]               | 1                    |
| $U$      | [0,1,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,3,4,5,6,7,8,9] | 2                    |
| $R$      | [4]                 | 0                    |
| $O$      | 2                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Variable Selection

$R$ is chosen as it has the least remaining restraints

### 3-1 $R$

#### Possible Values

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [1,6]               | 1                    |
| $U$      | [0,1,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,3,4,5,6,7,8,9] | 2                    |
| $R$      | [4]                 | 0                    |
| $O$      | 2                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Value Selection

$4$ is selected.

#### Forward Checking

| Variable | Values            | Remaining Restraints |
| -------- | ----------------- | -------------------- |
| $F$      | [1]               | 1                    |
| $T$      | [1,6]             | 1                    |
| $U$      | [0,1,3,5,6,7,8,9] | 2                    |
| $W$      | [0,1,3,5,6,7,8,9] | 2                    |
| $R$      | 4                 | 0                    |
| $O$      | 2                 | 0                    |
| $C_1$    | [0]               | 1                    |
| $C_2$    | [0]               | 1                    |
| $C_3$    | [0,1]             | 2                    |

#### Variable Selection

$F$ is chosen as it has the least remaining restraints

### 3-1-1 $F$

#### Possible Values

| Variable | Values            | Remaining Restraints |
| -------- | ----------------- | -------------------- |
| $F$      | [1]               | 1                    |
| $T$      | [1,6]             | 1                    |
| $U$      | [0,1,3,5,6,7,8,9] | 2                    |
| $W$      | [0,1,3,5,6,7,8,9] | 2                    |
| $R$      | 4                 | 0                    |
| $O$      | 2                 | 0                    |
| $C_1$    | [0]               | 1                    |
| $C_2$    | [0]               | 1                    |
| $C_3$    | [0,1]             | 2                    |

#### Value Selection

$1$ is selected.

#### Forward Checking

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [1,6]           | 1                    |
| $U$      | [0,3,5,6,7,8,9] | 2                    |
| $W$      | [0,3,5,6,7,8,9] | 2                    |
| $R$      | 4               | 0                    |
| $O$      | 2               | 0                    |
| $C_1$    | [0]             | 1                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Variable Selection

$C_1$ is chosen as it has the least remaining restraints

### 3-1-1-1 $C_1$

#### Possible Values

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [1,6]           | 1                    |
| $U$      | [0,3,5,6,7,8,9] | 2                    |
| $W$      | [0,3,5,6,7,8,9] | 2                    |
| $R$      | 4               | 0                    |
| $O$      | 2               | 0                    |
| $C_1$    | [0]             | 1                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [1,6]           | 1                    |
| $U$      | [6,8]           | 1                    |
| $W$      | [0,3,5,6,7,8,9] | 2                    |
| $R$      | 4               | 0                    |
| $O$      | 2               | 0                    |
| $C_1$    | 0               | 0                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Variable Selection

$C_2$ is chosen as it has the least remaining restraints

### 3-1-1-1-1 $C_2$

#### Possible Values

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [1,6]           | 1                    |
| $U$      | [6,8]           | 1                    |
| $W$      | [0,3,5,6,7,8,9] | 2                    |
| $R$      | 4               | 0                    |
| $O$      | 2               | 0                    |
| $C_1$    | 0               | 0                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | [1,6]  | 1                    |
| $U$      | [6,8]  | 1                    |
| $W$      | [0,3]  | 1                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | [1]    | 1                    |

#### Variable Selection

$C_3$ is chosen as it has the least remaining restraints

### 3-1-1-1-1-1 $C_3$

#### Possible Values

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | [1,6]  | 1                    |
| $U$      | [6,8]  | 1                    |
| $W$      | [0,3]  | 1                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | [1]    | 1                    |

#### Value Selection

$1$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | [6]    | 0                    |
| $U$      | [6,8]  | 1                    |
| $W$      | [0,3]  | 1                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Variable Selection

$T$ is chosen as it has the least remaining restraints

### 3-1-1-1-1-1-1 $T$

#### Possible Values

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | [6]    | 0                    |
| $U$      | [6,8]  | 1                    |
| $W$      | [0,3]  | 1                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Value Selection

$1$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 6      | 0                    |
| $U$      | [8]    | 1                    |
| $W$      | [0,3]  | 1                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Variable Selection

$U$ is chosen as it has the least remaining restraints

### 3-1-1-1-1-1-1-1 $U$

#### Possible Values

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 6      | 0                    |
| $U$      | [8]    | 1                    |
| $W$      | [0,3]  | 1                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Value Selection

$8$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 6      | 0                    |
| $U$      | 8      | 0                    |
| $W$      | []    | 0                    |
| $R$      | 4      | 0                    |
| $O$      | 2      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Variable Selection

Fails, backtracks to previous conflicting assignment.

### 4 $O$

#### Possible Values

| Variable | Values                | Remaining Restraints |
| -------- | --------------------- | -------------------- |
| $F$      | [1]                   | 1                    |
| $T$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $U$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | [0,1,2,3,4,5,6,7,8,9] | 1                    |
| $O$      | [0,1,2,3,4,5,6,7,8,9] | 4                    |
| $C_1$    | [0,1]                 | 2                    |
| $C_2$    | [0,1]                 | 2                    |
| $C_3$    | [0,1]                 | 2                    | 

#### Value Selection

$3$ is selected.

#### Forward Checking

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [1,6]               | 1                    |
| $U$      | [0,1,2,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,4,5,6,7,8,9] | 2                    |
| $R$      | [6]                 | 0                    |
| $O$      | 3                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [1]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Variable Selection

$R$ is chosen as it has the least remaining restraints

### 4-1 $R$

#### Possible Values

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [1,6]               | 1                    |
| $U$      | [0,1,2,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,4,5,6,7,8,9] | 2                    |
| $R$      | [6]                 | 0                    |
| $O$      | 3                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [1]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Value Selection

$6$ is selected.

#### Forward Checking

| Variable | Values            | Remaining Restraints |
| -------- | ----------------- | -------------------- |
| $F$      | [1]               | 1                    |
| $T$      | [1,6]             | 1                    |
| $U$      | [0,1,2,4,5,7,8,9] | 2                    |
| $W$      | [0,1,2,4,5,7,8,9] | 2                    |
| $R$      | 6                 | 0                    |
| $O$      | 3                 | 0                    |
| $C_1$    | [0]               | 1                    |
| $C_2$    | [1]               | 1                    |
| $C_3$    | [0,1]             | 2                    |

#### Variable Selection

$F$ is chosen as it has the least remaining restraints

### 4-1-1 $F$

#### Possible Values

| Variable | Values            | Remaining Restraints |
| -------- | ----------------- | -------------------- |
| $F$      | [1]               | 1                    |
| $T$      | [1]               | 1                    |
| $U$      | [0,1,2,4,5,7,8,9] | 2                    |
| $W$      | [0,1,2,4,5,7,8,9] | 2                    |
| $R$      | 6                 | 0                    |
| $O$      | 3                 | 0                    |
| $C_1$    | [0]               | 1                    |
| $C_2$    | [1]               | 1                    |
| $C_3$    | [0,1]             | 2                    |

#### Value Selection

$1$ is selected.

#### Forward Checking

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | []              | 1                    |
| $U$      | [0,2,4,5,7,8,9] | 2                    |
| $W$      | [0,2,4,5,7,8,9] | 2                    |
| $R$      | 6               | 0                    |
| $O$      | 3               | 0                    |
| $C_1$    | [0]             | 1                    |
| $C_2$    | [1]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Variable Selection

Fails, backtracks to previous conflicting assignment.

### 5 $O$

#### Possible Values

| Variable | Values                | Remaining Restraints |
| -------- | --------------------- | -------------------- |
| $F$      | [1]                   | 1                    |
| $T$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $U$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,4,5,6,7,8,9] | 2                    |
| $R$      | [0,1,2,3,4,5,6,7,8,9] | 1                    |
| $O$      | [0,1,2,3,4,5,6,7,8,9] | 4                    |
| $C_1$    | [0,1]                 | 2                    |
| $C_2$    | [0,1]                 | 2                    |
| $C_3$    | [0,1]                 | 2                    | 

#### Value Selection

$4$ is selected.

#### Forward Checking

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [2,7]               | 1                    |
| $U$      | [0,1,2,3,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,5,6,7,8,9] | 2                    |
| $R$      | [8]                 | 0                    |
| $O$      | 4                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Variable Selection

$R$ is chosen as it has the least remaining restraints

### 5-1 $R$

#### Possible Values

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [2,7]               | 1                    |
| $U$      | [0,1,2,3,5,6,7,8,9] | 2                    |
| $W$      | [0,1,2,3,5,6,7,8,9] | 2                    |
| $R$      | [8]                 | 0                    |
| $O$      | 4                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Value Selection

$8$ is selected.

#### Forward Checking

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [2,7]               | 1                    |
| $U$      | [0,1,2,3,5,6,7,9] | 2                    |
| $W$      | [0,1,2,3,5,6,7,9] | 2                    |
| $R$      | 8                   | 0                    |
| $O$      | 4                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Variable Selection

$F$ is chosen as it has the least remaining restraints

### 5-1-1 $F$

#### Possible Values

| Variable | Values              | Remaining Restraints |
| -------- | ------------------- | -------------------- |
| $F$      | [1]                 | 1                    |
| $T$      | [2,7]               | 1                    |
| $U$      | [0,1,2,3,5,6,7,9] | 2                    |
| $W$      | [0,1,2,3,5,6,7,9] | 2                    |
| $R$      | 8                   | 0                    |
| $O$      | 4                   | 0                    |
| $C_1$    | [0]                 | 1                    |
| $C_2$    | [0]                 | 1                    |
| $C_3$    | [0,1]               | 2                    |

#### Value Selection

$1$ is selected.

#### Forward Checking

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [2,7]           | 1                    |
| $U$      | [0,2,3,5,6,7,9] | 2                    |
| $W$      | [0,2,3,5,6,7,9] | 2                    |
| $R$      | 8               | 0                    |
| $O$      | 4               | 0                    |
| $C_1$    | [0]             | 1                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Variable Selection

$C_1$ is chosen as it has the least remaining restraints

### 5-1-1-1 $C_1$

#### Possible Values

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [2,7]           | 1                    |
| $U$      | [0,2,3,5,6,7,9] | 2                    |
| $W$      | [0,2,3,5,6,7,9] | 2                    |
| $R$      | 8               | 0                    |
| $O$      | 4               | 0                    |
| $C_1$    | [0]             | 1                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    |

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [2,7]           | 1                    |
| $U$      | [0,2,6]         | 1                    |
| $W$      | [0,2,3,5,6,7,9] | 2                    |
| $R$      | 8               | 0                    |
| $O$      | 4               | 0                    |
| $C_1$    | 0               | 0                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    | 

#### Variable Selection

$C_2$ is chosen as it has the least remaining restraints

### 5-1-1-1-1 $C_2$

#### Possible Values

| Variable | Values          | Remaining Restraints |
| -------- | --------------- | -------------------- |
| $F$      | 1               | 0                    |
| $T$      | [2,7]           | 1                    |
| $U$      | [0,2,6]         | 1                    |
| $W$      | [0,2,3,5,6,7,9] | 2                    |
| $R$      | 8               | 0                    |
| $O$      | 4               | 0                    |
| $C_1$    | 0               | 0                    |
| $C_2$    | [0]             | 1                    |
| $C_3$    | [1]             | 1                    | 

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | [2,7]   | 1                    |
| $U$      | [0,2,6] | 1                    |
| $W$      | [0,2,3] | 1                    | 
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | [1]     | 1                    |

#### Variable Selection

$C_3$ is chosen as it has the least remaining restraints

### 5-1-1-1-1-1 $C_3$

#### Possible Values

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | [2,7]   | 1                    |
| $U$      | [0,2,6] | 1                    |
| $W$      | [0,2,3] | 1                    | 
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | [1]     | 1                    |

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | [7]     | 0                    |
| $U$      | [0,2,6] | 1                    |
| $W$      | [0,2,3] | 1                    |
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | 1       | 0                    |

#### Variable Selection

$T$ is chosen as it has the least remaining restraints

### 5-1-1-1-1-1 $T$

#### Possible Values

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | [7]     | 0                    |
| $U$      | [0,2,6] | 1                    |
| $W$      | [0,2,3] | 1                    |
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | 1       | 0                    |

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | 7       | 0                    |
| $U$      | [0,2,6] | 1                    |
| $W$      | [0,2,3] | 1                    |
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | 1       | 0                    |

#### Variable Selection

$U$ is chosen as it has the least remaining restraints

### 5-1-1-1-1-1-1 $U$

#### Possible Values

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | 7       | 0                    |
| $U$      | [0,2,6] | 1                    |
| $W$      | [0,2,3] | 1                    |
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | 1       | 0                    |

#### Value Selection

$0$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 7      | 0                    |
| $U$      | 0      | 0                    |
| $W$      | []     | 0                    |
| $R$      | 8      | 0                    |
| $O$      | 4      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Variable Selection

Fails, backtracks to previous conflicting assignment.

### 5-1-1-1-1-1-2 $U$

#### Possible Values

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | 7       | 0                    |
| $U$      | [2,6]   | 1                    |
| $W$      | [0,2,3] | 1                    |
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | 1       | 0                    |

#### Value Selection

$2$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 7      | 0                    |
| $U$      | 2      | 0                    |
| $W$      | []     | 0                    | 
| $R$      | 8      | 0                    |
| $O$      | 4      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Variable Selection

Fails, backtracks to previous conflicting assignment.

### 5-1-1-1-1-1-3 $U$

#### Possible Values

| Variable | Values  | Remaining Restraints |
| -------- | ------- | -------------------- |
| $F$      | 1       | 0                    |
| $T$      | 7       | 0                    |
| $U$      | [6]     | 1                    |
| $W$      | [0,2,3] | 1                    |
| $R$      | 8       | 0                    |
| $O$      | 4       | 0                    |
| $C_1$    | 0       | 0                    |
| $C_2$    | 0       | 0                    |
| $C_3$    | 1       | 0                    |

#### Value Selection

$2$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 7      | 0                    |
| $U$      | 6      | 0                    |
| $W$      | [3]    | 0                    |
| $R$      | 8      | 0                    |
| $O$      | 4      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Variable Selection

$T$ is chosen as it has the least remaining restraints

### 5-1-1-1-1-1-3-1 $T$

#### Possible Values

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 7      | 0                    |
| $U$      | 6      | 0                    |
| $W$      | [3]    | 0                    |
| $R$      | 8      | 0                    |
| $O$      | 4      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

#### Value Selection

$2$ is selected.

#### Forward Checking

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 7      | 0                    |
| $U$      | 6      | 0                    |
| $W$      | 3      | 0                    |
| $R$      | 8      | 0                    |
| $O$      | 4      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |

## Solution

| Variable | Values | Remaining Restraints |
| -------- | ------ | -------------------- |
| $F$      | 1      | 0                    |
| $T$      | 7      | 0                    |
| $U$      | 6      | 0                    |
| $W$      | 3      | 0                    |
| $R$      | 8      | 0                    |
| $O$      | 4      | 0                    |
| $C_1$    | 0      | 0                    |
| $C_2$    | 0      | 0                    |
| $C_3$    | 1      | 0                    |
