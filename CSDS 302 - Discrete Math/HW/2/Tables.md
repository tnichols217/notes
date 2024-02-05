# 15

| $p$ | $q$ | $r$ | $p\land(\lnot q\lor r)$ |
| --- | --- | --- | ----------------------- |
| F   | F   | F   | F                       |
| F   | F   | T   | F                       |
| F   | T   | F   | F                       |
| F   | T   | T   | F                       |
| T   | F   | F   | T                       |
| T   | F   | T   | T                       |
| T   | T   | F   | F                       |
| T    | T    | T    | T                        |

^15

# 19

| $p$ | $p$ | $p\land\mathbf t$ |
| --- | --- | ----------------- |
| F   | F   | F                 |
| T    | T    | T                  |

^19

# 20

| $p$ | $p\land\mathbf c$ | $p\lor\mathbf c$ |
| --- | ----------------- | ---------------- |
| T   | F                 | T                |
| F    | F                  | F                 |

^20

# 22

| $p$ | $q$ | $r$ | $p\land(q\lor r)$ | $(p\land q)\lor(p\land r)$ |
| --- | --- | --- | ----------------- | -------------------------- |
| F   | F   | F   | F                 | F                          |
| F   | F   | T   | F                 | F                          |
| F   | T   | F   | F                 | F                          |
| F   | T   | T   | F                 | F                          |
| T   | F   | F   | F                 | F                          |
| T   | F   | T   | T                 | T                          |
| T   | T   | F   | T                 | T                          |
| T    | T    | T    | T                  | T                           |

^22

# 24

| $p$ | $q$ | $r$ | $(p\lor q)\lor(p\land r)$ | $(p\lor q)\land r$ |
| --- | --- | --- | ------------------------- | ------------------ |
| F   | F   | F   | F                         | F                  |
| F   | F   | T   | F                         | F                  |
| F   | T   | F   | T                         | F                  |
| F   | T   | T   | T                         | T                  |
| T   | F   | F   | T                         | F                  |
| T   | F   | T   | T                         | T                  |
| T   | T   | F   | T                         | F                  |
| T    | T    | T    | T                          | T                   |

^24

# 43

| $p$ | $q$ | $(\sim p\lor q)\lor (p\land\sim q)$ |
| ---- | ---- | ---- |
| F | F | T |
| F | T | T |
| T | F | T |
| T | T | T |

^43

# 8

| $p$ | $q$ | $r$ | $\sim p\lor q\to r$ |
| ---- | ---- | ---- | ---- |
| F | F | F | F |
| F | F | T | T |
| F | T | F | F |
| F | T | T | T |
| T | F | F | T |
| T | F | T | T |
| T | T | F | F |
| T | T | T | T |

^8

# 27

| $p$ | $q$ | $q\to p$ | $\lnot p\to\lnot q$ |
| ---- | ---- | ---- | ---- |
| F | F | T | T |
| F | T | F | F |
| T | F | T | T |
| T | T | T | T |

^27

# 30

| $p$ | $q$ | $r$ | $p\land(q\lor r)$ | $(p\land q)\lor(p\land r)$ |
| ---- | ---- | ---- | ---- | ---- |
| F | F | F | F | F |
| F | F | T | F | F |
| F | T | F | F | F |
| F | T | T | F | F |
| T | F | F | F | F |
| T | F | T | T | T |
| T | T | F | T | T |
| T | T | T | T | T |

^30

# 9

| $p$ input | $q$ Input | $r$ Input | $p\land q\to\lnot r$ Premise | $p\lor \lnot q$ Premise | $\lnot q\to p$ Premise | $\lnot r$  Conclusion |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| F | F | F | T | T | F | T |
| F | F | T | T | T | F | F |
| F | T | F | T | F | T | T |
| F | T | T | T | F | T | F |
| **T** | **F** | **F** | **T** | **T** | **T** | **T** |
| *T* | *F* | *T* | *T* | *T* | *T* | *F* |
| **T** | **T** | **F** | **T** | **T** | **T** | **T** |
| T | T | T | F | T | T | F |

^9

# 23

| $p$ Input | $q$ Input | $r$ Input | $p\lor q$ Premise | $p\to r$ Premise | $q\lor \lnot r$ Conclusion |
| ---- | ---- | ---- | ---- | ---- | ---- |
| F | F | F | F | T | T |
| F | F | T | F | T | F |
| **F** | **T** | **F** | **T** | **T** | **T** |
| **F** | **T** | **T** | **T** | **T** | **T** |
| T | F | F | T | F | T |
| **T** | **F** | **T** | **T** | **T** | **F** |
| T | T | F | T | F | T |
| **T** | **T** | **T** | **T** | **T** | **T** |

^23
