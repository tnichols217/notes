
```mermaid
flowchart LR

d --- notQ8



b --- notb
a & notb --- andab'

a --- nota
nota & c --- anda'c

c --- notc
nota & b & notc --- anda'bc'

andab' & anda'c & anda'bc' --- or1

or1 --- F
```

| $A$ | $B$ | $C$ | $D$ | $Z$ |
| --- | --- | --- | --- | --- |
|     |     |     |     |     |

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
