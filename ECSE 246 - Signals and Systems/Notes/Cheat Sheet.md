# Cheat Sheet

$\cos(at)\cos(bt)=\frac{1}{2}(\cos((a+b)t)+\cos((a-b)t)$

````col
```col-md
## Fourier Series

### Trig

$x(t)=a_{0}+\sum\limits_{n=1}^{\infty}a_{n}\cos n\omega_{0}t+b_{n}\sin n\omega_{0}t$

Where:
$T_{0}=\frac{2\pi}{\omega_{0}}$
$a_{0}=$ the average
$a_{n}=\frac{2}{T_{0}}\int\limits_{t_{1}}^{t_{1}+T_{0}}x(t)\cos n\omega_{0}t~dt$
$b_{n}=\frac{2}{T_{0}}\int\limits_{t_{1}}^{t_{1}+T_{0}}x(t)\sin n\omega_{0}t~dt$

### Compact

$x(t)=C_{0}+\sum\limits_{n=1}^{\infty}C_{n}\cos (n\omega_{0}t+\theta_{n})$

Where:
$C_{0}=a_{0}$
$C_{n}=\sqrt{a_{n}^{2}+b_{n}^{2}}$
$\theta_{n}=\arctan(-b_{n},a_{n})$
### Exponential

$x(t)=\sum\limits_{n=-\infty}^{\infty}D_{n}e^{jn\omega_{0}t}$

Where:
$D_{n}=\frac{1}{T_{0}}\int_{T_{0}}x(t)e^{-jn\omega_{0}t}$
```

```col-md
### Power

$P_{x}=C_{0}+ \frac{1}{2}\sum\limits_{n=1}^{\infty}C_{n}^{2}=\sum\limits_{n=-\infty}^{\infty}|D_{n}|^{2}$

### Band Width

$BW=\omega_{max}-\omega_{min}$

modulation property

## Fourier Transform

$X(\omega)=\int\limits_{-\infty}^{\infty}x(t)e^{-j\omega t}~dt$
$x(t)=\frac{1}{2\pi}\int\limits_{-\infty}^{\infty}X(\omega)e^{j\omega t}$

- Linear
- $x^{*}(t)\iff X^{*}(-\omega)$
- $2\pi x(-\omega)\iff X(t)$
- $x(at)\iff \frac{1}{|a|}X\left( \frac{\omega}{a} \right)$
- $x(t-t_{0})\iff X(\omega)e^{-j\omega t_{0}}$
- $x(t)e^{j\omega_{0}t}\iff X(\omega-\omega_{0})$
- $x_{1}(t)*x_{2}(t)\iff X_{1}(\omega)X_{2}(\omega)$
- $x_{1}(t)x_{2}(t)\iff \frac{1}{2\pi}X_{1}(\omega)*X_{2}(\omega)$
- $\frac{d^{n}x(t)}{dt^{n}}\iff (j\omega)^{n}X(\omega)$
- $\int\limits_{-\infty}^{t}x(u)~du\iff \frac{X(\omega)}{j\omega}+\pi X(0)\delta(\omega)$

```
````

<div style="page-break-after: always;"></div>

## Common Transforms

| $x(t)$                                                     | $X(\omega)$                                                                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| $e^{-at}u(t)$                                              | $\frac{1}{a + j\omega}$                                                                                           |
| $e^{at}u(-t)$                                              | $\frac{1}{a - j\omega}$                                                                                           |
| $e^{-a\|t\|}$                                              | $\frac{2a}{a^2 + \omega^2}$                                                                                       |
| $t e^{-at}u(t)$                                            | $\frac{1}{(a + j\omega)^2}$                                                                                       |
| $t^n e^{-at}u(t)$                                          | $\frac{n!}{(a + j\omega)^{n+1}}$                                                                                  |
| $\delta(t)$                                                | $1$                                                                                                               |
| $1$                                                        | $2\pi \delta(\omega)$                                                                                             |
| $e^{j\omega_0 t}$                                          | $2\pi \delta(\omega - \omega_0)$                                                                                  |
| $\cos \omega_0 t$                                          | $\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$                                                     |
| $\sin \omega_0 t$                                          | $j\pi [\delta(\omega + \omega_0) - \delta(\omega - \omega_0)]$                                                    |
| $u(t)$                                                     | $\pi \delta(\omega) + \frac{1}{j\omega}$                                                                          |
| $\text{sgn}(t)$                                            | $\frac{2}{j\omega}$                                                                                               |
| $\cos \omega_0 t \, u(t)$                                  | $\frac{\pi}{2} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] + \frac{j\omega}{\omega_0^2 - \omega^2}$   |
| $\sin \omega_0 t \, u(t)$                                  | $\frac{\pi}{2j} [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)] + \frac{\omega_0}{\omega_0^2 - \omega^2}$ |
| $e^{-at} \sin \omega_0 t \, u(t)$                          | $\frac{\omega_0}{(a + j\omega)^2 + \omega_0^2}$                                                                   |
| $e^{-at} \cos \omega_0 t \, u(t)$                          | $\frac{a + j\omega}{(a + j\omega)^2 + \omega_0^2}$                                                                |
| $\text{rect}\left(\frac{t}{\tau}\right)$                   | $\tau \, \text{sinc}\left(\frac{\omega \tau}{2}\right)$                                                           |
| $\frac{W}{\pi} \, \text{sinc}(Wt)$                         | $\text{rect}\left(\frac{\omega}{2W}\right)$                                                                       |
| $\Delta\left(\frac{t}{\tau}\right)$                        | $\frac{\tau}{2} \, \text{sinc}^2\left(\frac{\omega \tau}{4}\right)$                                               |
| $\frac{W}{2\pi} \, \text{sinc}^2\left(\frac{Wt}{2}\right)$ | $\Delta\left(\frac{\omega}{2W}\right)$                                                                            |
| $\sum\limits_{n=-\infty}^{\infty} \delta(t - nT)$          | $\omega_0 \sum\limits_{n=-\infty}^{\infty} \delta(\omega - n\omega_0)$                                            |
| $e^{-t^2 / 2\sigma^2}$                                     | $\sigma \sqrt{2\pi} e^{-\sigma^2 \omega^2 / 2}$                                                                   |

