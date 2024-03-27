
| C\AB | 00  | 01  | 11  | 10  |
| ---- | --- | --- | --- | --- |
| 0    | 0   | 1   | 3   | 2   |
| 1    | 4   | 5   | 7   | 6   |

| CD\AB | 00  | 01  | 11  | 10  |
| ----- | --- | --- | --- | --- |
| 00    | 0   | 1   | 3   | 2   |
| 01    | 4   | 5   | 7   | 6   |
| 11    | 12  | 13  | 15  | 14  |
| 10    | 8   | 9   | 11  | 10  |

| C\AB | 00  | 01  | 11  | 10  |
| ---- | --- | --- | --- | --- |
| 0    | 0   | 0   | 1   | 1   |
| 1    | 0   | 0   | 1   | 0   |
^1at

| CD\AB | 00  | 01  | 11  | 10  |
| ----- | --- | --- | --- | --- |
| 00    | 0   | 1   | 0   | 0   |
| 01    | 1   | 0   | 0   | 1   |
| 11    | 0   | 0   | 1   | 0   |
| 10    | 0   | 1   | 1   | 0   |
^1bt

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
A
B
C
end
subgraph 74x138
subgraph invis-inputs2
A --- Aa["A"]
B --- Bb["B"]
C --- Cc["C"]
end
subgraph invis-outputs2
Y0L
Y1L
Y2L
Y3L
Y4L
Y5L
Y6L
Y7L
end
invis-inputs2 ~~~ invis-outputs2
end
Y2L & Y3L & Y7L --- nand1[---]
nand1 --- F
```
^1a

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
A
B
C
D
end
subgraph 74x138
subgraph invis-inputs2
A --- Aa["A"]
B --- Bb["B"]
C --- Cc["C"]
end
subgraph invis-outputs2
Y0L
Y1L
Y2L
Y3L
Y4L
Y5L
Y6L
Y7L
end
invis-inputs2 ~~~ invis-outputs2
end
subgraph invis-logic
Y1L & Y4L & Y6L --- nand1[---]
Y1L & Y3L & Y7L --- nand2[---]
nand1 --- nand3[---]
D ---o nand3[---]
nand2 & D --- nand4[---]
nand3 & nand4 --- nand5[---]
end
nand5 --- F
```
^1b

| I   | Y3  | Y2  | Y1  | Y0  |
| --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 0   |
| 1   | 0   | 0   | 0   | 1   |
| 2   | 0   | 0   | 1   | 0   |
| 3   | 0   | 0   | 1   | 1   |
| 4   | 0   | 1   | 0   | 0   |
| 5   | 0   | 1   | 0   | 1   |
| 6   | 0   | 1   | 1   | 0   |
| 7   | 0   | 1   | 1   | 1   |
| 8   | 1   | 1   | 1   | 0   |
| 9   | 1   | 1   | 1   | 1   |
^2t

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
I0i[I0]
I1i[I1]
I2i[I2]
I3i[I3]
I4i[I4]
I5i[I5]
I6i[I6]
I7i[I7]
I8i[I8]
I9i[I9]
end
subgraph 10-to-4
I0i --- I0
I1i --- I1
I2i --- I2
I3i --- I3
I4i --- I4
I5i --- I5
I6i --- I6
I7i --- I7
I8i --- I8
I9i --- I9
I1 & I3 & I5 & I7 & I9 --- or0[---]
I2 & I3 & I6 & I7 & I8 & I9 --- or1[---]
I4 & I5 & I6 & I7 & I8 & I9 --- or2[---]
I8 & I9 --- or3[---]
end
or0 --- F0
or1 --- F1
or2 --- F2
or3 --- F3
```
^2


```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
A
B
C
Vcc
end
subgraph 4x1-mux-2
subgraph invis-mux-in
Vcc ---o I0
Vcc --- I1 & I2
A ---o I3
B --- S1
C --- S2
end
subgraph invis-mux-out
Y
end
invis-mux-in ~~~ invis-mux-out
end
Y --- F
```
^3

| Y\WX | 00    | 01    | 11  | 10  |
| ---- | ----- | ----- | --- | --- |
| 0    | **1** | **1** | *1* | 0   |
| 1    | 0     | 0     | *1* | 0   |
^4a

| YZ\WX | 00  | 01  | 11    | 10    |
| ----- | --- | --- | ----- | ----- |
| 00    | 0   | 0   | 0     | 0     |
| 01    | *1* | *1* | 1     | 0     |
| 11    | *1* | *1* | **1** | **1** |
| 10    | 0   | 0   | **1** | **1** |
^4b


```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph 8x1-mux
subgraph invis-inputs
I0
I1
I2
I3
I4
I5
I6
I7
S0
S1
S2
end
subgraph 3x8-decoder
S0 --- I0d[I0]
S1 --- I1d[I1]
S2 --- I2d[I2]
end
end
```
^5