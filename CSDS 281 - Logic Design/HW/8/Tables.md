```mermaid
flowchart LR
subgraph X
01x[0] --->|a=0| 01x
01x --->|a=1| 02x[0]
02x --->|a=0| 02x
02x --->|a=1| 1x[1]
1x ---> 1x
end
X ~~~ Y
subgraph Y
01y[0] --->|a=0| 01y
01y --->|a=1| 02y[0]
02y --->|a=0| 02y
02y --->|a=1| 1y[1]
1y ---> 1y
end
```
