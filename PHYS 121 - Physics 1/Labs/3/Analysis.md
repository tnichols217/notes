
# Gravitational Potential Energy

## Finding Friction

### Method

- Ensure Plane is level
- Gradually add weight until the cart has constant velocity
- Measure the mass needed to offset the friction

### Data

| Trial | $m_c~(g)$ | $m_p~(g)$ |
| ----- | --------- | --------- |
| 1     | 988.0     | 3.4       |
| 2     | 987.4     | 3.4       |
| 3     | 987.3     | 3.3       |
| 4     | 987.6     | 3.4       |
| 5     | 987.8     | 3.3       |
| 6     | 988.0     | 3.4       |
| 7     | 987.6     | 3.4       |
| 8     | 987.6     | 3.3       |
| 9     | 987.7     | 3.4       |
| 10    | 987.9     | 3.4       |
| Mean  | 987.74    | 3.37      |
| STD.  | 10.1      | 0.3       |

### Analysis

#### Finding $W$

$F_f\approx m_pg$
$W\approx W_f=F_f\cdot d$
$=-m_pgd$
$W=-0.0330597d$

$\delta_W=\delta_{Wm_p}=\delta_{m_p}gd=0.002943d$

$W=d(-0.0330597\pm0.002943)$

#### Analytical Conclusion

We estimate the energy lost to friction will be equal to
$W=d(-0.0330597\pm0.002943)$

Where $d$ is the distance traveled

## Checking energy loss

### Method

- Add 50g of weight to a system that is already in balance
- Record position, velocity, acceleration
- Calculate energies and energy loss

### Data

| Time    | Distance | Velocity | Acceleration | Kinetic Energy | Potential Energy | Total Energy |
|---------|----------|----------|--------------|----------------|------------------|--------------|
| 0.1517  | 0        |          |              |                |                  |              |
| 0.23995 | 0.015    | 0.19139  | 0.48532      | 0.01907        | -0.00785         | 0.01121      |
| 0.31179 | 0.03     | 0.22557  | 0.46638      | 0.02649        | -0.01571         | 0.01078      |
| 0.37425 | 0.045    | 0.25461  | 0.46362      | 0.03375        | -0.02356         | 0.01019      |
| 0.4303  | 0.06     | 0.28013  | 0.44698      | 0.04085        | -0.03141         | 0.00944      |
| 0.48174 | 0.075    | 0.30293  | 0.43929      | 0.04777        | -0.03927         | 0.0085       |
| 0.52959 | 0.09     | 0.32366  | 0.42702      | 0.05453        | -0.04712         | 0.00741      |
| 0.5746  | 0.105    | 0.34269  | 0.41856      | 0.06113        | -0.05497         | 0.00616      |
| 0.61726 | 0.12     | 0.36069  | 0.42563      | 0.06772        | -0.06283         | 0.0049       |
| 0.65788 | 0.135    | 0.37853  | 0.45298      | 0.07459        | -0.07068         | 0.00391      |
| 0.69661 | 0.15     | 0.39723  | 0.5125       | 0.08214        | -0.07853         | 0.00361      |
| 0.73349 | 0.165    | 0.41593  | 0.5012       | 0.09005        | -0.08639         | 0.00367      |
| 0.7688  | 0.18     | 0.43341  | 0.4893       | 0.09779        | -0.09424         | 0.00354      |
| 0.80276 | 0.195    | 0.45011  | 0.49413      | 0.10546        | -0.10209         | 0.00337      |
| 0.8355  | 0.21     | 0.46477  | 0.40156      | 0.11245        | -0.10995         | 0.0025       |
| 0.86733 | 0.225    | 0.4768   | 0.35424      | 0.11834        | -0.1178          | 0.000543     |
| 0.89843 | 0.24     | 0.48828  | 0.38362      | 0.12411        | -0.12565         | -0.00155     |
| 0.92879 | 0.255    | 0.50038  | 0.41339      | 0.13033        | -0.13351         | -0.00317     |
| 0.95841 | 0.27     | 0.5127   | 0.41874      | 0.13683        | -0.14136         | -0.00453     |
| 0.98732 | 0.285    | 0.52495  | 0.42854      | 0.14345        | -0.14921         | -0.00577     |
| 1.01557 | 0.3      | 0.53901  | 0.56704      | 0.15124        | -0.15707         | -0.00583     |
| 1.043   | 0.315    | 0.55435  | 0.55176      | 0.15997        | -0.16492         | -0.00495     |
| 1.06971 | 0.33     | 0.56816  | 0.48226      | 0.16804        | -0.17277         | -0.00474     |
| 1.09582 | 0.345    | 0.58104  | 0.50449      | 0.17575        | -0.18063         | -0.00488     |

### Analysis

![[EnergyGraph.png]]
*Fig 1: Kinetic, Gravitational Potential, and Total Energy vs. distance traveled*

#### Finding $W$

$W=-0.0330597d$
$W=-0.0330597(0.345)$
$W=-0.0114055965~ J$

$\delta_W=0.002943d$
$\delta_W=0.002943(0.345)$
$\delta_W=0.001~ J$

$W=-0.011\pm0.001~ J$

#### Estimating energy loss

$\Delta E=\frac{d\Delta E}{dd}d$
$=-0.56(0.345)$
$=-0.1932~ J$

$\delta_{\Delta E}=\delta_{\frac{d\Delta E}{dd}}d$
$=0.002(0.345)$
$=0.00069~ J$

$\Delta E=-0.1932\pm0.0007~ J$

#### Analytical Conclusion

From our prior estimate of energy lost to friction, we estimate that
$\Delta E=-0.011\pm0.001~ J$

