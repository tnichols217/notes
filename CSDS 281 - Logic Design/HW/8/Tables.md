
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
	Clock
end
subgraph invis-logic
	subgraph D1
		subgraph invis-D1-inputs
			D1i[D]
			D1c[Clock]
		end
		Clock --- D1c
		subgraph invis-D1-outputs
			Q1[Q]
			Q1P[Q']
		end
		invis-D1-inputs ~~~ invis-D1-outputs
	end
	subgraph D2
		subgraph invis-D2-inputs
			D2i[D]
			D2c[Clock]
		end
		Clock --- D2c
		subgraph invis-D2-outputs
			Q2[Q]
			Q2P[Q']
		end
		invis-D2-inputs ~~~ invis-D2-outputs
	end
	Q1 & Q2 --- and1[---]
	Q1P & and1 --- or1[---]
	or1 --- D1ii([D1])
	D1ii --- D1i
	Q2P --- and2[---]
	X ---o and2
	and2 --- D2ii([D2])
	D2ii --- D2i
	Q1P & Q2 --- or2[---]
end
subgraph invis-outputs
	Z
end
or2 --- Z
invis-inputs ~~~ invis-logic ~~~ invis-outputs
```
^2c

```mermaid
flowchart LR
subgraph Y
	begin ---> 0
	0 ---> 3
	3 ---> 4
	4 ---> 5
	5 ---> 6
	6 ---> 7
	7 ---> 0
end
subgraph Y0
	direction TB
	begin0[begin] ---> 00[0]
	00 ---> 01[1]
	01 ---> 00
end
subgraph Y1
	direction TB
	begin1[begin] ---> 101[0]
	101 ---> 111[1]
	111 ---> 102[0]
	102 ---> 103[0]
	103 ---> 112[1]
	112 ---> 113[1]
	113 ---> 101
end
subgraph Y2
	direction TB
	begin2[begin] ---> 201[0]
	201 ---> 202[0]
	202 ---> 211[1]
	211 ---> 212[1]
	212 ---> 213[1]
	213 ---> 214[1]
	214 ---> 201
end
subgraph Y1'[Y1]
	direction TB
	begin1'[begin] ---> 10[0]
	10 --->|"(Y2 ^ Y0)'"| 11[1]
	10 --->|else| 10
	11 --->|Y0| 10
	11 --->|else| 11
end
subgraph Y2'[Y2]
	direction TB
	begin2'[begin] ---> 20[0]
	20 --->|"Y1 & Y0"| 21[1]
	20 --->|else| 20
	21 --->|"Y1 & Y0"| 20
	21 --->|else| 21
end
Y ~~~ Y0 ~~~ Y1 ~~~ Y2 ~~~ Y1' ~~~ Y2'
```
^3a

| Y2  | Y1  | Y0  | Y2* | Y1* | Y0* |
| --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 1   | 1   |
| 0   | 1   | 1   | 1   | 0   | 0   |
| 1   | 0   | 0   | 1   | 0   | 1   |
| 1   | 0   | 1   | 1   | 1   | 0   |
| 1   | 1   | 0   | 1   | 1   | 1   |
| 1   | 1   | 1   | 0   | 0   | 0   |
^3b

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
	Clock
end
subgraph invis-outpus
	Y0
	Y1
	Y3MSB
end
invis-inputs ~~~ invis-logic ~~~ invis-outpus
```
