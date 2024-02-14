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
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
