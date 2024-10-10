# PHYS 122-119B Lab 3b: EOM

```
Trevor Nichols, John Paul Magbitang
PHYS 122-119B
Station 32, Rockefeller 403
Lab 3a: EOM (Charge to Mass Ratio of the Electron)
2024-10-03T17:15:58-04:00

Department of Physics,
Case Western Reserve University,
Cleveland, Ohio,
44106-7079
```

# 1 Abstract

The purpose of this lab is to confirm the established value for $\frac{e}{m}$ in electrons through the usage of Heimholz coils and their expected field effect on electrons.

![[PHYS 122 - Physics 2/Lab/3/tables#^results|tables]]

# 2 Theory

## 2.1 Constants

$$
\begin{aligned}
&\frac{e}{m}=1.75882017\pm0.00000007\times10^{11} ~\frac{C}{kg}&&\text{Expected value of e/m}\\
&\mu_{0}=4\pi\times10^{-7}~\frac{Tm}{A}&&\text{Heimholz constant}\\
\end{aligned}
$$

$$
\begin{aligned}
&m&&\text{Mass of an electron}\\
&v&&\text{Speed of an electron}\\
&\vec v&&\text{Velocity}\\
&\vec B&&\text{Magnetic Field}\\
&\vec B&&\text{Magnitude of the Magnetic Field}\\
&\vec e&&\text{Magnitude of the charge of an electron}\\
&\vec I_{C}&&\text{Current}\\
&\vec R&&\text{Radius of beam}\\
&\vec V&&\text{Heimholz coil input voltage}\\
&r&&\text{Radius of Heimholz coil}\\
&N&&\text{Number of turns in Heimholz coil}\\
\end{aligned}
$$

## 2.2 Formulae

Given the relation between potential difference and kinetic energy of an electron, along with the lorenz force of the Heimholz coils, we are able to find a value for $\frac{e}{m}$ given $V$, $B$, and $R$.

Then, we are able to use the known magnetic force of a Heimholz coil in order to find the value of $\frac{e}{m}$ in terms of $\mu_0$, $N$, $I_{C}$, $r$, $V$, $R$

$$
\begin{align}
\frac{1}{2}mv^2=eV && \text{Definition of Kinetic Energy} \tag{2.2.1}\\
\vec F=-e(\vec v\times \vec B) && \text{Lorenz force of magnetic field} \tag{2.2.2}\\
evB=\frac{mv^2}{R} && \text{Centripetal Equation} \tag{2.2.3}\\
\frac{eBR}{m}=v && \text{Solve for v} \tag{2.2.4}\\
v=\sqrt\frac{2eV}{m} && \text{From 2.2.1} \tag{2.2.5}\\
\frac{eBR}{m}=\sqrt\frac{2eV}{m} && \text{From 2.2.4} \tag{2.2.6}\\
\frac{e(BR)^2}{m}=2V && \text{Solving for e/m} \tag{2.2.7}\\
\frac{e}{m}=\frac{2V}{(BR)^2} && \text{Solve for e/m} \tag{2.2.8}\\
B=\frac{8\mu_{0}NI_{C}}{5r\sqrt 5} && \text{Heimholz Equation} \tag{2.2.9}\\
\frac{e}{m}=\left(\frac{r}{\mu_{0}RNI_{C}}\right)^2\frac{5^{3}V}{2^{5}} && \text{From 2.2.8} \tag{2.2.10}\\
\end{align}
$$

### 2.2.1 Formula for relation between current and radius

$$
\begin{align}
\frac{e}{m}=\left(\frac{r}{\mu_{0}RNI_{C}}\right)^2\frac{5^{3}V}{2^{5}} && \text{From 2.2.10} \tag{2.2.1.1}\\
\frac{1}{R}=\frac{\mu_{0}N}{r}\sqrt\frac{2^{5}\frac{e}{m}}{5^{3}V}I_{C} && \text{Relate R and I} \tag{2.2.1.2}\\
y=ax && \text{Linear relationship} \tag{2.2.1.3}\\
y=\frac{1}{R};a=\frac{\mu_{0}N}{r}\sqrt\frac{2^{5}\frac{e}{m}}{5^{3}V};x=I_{C} && \text{With constants} \tag{2.2.1.4}\\
\frac{e}{m}=\left(\frac{ar}{\mu_{0}N}\right)^{2}\frac{5^{3}V}{2^{5}} && \text{Solve for e/m} \tag{2.2.1.5}\\
\end{align}
$$

We can then calculate our errors in $x,y, \frac{e}{m}$

$$
\begin{align}
\delta_{y}=\frac{1}{R^{2}}\delta_{R} && \text{} \tag{2.2.1.6}\\
\delta_{x}=\delta_{I_{C}} && \text{} \tag{2.2.1.7}\\
\delta_{\frac{e}{m}}=2\sqrt{\left(\frac{\delta_{N}}{N}\right)^2+\left(\frac{\delta_{a}}{a}\right)^2+\left(\frac{\delta_{r}}{r}\right)^2+\left(\frac{\delta_{V}}{2V}\right)^2} \frac{e}{m} && \text{} \tag{2.2.1.8}\\
\end{align}
$$

### 2.2.2 Formula for relation between voltage and radius

$$
\begin{align}
\frac{e}{m}=\left(\frac{r}{\mu_{0}RNI_{C}}\right)^2\frac{5^{3}V}{2^{5}} && \text{From 2.2.10} \tag{2.2.2.1}\\
R=\left(\frac{r}{\mu_{0}NI_{C}}\right)\sqrt\frac{5^{3}}{2^{5} \frac{e}{m}}\sqrt V && \text{Relate R and V} \tag{2.2.2.2}\\
y=ax && \text{Linear relationship} \tag{2.2.2.3}\\
y=R;a=\left(\frac{r}{\mu_{0}NI_{C}}\right)\sqrt\frac{5^{3}}{2^{5} \frac{e}{m}};x=\sqrt V && \text{With constants} \tag{2.2.2.4}\\
\frac{e}{m}=\left(\frac{r}{a\mu_{0}NI_{C}}\right)^2\frac{5^{3}}{2^{5}} && \text{Solve for e/m} \tag{2.2.2.5}\\
\end{align}
$$

We can then calculate our errors in $x,y, \frac{e}{m}$

$$
\begin{align}
\delta_{y}=\delta_{R} && \text{} \tag{2.2.2.6}\\
\delta_{x}=\frac{1}{2\sqrt I_{C}}\delta_{I_{C}} && \text{} \tag{2.2.2.7}\\
\delta_{\frac{e}{m}}=2\sqrt{\left(\frac{\delta_{N}}{N}\right)^2+\left(\frac{\delta_{a}}{a}\right)^2+\left(\frac{\delta_{r}}{r}\right)^2+\left(\frac{\delta_{I_{C}}}{I_{C}}\right)^2} \frac{e}{m} && \text{} \tag{2.2.2.8}\\
\end{align}
$$

# 3 Procedure

## 3.1 Materials

1. Heimholz coil, with:
	1. Power supply
	2. Ammeter
2. Electron gun, with:
	1. Power supply
	2. Volt meter

## 3.2 General Setup

1. Position the electron gun
	1. Within the Heimholz coil
	2. Pointed tangentially to the coils
	3. Around 5cm offset into the coil
2. Turn on the Heimholz coil to 1A
3. Turn on the electron gun to 150V
4. Turn off the lights and observe the electron beam
5. Rotate the Heimholz coils until the electron beam is circular and not helical
6. Take a baseline measurement of the radius of the beam
7. Vary the amperage within safe bounds
	1. Note down the change in the radius of the beam
8. Set the amperage to the lowest while the beam is still visible
9. Vary the voltage within safe bounds
	1. Note down the change in the radius of the beam

## 3.3 General Data manipulation

1. Calculate $x,y$ from equations $2.2.1.4$ and $2.2.2.4$
	1. Calculate its error with equations $2.2.1.6$, $2.2.1.7$, $2.2.2.6$, and $2.2.2.7$
2. Since we know $x,y$ should relate linearly due to equations $2.2.1.2$ and $2.2.2.2$
3. Linearly relate $x,y$ for the two variances in order to regress for its slope
4. Calculate $\frac{e}{m}$ given the slope ($a$) using equations $2.2.1.5$ and $2.2.2.5$
	1. Calculate its error with equations $2.2.1.8$ and $2.2.2.8$
5. Compare our values of $\frac{e}{m}$ with the current widely accepted value and decide if we disprove or fail to disprove the current standard

# 4 Analysis

## 4.1 Current vs. Radius

With the following constants:

| Constant | Value             |
| -------- | ----------------- |
| $r$      | $0.158\pm0.005~m$ |
| $N$      | $130$             |
| $V$      | $150\pm2~V$       |

When varying radius, we obtained the following transformed data:

![[PHYS 122 - Physics 2/Lab/3/tables#^current|tables]]

Graphing this data, we obtain the following graph:

![[currente.svg#inv_L]]

![[PHYS 122 - Physics 2/Lab/3/tables#^currentgraph|tables]]

This leaves us with $a=0.029\pm0.003$ to calculate $\frac{e}{m}$ from.

$\frac{e}{m}=(4\pm1)\times 10^{9}~ \frac{C}{kg}$

We find this value to be significantly different from the commonly accepted value.

Our Intercept ($b$) was relatively high as well. Its expected value is meant to be close to $0$ as we expect close to no extraneous magnetic fields to be impacting our results. Our value was unexpectedly high.

## 4.2 Voltage vs. Radius

With the following constants:

| Constant | Value             |
| -------- | ----------------- |
| $r$      | $0.158\pm0.005~m$ |
| $N$      | $130$             |
| $I_{C}$  | $0.70\pm0.01~A$   |

When varying radius, we obtained the following transformed data:

![[PHYS 122 - Physics 2/Lab/3/tables#^voltage|tables]]

Graphing this data, we obtain the following graph:

![[voltagee.svg#inv_L]]

![[PHYS 122 - Physics 2/Lab/3/tables#^voltagegraph|tables]]

This leaves us with $a=0.8\pm0.1$ to calculate $\frac{e}{m}$ from.

$\frac{e}{m}=(1.2\pm0.3)\times10^{11}~ \frac{C}{kg}$

We find this value to be pretty close to the accepted value, with only a difference of about 1.5 STD.

Our intercept ($b$) was also relatively high, but with our uncertainty, this is close enough to $0$ for it to likely be a random error instead of a systematic issue. We find this to be consistent with theory as there may be little extraneous magnetic fields in the lab.

# 5 Conclusion

The purpose of this lab is to confirm the established value for $\frac{e}{m}$ in electrons through the usage of Heimholz coils and their expected field effect on electrons.

We have obtained two different values for $\frac{e}{m}$ by varying Voltage and Current in our Heimholz setup.

![[PHYS 122 - Physics 2/Lab/3/tables#^results|tables]]

For the value we got for our varying current, we got an incredibly imprecise and inaccurate answer, to within two orders of magnitude from our expected result. Our intercept value was also significantly different from what we expected. Due to extremely low accuracy, we fail to accept nor reject current theoretical understanding.

For the value we got for our varying voltage, we got a result that is remarkably close to the expected solution, to within $1.5~SD$ of the expected result. Additionally, our intercept value was within the bounds random error, so we fail to disprove theory with the intercept. We fail to reject current theoretical knowledge through these results.

I believe a large source of error for our current variance would be due to a low number of sample points and possibly interference from the glass bowl on our last data point, that we did not believe was being interfered with until we saw the plot.

As for the varying voltage, I think a low certainty in our radius measurement could be a large source of error, even if we got a fairly close result to the expected cknowledgements and Info

- Lab 3 - EOM
- 2024-10-03
- Station 32 Rockefeller 403
- PHYS 122-119B

Lab Partner: John Paul Magbitang
Lab Manual: Lab 3 EOM PHYS 122

## 6.1 References

> [!para]
> ###### Driscoll, D., *General Physics 2: Electricity and Magnetism Lab Manual*, "Charge to Mass Ratio of the Electron".
