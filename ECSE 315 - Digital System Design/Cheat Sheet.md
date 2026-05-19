# Transistors

**MOS**

Cut-off: $V_{GS}<V_{tn}|I_{D}=0$
Linear: $V_{GS}>V_{tn},V_{DS}<V_{GS}-V_{tn}$
Saturation: $V_{GS}>V_{tn},V_{DS}\gt G_{GS}-V_{tn}$

$I_{D}=\frac{\mu C_{ox}}{2}\frac{W}{L}(V_{GS}-V_{tn})^{2}$

$V_{th}$ is when $V_{in}=V_{out}$
$\frac{V_{IL}}{V_{IH}}$ is when VTC slope is $-1$

| Variable     | NMOS Expression | PMOS Expression          |
| ------------ | ------------------- | ---------------------------- |
| Gate-Source  | $V_{GSn} = V_{in}$  | $V_{GSp} = V_{in} - V_{dd}$  |
| Drain-Source | $V_{DSn} = V_{out}$ | $V_{DSp} = V_{out} - V_{dd}$ |

$V_{IL}$, NMOS saturated, PMOS linear
$V_{IH}$, NMOS linear, PMOS saturated

# Delay

$\tau=RC$

$T_{Di}=\sum R_{isj}C_{j}$

# Flops

D: $Q=D$
T: $Q=T\oplus Q$
JK: $Q=JQ'+K'Q$
SR: $Q=S+R'Q$

# Delay

Lump RC: $R=\sum R_{i}$, $C=\sum C_{i}$
Penfield-Rubenstein: $t=R_{1}C_{1}+(R_{1}+R_{2})C_{2}+\dots+(R_{1}+\dots+R_{n})C_{n}$
SGD:
	G: $C_{g}$
	S, $C_{s}$, $R$, $C_{d}$, D
