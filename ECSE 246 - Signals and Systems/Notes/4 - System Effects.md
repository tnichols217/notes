# System Effects

## Stability

There are two kinds of system stability: internal (Asymptotic) and external (BIBO)

### BIBO Stability

BIBO stands for bounded input, bounded output.

A system is considered BIBO stable if for any bounded input, the output would be bounded as well.

More specifically, it can be shown that if the following condition holds, a system is BIBO stable:

$\int\limits_{-\infty}^{\infty}|h(t)|~dt<\infty$

Where $h(t)$ is the impulse response.

BIBO stability (exernal) typically only is useful to analyse when the internal and exterior behaviors of systems are equivalent (most well behaved systems).

### Asymptotic Stability

Although there are multiple definitions for internal stability for systems, for LTI systems, having asymptotic stability is a useful metric.

The concept of asymptotic stability is that the system tends to $0$ as $t\to\infty$

In practice this means that each node in the system must approach $0$ as $t\to\infty$.

Where $\vec\lambda$ are the characteristic roots of the system

1. If $\forall\lambda\in\vec\lambda:\Re(\lambda)<0$ then the system is asymptotically stable
2. If $\exists\lambda\in\vec\lambda:\Re(\lambda)>0$ or $\exists\lambda\in\vec\lambda:\Re(\lambda)=0$ and is duplicated, then the system is unstable
3. Else, $\forall\lambda\in\vec\lambda:\Re(\lambda)=0$ and are not duplicated, it is marginally stable

Marginally stable systems are systems that neither tend towards $\infty$ not $0$, and just oscillates.

## System Effect Timing

Theoretically, all effects have infinite time as they are constantly approacing $0$ if they decay. It becomes useful to have a measure for the effective inflence time of effects, however.

We define the following as an effective time constant:

$T_{h}=\frac{\int\limits_{-\infty}^{\infty}h(t)~dt}{\text{max}[h(t)]}$

We also define the cutoff frequency to be

$f_{c}=\frac{1}{T_{h}}$
