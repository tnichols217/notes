# PHYS 122-119B Lab 2: Electric Potential and Fields

Trevor Nichols
Department of Physics, Case Western Reserve University, Cleveland, Ohio, 44106-7079
Course & Section: PHYS 122-119B
Station 32

# 1 Abstract

The purpose of this lab is to experimentally find and confirm the existence and formation of electric potential fields and how its strength falls off with radius squared.

Our results through all three experiments lines up very closely, if not perfectly with our current theoretical understanding of the phenomena of electric potential fields.

# 2 Theory

## 2.1 Constants

$$
\begin{aligned}
&V_{a}=0~V&&\text{Minimum possible }\Delta\phi\text{ within the Field}\\
&V_b=15.35~V &&\text{Maximum possible }\Delta\phi\text{ within the Field}\\
&d_d=7~cm &&\text{Position of point charges for dipole system}\\
&d_p=6~cm &&\text{Position of point charges for dipole system}\\
&l_p=10~cm &&\text{Length of brass plates}\\
\end{aligned}
$$

## 2.2 Formulae

The current understanding of the force of electric charge is as:

$$
\begin{align}
\vec F_{ab}=\frac{1}{4\pi\epsilon_0}\frac{Q_{a}Q_{b}}{r^{2}}\hat r && \text{Force of electric charge} \tag{2.2.1}\\
\end{align}
$$

Due to the property of superposition of electric charge, this allows us to construct a field at all points as the force is directly related only with position and charge of the point. This field is also conservative, which allows us to construct a relation between position and potential.

This ultimately leaves us with this equation for electrostatic force:

$$
\begin{align}
\vec E(\vec x)=\sum\limits_{p=\text{All charges}}\frac{1}{4\pi\epsilon_0}\frac{Q_p}{\|\vec x-\vec {x_p}\|^{2}}\hat r && \text{Electric field definition} \tag{2.2.2}\\
F_{Ea}=\vec E(\vec x)Q && \text{Electric force given field} \tag{2.2.3}\\
\end{align}
$$

And this equation for electrostatic potential:

$$
\begin{align}
\vec E=-\frac{dV}{d\vec x} && \text{Definition of Potential} \tag{2.2.4}\\
\phi(\vec a)-\phi(\vec b)=\int\limits_{a}^{b}\vec E(\vec x)\cdot d\vec l && \text{Definition of Potential} \tag{2.2.5}\\
\phi(\vec x)=\sum\limits_{p=\text{All charges}}\frac{1}{4\pi\epsilon_0}\frac{Q_p}{\|\vec x-\vec {x_p}\|} && \text{Derivation of Potential} \tag{2.2.6}\\
\end{align}
$$

The way we may measure this is by placing a known charge at various points within the field in order to see the potential at that position, in comparison to the lowest or highest potential we can reference through the field.

We may also define equipotential lines as lines where all points that lie on it have equivalent $\phi$. Since the field is conservative, this gives us a rough understanding of how the fields flow.

## 2.3 Derivation of Formulae for specific setups

### 2.3.1 Point Charge Dipole

Using the superposition principle we can calculate our expected potential between the two point charges.

$$
\begin{align}
\phi(x)=\frac{V_{b}}{4\pi\epsilon_0}\left(\frac{1}{|x-d_{d}|}-\frac{1}{|x+d_{d}|}\right)+\frac{V_{b}}{2} && \text{Electric Potential} \tag{2.3.1.1}\\
\vec E(x)=\frac{V_{b}}{4\pi\epsilon_0}\left(\frac{1}{(x-d_{d})^{2}}-\frac{1}{(x+d_{d})^{2}}\right) && \text{Electostatic force} \tag{2.3.1.2}\\
\vec E(y)=0 && \text{Electostatic force} \tag{2.3.1.3}\\
\end{align}
$$

### 2.3.2 Oppositely Charged Plates

We can now apply the superposition principle to the charged plates

$$
\begin{align}
\vec E(y)=\frac{V_{b}}{8\pi\epsilon_0l_p}\left(\frac{1}{(y-d_{p})}-\frac{1}{(y+d_{p})}\right) && \text{Electostatic force} \tag{2.3.2.1}\\
\vec E(x)=0 && \text{Electostatic force} \tag{2.3.2.2}\\
\end{align}
$$

### 2.3.3 Error Propagation

