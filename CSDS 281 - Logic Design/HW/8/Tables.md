
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
subgraph invis-logic
	subgraph D0
		subgraph invis-D0-inputs
			D0i[D]
			D0c[Clock]
		end
		Clock --- D0c
		subgraph invis-D0-outputs
			Q0[Q]
			Q0P[Q']
		end
		invis-D0-inputs ~~~ invis-D0-outputs
	end
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
	Q2 & Q0 --- xor1[---]
	Q1P --- and1[---]
	xor1 ---o and1
	Q1 & Q0P --- and2[---]
	and1 & and2 --- or1[---]
	Q2P & Q1 & Q0 --- and3[---]
	Q1 & Q0 --- and4[---]
	Q2 --- and5[---]
	and4 ---o and5
	and3 & and5 --- or2[---]
end
subgraph invis-outputs
	Q0P --- D0ii([D0])
	D0ii --- D0i
	or1 --- D1ii([D1])
	D1ii --- D1i
	or2 --- D2ii([D2MSB])
	D2ii --- D2i
	Q0 --- Q0o([Q0])
	Q1 --- Q1o([Q1])
	Q2 --- Q2o([Q2])
end
invis-inputs ~~~ invis-logic ~~~ invis-outputs
```
^3c

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
	Clock
end
subgraph invis-logic
	subgraph D0
		subgraph invis-D0-inputs
			D0i[D]
			D0c[Clock]
		end
		Clock --- D0c
		subgraph invis-D0-outputs
			Q0[Q]
			Q0P[Q']
		end
		invis-D0-inputs ~~~ invis-D0-outputs
	end
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
	subgraph D3
		subgraph invis-D3-inputs
			D3i[D]
			D3c[Clock]
		end
		Clock --- D3c
		subgraph invis-D3-outputs
			Q3[Q]
			Q3P[Q']
		end
		invis-D3-inputs ~~~ invis-D3-outputs
	end
	Q0 & Q1 --- xor1[---]
	Q1 & Q2 --- xor2[---]
	Q2 & Q3 --- xor3[---]
end
subgraph invis-outputs
	Q0P --- D0ii([D0])
	D0ii --- D0i
	xor1 --- D1ii([D1])
	D1ii --- D1i
	xor2 --- D2ii([D2])
	D2ii --- D2i
	xor3 --- D3ii([D3])
	D3ii --- D3i
	Q0 --- Q0O[Q0]
	Q1 --- Q1O[Q1]
	Q2 --- Q2O[Q2]
	Q3 --- Q3O[Q3]
end
invis-inputs ~~~ invis-logic ~~~ invis-outputs
```

^4a

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
	Clock
	5V
	0V
	Reset
	Reset & 5V --- xor1[---]
end
subgraph invis-logic
	subgraph 74x163-1
		subgraph invis-D1-inputs
			D1c[Clock]
			D1CLR[Clear]
			D1LD[Load]
			D1ENP[ENP]
			D1ENT[ENT]
			D1A[A]
			D1B[B]
			D1C[C]
			D1D[D]
		end
		Clock --- D1c
		xor1 --- D1CLR
		subgraph invis-D1-outputs
			Q1A[QA]
			Q1B[QB]
			Q1C[QC]
			Q1D[QD]
		end
		invis-D1-inputs ~~~ invis-D1-outputs
	end
	subgraph 74x163-2
		subgraph invis-D2-inputs
			D2c[Clock]
			D2CLR[Clear]
			D2LD[Load]
			D2ENP[ENP]
			D2ENT[ENT]
			D2A[A]
			D2B[B]
			D2C[C]
			D2D[D]
		end
		Clock --- D2c
		xor1 --- D2CLR
		subgraph invis-D2-outputs
			Q2A[QA]
			Q2B[QB]
			Q2C[QC]
			Q2D[QD]
		end
		invis-D2-inputs ~~~ invis-D2-outputs
	end
	5V ---o D1ENP & D1ENT
	5V ---o D2ENP & D2ENT
	Q1A & Q1B & Q1C & Q1D & Q2A & Q2B & Q2C & Q2D
		--- nor1[---]
	0V --- D1A & D1B & D1C & D1D & D2A & D2B & D2C
	5V --- D2D
end

subgraph invis-loopback
	nor1 ---o RLD([LOAD])
	RLD --- D1LD & D2LD
end
subgraph invis-outputs
		Q1A --- Y0([Y0])
		Q1B --- Y1([Y1])
		Q1C --- Y2([Y2])
		Q1D --- Y3([Y3])
		Q2A --- Y4([Y4])
		Q2B --- Y5([Y5])
		Q2C --- Y6([Y6])
		Q2D --- Y7([Y7MSB])
end
invis-inputs ~~~ invis-logic ~~~ invis-loopback ~~~ invis-outputs
```
^5a

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph invis-inputs
	Clock
	5V
	0V
end
subgraph invis-logic
	subgraph 74x169-1
		subgraph invis-D1-inputs
			D1c[Clock]
			D1UP[Up]
			D1LD[Load]
			D1ENP[ENP]
			D1ENT[ENT]
			D1A[A]
			D1B[B]
			D1C[C]
			D1D[D]
		end
		Clock --- D1c
		subgraph invis-D1-outputs
			Q1A[QA]
			Q1B[QB]
			Q1C[QC]
			Q1D[QD]
			Q1RCO[RCO]
		end
		invis-D1-inputs ~~~ invis-D1-outputs
	end
	5V --- D1UP
	0V --- D1ENT & D1ENP
end
subgraph invis-loopback
	Q1RCO --- LOAD([LOAD])
	LOAD ---o D1LD
	Q1A ---o LOADA([A])
	Q1B --- LOADB([B])
	Q1C ---o LOADC([C])
	Q1D ---o LOADD([D])
	LOADA --- D1A
	LOADB --- D1B
	LOADC --- D1C
	LOADD --- D1D
end
subgraph invis-outputs
		Q1A --- Y0([Y0])
		Q1B --- Y1([Y1])
		Q1C --- Y2([Y2])
		Q1D --- Y3([Y3MSB])
end
invis-inputs ~~~ invis-logic ~~~ invis-loopback ~~~ invis-outputs
```
^6a