Experimentally, we have instead determined that we lost
$\Delta E=-0.1932\pm0.0007~ J$

We deduced that there is likely significantly more friction in the system due to the non-negligible increase of force on the pulley, as well as significantly more air-resistance due to the larger weight.

# Spring Potential Energy

## Finding the Spring Constant

### Method

- Put a meter stick next to the string, parallel, with numbering visible from the side through the string
- Measure the tip of the hook of the spring at different weights

### Data

| Weight ($g$) | Position ($cm$) |
| ------------ | --------------- |
| 50.0         | 82.25           |
| 55.0         | 80.90           |
| 60.0         | 79.15           |
| 65.0         | 77.35           |
| 70.0         | 75.75           |
| 75.0         | 74.35           |
| 80.0         | 72.85           |
| 85.0         | 71.70           |
| 90.0         | 69.65           |
| 95.0         | 68.25           |
| 100.0        | 66.50           |

### Analysis

![[SpringGraph.png]]
*Fig 2: Position of the end of the spring vs. mass hung upon it*

#### Finding $k$

The force on the spring can be calculated by the amount of mass hanging on it.

$F_s=F_g=mg$
$F_s=k\Delta x$

The slope represents: $\frac{d\Delta x}{dm}$

$mg=k\Delta x$
$g=k\frac{d\Delta x}{dm}$
$k=\frac{g}{\frac{d\Delta x}{dm}}$
$k=\frac{9.81}{3.13}$
$k=3.134~ \frac{N}{m}$

$k=\frac{g}{\frac{d\Delta x}{dm}}$

The variance in $g$ is negligible compared to that of $\frac{d\Delta x}{dm}$

Let $s=\frac{d\Delta x}{dm}$

$\delta_k=\delta_{ks}=\delta_{s} \frac{g}{s^2}$
$=0.04\left( \frac{9.81}{3.13^2} \right)$
$=0.04~ \frac{N}{m}$

$k=3.13\pm0.04~ \frac{N}{m}$

#### Analytical Conclusion

Experimentally, we can deduce that the spring constant for our given spring is
$k=3.13\pm0.04~ \frac{N}{m}$

## Finding Energy loss in the Spring

### Data

At 100g of weight:

| Trial | Max Excursion | Resting Position |
| ----- | ------------- | ---------------- |
| 1     | 42.80         | 66.55            |
| 2     | 42.25         | 66.55            |
| 3     | 40.35         | 66.55            |
| 4     | 41.10         | 66.55            |
| Mean  | 41.8          |                  |
| STD.  | 0.6           |                  |

$\text{Unstretched Spring}=93.90~\text{cm}$

### Analysis

#### Finding Energy Values

In all cases, the uncertainty of the hanging mass is negligible at around $0.00001~kg$ as the other uncertainties are multiple orders of magnitude larger

##### $U_{ki}$

$U_{ki}=\frac{1}{2}kx^2=0~ J$

$\delta_{U_{ki}}=\delta_{U_{ki}k}=\delta_k \frac{1}{2}x^2$
$=0$

$U_{ki}=0\pm0~ J$

##### $U_{kf}$

$U_{kf}=\frac{1}{2}kx^2$
$=\frac{1}{2}3.134(0.9390-0.418)^2$
$=0.4253~ J$

$\delta_{U_{kf}}=\sqrt{\delta_{U_{kf}k}^2+\delta_{U_{kf}x}^2}=\sqrt{(\delta_k\frac{1}{2}x^2)^2+(\delta_xkx)^2}$
$=\sqrt{(0.04(0.5)(0.9390-0.418)^2)^2+(0.006(3.134)(0.9390-0.418))^2}$
$=0.01~ J$

$U_{kf}=0.43\pm0.01~ J$

##### $U_{gi}$

$U_{gi}=mgh=0~ J$

$\delta_{U_{gi}}=\delta_{U_{gi}h}=\delta_hmg$
$=0$

$U_{gi}=0\pm0~ J$

##### $U_{gf}$

$U_{fg}=mgh$
$=-0.1(9.81)(0.9390-0.418)$
$=-0.5111~ J$

$\delta_{U_{gf}}=\delta_{U_{gf}h}=\delta_hmg$
$=0.006(0.1)(9.81)$
$=0.006$

$U_{gf}=-0.511\pm0.006~ J$

##### $\Delta E$

$\Delta E=U_{gf}+U_{kf}-U_{gi}-U_{ki}$
$=0.43-0.511=-0.081~ J$

$\delta_{\Delta_E}=\sqrt{\delta_{U_{gf}}^2+\delta_{U_{kf}}^2}$
$=\sqrt{0.01^2+0.006^2}$
$=0.01~ J$

$\Delta E=-0.081\pm0.01~ J$

#### Finding $\epsilon$

$\epsilon=\frac{\Delta U_k+\Delta U_g}{|\Delta U_g|}$
$=\frac{0.43-0.511}{0.511}$
$=-0.1585$

$\delta_\epsilon=\sqrt{\delta_{\epsilon U_{kf}}^2+\delta_{\epsilon U_{gf}}^2}=\sqrt{\left( \frac{\delta_{U_{kf}}}{|U_{gf}|}\right)^2+\left(-\frac{\delta_{U_{gf}}U_{kf}}{U_{gf}^2} \right)^2}$
$=\sqrt{\left( \frac{0.01}{0.511} \right)^2+\left( \frac{0.006(0.43)}{0.511^2} \right)^2}$
$=0.02$

$\epsilon=-0.16\pm0.02$

#### Analytical Conclusion



# Abstract

The purpose for this lab is to establish whether energy is truly conserved and stored within springs, gravity (height), and motion. 