# PHYS 122-119B Lab 1: DC-CIR

Course & Section: PHYS 122-119B
Station 32

## Section D: Ohm's Law

### 1.

DMM reading for the resistor

> [!answer]
> $R=99.5\pm0.1 \ohm$

### 2.

List your data for minimum and maximum current, with error estimates. Don't forget units. Also, staple to this worksheet a copy of your plot, including the linear fit.

> [!answer]
> $\begin{matrix}I_{min}=21.4\pm0.1~\text{mA}&V=2.118\pm0.001~\text{V}\\I_{max}=26.5\pm0.1~\text{mA}&V=2.620\pm0.001~\text{V}\end{matrix}$

### 3.

List your linear fit parameters, with error estimates from *Origin*

   > [!answer]
   > $\text{SLOPE: }0.0984\pm0.0006~ \frac{\text{V}}{\text{mA}}$
   > $\text{INTERCEPT: }0.01\pm0.02~ \text{V}$

### 4.

Comment on the comparison of the DMM value and Origin fit. (Use additional sheets if necessary)

> [!answer]
> They are not particularly close, they are approximately 10SD away by the larger error, but I would trust the Origin result over the DMM as there is smaller error.
> 
> ![[VvsC.svg]]

## Section E.1: Series Resistors

### 5.

Enter below the data (with error estimates) for series resistors.

> [!answer]
> ![[PHYS 122 - Physics 2/Lab/1/Tables#^1|Tables]]

### 6.

Attach a sheet that describes in detail how you found the errors in each entry for two resistors in series. This should include errors in any raw data you took as well as error propagation through any equations that you used (see App. V of the lab manual)

> [!answer]
> $R=\frac{V}{I}$
> $\delta_{RV}=\frac{1}{I}$
> $\delta_{RI}=\frac{V}{I^2}$
> $\delta_{R}=\sqrt{\left( \frac{\delta_V}{I} \right)^2+\left( \frac{V\delta_I}{I^2} \right)^2}$
> $\square$

### 7.

Compare the theory to the experiment. (Use additional sheets if necessary.)

> [!answer]
> Our experimental sum was roughly in the same ballpark as the theoretical sum, but only within about 10SD of each other. I would say this is fairly bad, but they are relatively close in orders of magnitude.

## Section E.2: Parallel Resistors

### 8.

Enter below the data from your table of part E.2 for parallel resistors.

> [!answer]
> ![[PHYS 122 - Physics 2/Lab/1/Tables#^2|Tables]]

### 9.

Attach a sheet that describes in detail how you found the errors in each entry for 2 resistors in parallel.

> [!answer]
> $R=\frac{V}{I}$
> $\delta_{RV}=\frac{1}{I}$
> $\delta_{RI}=\frac{V}{I^2}$
> $\delta_{R}=\sqrt{\left( \frac{\delta_V}{I} \right)^2+\left( \frac{V\delta_I}{I^2} \right)^2}$
> $\square$

### 10.

Compare the theory to the experiment. (Use additional sheets if necessary.)

> [!answer]
> This time, my error was roughly within 4SD, which I would consider fairly close the the expected values.

## Sections F & G: Where Ohm's Law Fails & Power Limits

### 11.

What resistance did you measure with the DMM?

> [!answer]
> $R=1.7\pm0.1~\ohm$

### 12.

Attach your Origin plot of $R~vs.~I$

> [!answer]
> ![[RvsI.svg]]

### 13.

Comment on Ohm’s Law as it applies to the incandescent bulb and compare the DMM reading to the data in your plot: (Use additional sheets if necessary.)

> [!answer]
> The resistance of the light bulb does not stay the same at around $1.7~\ohm$, instead it non-linearly increases with the current. This is an unexpected result.

### 14.

What is the maximum rated voltage for a $100~\ohm$, $\frac{1}{4}~\text W$ resistor

> [!answer]
> $V=5~\text V$

### 15.

What is your personal resistance?

> [!answer]
> $R=0.130\pm0.001~\text M\ohm$

### 16.

What voltage across your hands would result in a power that could destroy a $100~\ohm$, $\frac{1}{4}~\text W$ resistor?

> [!answer]
> $\frac{13000~\ohm}{4~\text W}=V^2$
> $V=180~\text V$