$$
\begin{align}
\vec E=-\frac{\Delta V}{\Delta x} && \text{Electrostatic force} \tag{2.2.4}\\
\delta_{\vec E}=\sqrt{\left(\frac{\delta_{\Delta V}}{\Delta x}\right)^2+\left( \frac{\Delta V\delta_{\Delta x}}{\Delta x^2} \right)^2} && \text{Error Prop Electostatic force} \tag{2.3.3.1}\\
\delta_{\vec E}=\sqrt{2\left(\frac{\delta_{V}}{\Delta x}\right)^2+2\left( \frac{\Delta V\delta_{x}}{\Delta x^2} \right)^2} && \text{Error Prop Electostatic force} \tag{2.3.3.2}\\
\end{align}
$$

## 3 Procedure

### 3.1 Materials

1. Acrylic Tray
2. Cartesian Measuring Plane
3. Two (2) Copper Point Charges
4. Two (2) Copper Line Charges
5. One (1) Hollow Copper Cylinder
6. Multimeter
7. 15v AC Power Supply with electrodes

### 3.2 General Setup

1. Get a non-conductive tray that is level on the bottom (acrylic) and ensure that a Cartesian Plane is visible at the bottom of the tray
2. Fill the tray with approximately $0.5~cm$ of tap water, such that it may be lowly conductive
3. For each individual setup, connect the two electrodes of the AC power supply to one of each either point charge or line charge
4. Attach one probe of the Multimeter to one of the electrodes of the power supply and use the other probe to probe points on the surface of the water
5. Ensure the Multimeter setting is in AC Voltage

#### 3.2.1 Dipole Point Charges

1. Place each copper point charge at $x=\pm7~cm$ on the $x$ axis of the cartesian plane
2. Probe the $x$-axis then the $y$-axis
3. Probe multiple equipotential lines and mark down their potential and positions

#### 3.2.2 Oppositely Charged Line Charges

1. Place each inner edge of the copper line charge at $y=\pm6~cm$ on the $x$ axis of the cartesian plane, horizontally
2. Probe the $x$-axis then the $y$-axis
3. Probe multiple equipotential lines and mark down their potential and positions

#### 3.2.3 Oppositely Charged Line Charges with Hollow Cylinder

1. With the same setup as before, place a hollow cylinder centered on the origin
2. Probe the $y$-axis
3. Probe random points within the cylinder
4. Probe multiple equipotential lines and mark down their potential and positions

### 3.3 General Data manipulation

1. Once all data has been collected, calculate the $\vec E$ force on all axes using eq. $2.2.4$ and $2.3.3.2$
2. Compare these data with the expected results obtained from eq. $2.3.1.1,2.3.1.2,2.3.1.3,2.3.2.1,2.3.2.2$

## 4 Analysis

### 4.1 Dipole Point Charges

#### 4.1.1 x-axis

On the $x$-axis for the two point charges, we should expect the data to follow eq. $2.3.1.2$ and $2.3.1.2$ for the calculated $\vec E$ found using eq. $2.3.3.2$ and $2.3.3.2$

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^ox|tables]]

We have the following graph with the overlayed expected result:

