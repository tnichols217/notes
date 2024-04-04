
```mermaid
flowchart LR
subgraph X
beginx[begin] ---> 01x
01x[0] --->|A=0| 01x
01x --->|A=1| 02x[0]
02x --->|A=0| 02x
02x --->|A=1| 03x[0]
03x --->|A=0| 03x
03x --->|A=1| 1x[1]
1x ---> 1x
end
X ~~~ Y
subgraph Y
beginy[begin] ---> 01y
01y[0] --->|A=0| 01y
01y --->|A=1| 02y[0]
02y --->|A=0| 01y
02y --->|A=1| 1y[1]
1y ---> 1y
end
```
^1


```mermaid
flowchart LR
subgraph Q1
beginq1[begin] ---> 0q1[0]
0q1 ---> 1q1[1]
1q1 --->|Q2=1| 1q1 
1q1 --->|Q2=0| 0q1
end
subgraph Q2
beginq2[begin] ---> 0q2[0]
0q2 --->|X=0| 1q2[1]
0q2 --->|X=1| 0q2
1q2 ---> 0q2
end
subgraph Z
beginz[begin] ---> 1z[1]
1z --->|Q1=1 && Q2=0| 0z[0]
0z --->|Q1=1 && Q2=0| 0z
0z --->|"Q1=0 || Q2=1"| 1z
end
Q2 ~~~ Q1 ~~~ Z
```
^2a

| Q1  | Q2  | X   | D1  | D2  | Z   |
| --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 1   | 1   | 1   |
| 0   | 0   | 1   | 1   | 0   | 1   |
| 0   | 1   | 0   | 1   | 0   | 1   |
| 0   | 1   | 1   | 1   | 0   | 1   |
| 1   | 0   | 0   | 0   | 1   | 0   |
| 1   | 0   | 1   | 0   | 0   | 0   |
| 1   | 1   | 0   | 1   | 0   | 1   |
| 1   | 1   | 1   | 1   | 0   | 1   |
^2b

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
X
end
subgraph invis-logic
subgraph D1
subgraph invis-D1-inputs
D1[D]
end
subgraph invis-D1-outputs
Q1[Q]
Q1P[Q']
end
invis-D1-inputs ~~~ invis-D1-outputs
end
subgraph D2
subgraph invis-D2-inputs
D2[D]
end
subgraph invis-D2-outputs
Q2[Q]
Q2P[Q']
end
invis-D2-inputs ~~~ invis-D2-outputs
end
end
subgraph invis-outputs
Z
end
```