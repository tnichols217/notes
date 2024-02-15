
```mermaid
flowchart LR

d --- notQ8

c --- notC

notQ8 & notC --- andQ6

a --- notA

notQ8 & notA --- andQ2

d & andQ2 --- andQ7

c & andQ7 --- andQ5

a & andQ5 --- andQ1

b & andQ1 --- andQ3

b --- notB

notQ8 & notB --- andQ4

andQ6 & andQ2 & andQ4 & andQ3 --- orZ

orZ --- Z

```
^1

| $A$ | $B$ | $C$ | $D$ | $Z$ |
| ---- | ---- | ---- | ---- | ---- |
| F | F |  |  |  |
| F | F |  |  |  |
| F | T |  |  |  |
| F | T |  |  |  |
| F | F |  |  |  |
| F | F |  |  |  |
| F | T |  |  |  |
| F | T |  |  |  |
| T |  |  |  |  |
| T |  |  |  |  |
| T |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

| $a$ | $b$ | $c$ | $F$ |
| --- | --- | --- | --- |
| F   | F   | F   | F    |
| F    | F    | T    | T    |
| F    | T    | F    | T    |
| F    | T    | T    | T    |
| T    | F    | F    | T    |
| T    | F    | T    | T    |
| T    | T    | F    | F    |
| T    | T    | T    | F    |

^3

```mermaid
flowchart LR

b --- notb
a & notb --- andab'

a --- nota
nota & c --- anda'c

c --- notc
nota & b & notc --- anda'bc'

andab' & anda'c & anda'bc' --- or1

or1 --- F
```

^3b

| $w$ | $x$ | $y$ | $F$ |
| ---- | ---- | ---- | ---- |
| F | F | F | F |
| F | F | T | T |
| F | T | F | F |
| F | T | T | T |
| T | F | F | F |
| T | F | T | F |
| T | T | F | T |
| T | T | T | F |
^4
