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

b --- not1
a & not1 --- and1

a --- not2
not2 & c --- and2


```