![[Points.svg#inv_L]]
[Diagram 4.1.1.1]

![[PHYS 122 - Physics 2/Lab/2/tables#^og|tables]]

We found this fit to not fit very well, especially with the $\chi^2$ or $r^2$ metrics, as we are not using point charges and instead cylinders, leading to a significantly different range of possible potentials. We believe the significant $\chi^2$ is due to there being an infinite asymptote where we have a non-infinite value.

We additionally have a graph of our calculated $\vec E$ along with its closest fit to eq. $2.3.1.2$

![[PointsE.svg#inv_L]]
[Diagram 4.1.1.2]

![[PHYS 122 - Physics 2/Lab/2/tables#^op|tables]]

Which we find to be very close to the expected result with an $r^2$ of $0.329$ and a low $\chi^2$ of $285.4001$.

#### 4.1.2 y-axis

For the $y$-axis, we expect our $\vec E=0$, which should have our electric potential be constant, calculated using eq. $2.3.3.2$ and $2.3.3.2$

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^oy|tables]]

We see that our $\vec E$ is fairly consistently close to $0$

#### 4.1.3 Equipotential Lines

We can further analyze the $\vec E$ field by finding places where the potentials remain the same, as the equipotential lines are perpendicular to the direction of $\vec E$

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^oe|tables]]

We have the following graph of equipotential lines:

![[PointsEquiE.svg#inv_L]]
[Diagram 4.1.3.1]

This lines up with our expected equipotential lines for a dipole point charge system.

### 4.2 Oppositely Charged Plates

#### 4.2.1 y-axis

On the $x$-axis for the two point charges, we should expect the data to follow eq. $2.3.2.1$ for the calculated $\vec E$ found using eq. $2.3.3.2$ and $2.3.3.2$

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^ly|tables]]

We have the following graph with the overlayed expected result for the area between the plates:

![[Plates.svg#inv_L]]
[Diagram 4.2.1.1]

![[PHYS 122 - Physics 2/Lab/2/tables#^lg|tables]]

The fit has an $r^2$ value of $0.99947$, which is extremely correlated, further confirming the theory.

#### 4.2.2 x-axis

For the $y$-axis, we expect our $\vec E=0$, which should have our electric potential be constant, calculated using eq. $2.3.3.2$ and $2.3.3.2$

![[PHYS 122 - Physics 2/Lab/2/tables#^lx|tables]]

We see that our $\vec E$ is fairly consistently close to $0$

#### 4.2.3 Equipotential Lines

We can further analyze the $\vec E$ field by finding places where the potentials remain the same, as the equipotential lines are perpendicular to the direction of $\vec E$

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^le|tables]]

We have the following graph of equipotential lines:

![[PlatesEquiE.svg#inv_L]]
[Diagram 4.2.3.1]

This lines up with our expected equipotential lines for an oppositely charged plate system.

### 4.3 Oppositely Charged Plates with Hollow Cylinder

#### 4.3.1 y-axis

We did not calculate what we expect the potentials and fields to be like when we include a cylinder in the middle, but we expect it to not be too different without it, other than the area within the cylinder to have close to no electric field.

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^cy|tables]]

We have the following graph:

![[Cylinder.svg#inv_L]]
[Diagram 4.3.1.1]

Which does not differ too much from the original Diagram 4.2.1.1, except with a flatter spot in the middle, which we did expect. We believe this is not perfectly flat as our 2-D analog of a 3-D phenomena is imperfect.

#### 4.3.2 Random Points within the Cylinder

We expect all points in the cylinder to be of the same potential and little to no electric field, due to Gauss's law and symmetry

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^cx|tables]]

With an average $V_{avg}=7.715~V$ we can see that our potentials stay roughly within this rage, although with some deviation as we had explained in the previous section.

#### 4.3.3 Equipotential Lines

We can further analyze the $\vec E$ field by finding places where the potentials remain the same, as the equipotential lines are perpendicular to the direction of $\vec E$

For our data:

![[PHYS 122 - Physics 2/Lab/2/tables#^ce|tables]]

We have the following graph of equipotential lines:

![[CylinderEquiE.svg#inv_L]]
[Diagram 4.3.3.1]

This lines up with our expected equipotential lines for an oppositely charged plate with cylinder system.

## 5 Conclusion

The purpose of this lab is to experimentally find and confirm the existence and formation of electric potential fields and their relation with distance from charges.

For the Dipole Point charge setup, we find our data to be close to the expected results, except with the small complication of our point charges not being point charges, and thus not tending to infinity at small r-values. The electrostatic force on the other hand appears to be significantly more close to the theoretical values we were expecting. Additionally, we found the experimental equipotential lines to be very close to what we expect in theory, thus we fail to reject the current theory on electrostatic forces.

For the oppositely charged plates, we similarly found our data to line up extremely closely to what we theoretically expected with an $r^2$ value of over $0.999$. Our experimental equipotential lines also line up closely to what we expect in theory, minus the pointy tops and bottoms, which we believe may be due to the plates not being of infinite length.

The cylinder setup was also close to theory in the equipotential lines. The area within the cylinder had more deviance from a singular potential than we hoped, but there is a noticeable flattening in that area of the graph due to the cylinder.

Thus, overall, we fail to reject the current theory on electrostatic forces and potential as our experimental data lines up closely to what we would expect in theory.

## 6 Acknowledgements and Info

- Lab 2 - EPF
- 2024-09-19
- Station 32 Rockefeller 403
- PHYS 122-119B

Lab Partner: Lauren Lee, Alvin Magata
Lab Manual: Lab 2 EPF PHYS 122

### 6.1 References

> [!para]
> ###### Driscoll, D., *General Physics 2: Electricity and Magnetism Lab Manual*, "Electric Potential and Fields".
