# Signals

A **signal** is a set of data or information or physical quantity that varies along a dimension (typically time or spatial)

A **system** processes signals, modifying, extracting, or lifting information from them.

## LTIC

**LTIC**: Linear, Time Invariant, Causal

- **Linear**: Only additive and multiplicative transformations or combinations of signals
- **Time Invariant**: The transformation will be deterministic and non-dependent on when the transformation was made; a signal input at any time will output the same signal
- **Causal**: Real world signals can only respond to and react to signals and data from the present and past; not the future

## Continuous vs. Discrete

Signals can either be continuous or discrete: where samples are infinitely resolute, or sampled at discrete time/spatial steps.

## Analog vs. Digital

Analog signals have infinitesimal resolution in the values of the samples, while digital signals have been **quantized**, where the values must be able to be represented digitally, meaning it may only take certain pre-defined values.

## SISO vs. MIMO

Single Input Single Output vs. Multiple Inputs Multiple Outputs; the definition is quite obvious.

## Size of a Signal

Energy (AUC):
$Ex=\int\limits_{-\infty}^{\infty}|x(t)|^{2}~dt$

Power (time averaged AUC):
$Px=\lim\limits_{T\to\infty} \frac{1}{T}\int\limits_{-T/2}^{T/2}|x(t)|^{2}~dt$

## Signal Operations

Given: $x(t)$

Time Shift:
$x(t-s)$ where $s$ is the shift

Time Scale:
$x\left( \frac{t}{s} \right)$ where $s$ is the scale

Reversal happens when the time scale is less than $0$

## Periodic signals

Periodic signals are signals that satisfy the following equation:

$\forall n\in\mathbb Z:x(t)=x(t+nT_{0})$

## Basic Signals

Unit step: 

$u(t)=\begin{cases}1&t\ge0\\0&t<0\end{cases}$
$u'(t)=\delta(t)$

