# Classification of Signals

## Linearity

A system where individual effects are able to be linearly scaled or added together and the output would correspondingly be scaled or added.

Assuming an input that takes in the input of $\vec x$ and provides an output of $\vec y$, 

A system defined as $\mathbf s(\vec x)=\vec y$ would be linear if:
$\mathbf s(k_{1}\vec x_{1}+k_{2}\vec x_{2})=k_{1}\vec y_{1}+k_{2}\vec y_{2}$

### Decomposition into ZIR and ZSR

Linear systems, due to their superposition principle, are able to be decomposed into a Zero Input Response (ZIR) and a Zero State Response (ZSR), where ZIR can be thought of the initial response and ZSR is the residual assuming the initial condition is 0.

## Constant vs. Time Varying

Time invariant systems will have the same output given the same inputs, regardless of when it happens.

If you delay the input by $T$ time, then the output would look the exact same, delayed by $T$ time.

## Instantaneous vs. Dynamic

Dynamic systems depend on the history of inputs as well, while instantaneous systems rely solely on the current instance of inputs.

For example, resistance typically is described as instantaneous, but capacitance or inductance is described as dynamic.

## Causality

Causality implies that outputs $y(t)$ only rely on inputs for $x(T): T<t$. This implies that you can only know the past, and that these systems cannot anticipate the future.

It is still important to study both causal and non-causal systems as dimensions other than time need not be causal, and pre-recorded signals may "know" the future as it is already recorded.

## Continuous vs. Discrete time

Continuous Singals, typically denoted $f(t)$, are defined for all real numbers, whereas discrete time signals, typically denoted $f(t_{n})$, are only defined at specific evenly spaced samples. Typically $f(0)$ is defined, so the function would be defined on values of $nT:n\in\mathbb Z$ and $T$ is the constant size between samples.

Discrete signals typically exist on data that only exists discretely, like yearly population, but can also represent a sampling of continuous data. More real-world digital data processing with be in discrete time.

## Analog vs. Digital

When outputs are continous, the system is considered analog. When outputs are quantized, or may only fall onto one of many evenly spaced buckets, it is classified as a digital signal.

## Invertibility

If it is possible to recover the input data from the outputs, then the system is considered invertible. Many systems are not invertible however.

## Stability

Externally stable systems, also known as BIBO stable systems are finite and bounded for all outputs, given that the inputs are also bounded. Systems that tend to infinity on a bounded input are considered instable.

BIBO - Bounded Input, Bounded Output

Internal stability also exists, but will be discussed later.
