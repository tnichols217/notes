# Cheat Sheet

## Constants

```col
$N_{A}=6.02\times10^{23}~\text{molecules/mole}$
$k=1.38\times10^{-23}~\text{J/K}$
$=8.62\times 10^{-5}~\text{ev/K}$
$q=1.60\times10^{-19}~\text{C}$
$m_{0}=9.11\times10^{-31}~\text{kg}$
$\epsilon_{0}=8.85\times 10^{-14}~\text{F/cm}$
Si: $\epsilon_{r}=11.8$
SiO2: $\epsilon_{r}=3.9$
Si: $n_{i}=1.5\times 10^{10}~cm^{-3}$

$h=6.63\times 10^{-34}~\text{Js}$
$=4.14\times10^{-15}~\text{eVs}$
$kT=0.0259~\text{eV}$
$c=2.998\times 10^{10}~\text{cm/s}$
$\mathring {\mathrm A}=10^{-8}~\text{cm}$
$1~\text{eV}=1.6\times10^{-19}~\text{J}$
Si: $E_{g}=1.12~eV$
Si: $\phi_{m}\approx\chi=4.05~eV$
Si: $\mu_{n}=1350~cm^{2}/Vs$, $\mu_{p}=480~cm^{2}/Vs$
```

## Formulas

|          | Classical Mechanics            | Quantum Mechanics                               |
| -------- | ------------------------------ | ----------------------------------------------- |
| Position | $x$                            | $x$                                             |
| Momentum | $p=mv$                         | $\frac{\hslash}{j}\frac{\partial}{\partial x}$  |
| Energy   | $E=KE+PE=\frac{1}{2}mv^{2}+PE$ | $-\frac{\hslash}{j}\frac{\partial}{\partial t}$ |

```col
$p=mv=\hslash\vec k=\frac{h}{\lambda}$
$E=hv=\hslash\omega$
$E=\frac{1}{2}mv^{2}=\frac{1}{2} \frac{p^{2}}{m}=\frac{\hslash}{2m^{*}}\vec k^{2}$
$m^{*}=\frac{\hslash^{2}}{\frac{d^{2}E}{d\vec k^{2}}}$

$E_{N}=KE+PE=E_{c}+E(k)=-\frac{mq^{4}}{K^{2}n^{2}\hslash^{2}}$
$\langle Q\rangle=\int\limits_{-\infty}^{\infty}\psi^{*}Q_{op}\psi~d\vec x$
$Eg(x)=\int\limits_{-\infty}^{\infty}g(x)P(x)dx$
```

```col

$f(E)=\frac{1}{e^{(E-E_{F})/kT}+1}\approx e^{(E_{F}-E)/kT}$
$n_{0}=N_{c}f(E_{C})$
$N_{c}=2(\frac{2\pi m^{*}_{n}kT}{h^{2}})^{3/2}$
$N_{v}=2(\frac{2\pi m^{*}_{p}kT}{h^{2}})^{3/2}$
$p_{0}=N_{v}f(E_{v})$
$n_{i}=N_{c}e^{-(E_{C}-E_{i})/kT}=\sqrt{N_{c}N_{v}}e^{-E_{g}/2kT}$
$p_{i}=N_{v}e^{-(E_{i}-E_{C})/kT}$
$E=\frac{mq^{4}}{2K^{2}\hslash^{2}}$

$L=\sqrt{D\tau}$
$\rho=\frac{1}{\sigma}$
$R=\frac{\rho L}{wt}$
$J=\frac{I}{A}$
$J=J_{n}+J_{p}+C \frac{dV}{dt}=\sigma\varepsilon$
$J_{n}(x)=q\mu_{n}n(x)\varepsilon(x)+qD_{n} \frac{dn(x)}{dx}$
$J_{p}(x)=q\mu_{p}p(x)\varepsilon(x)-qD_{p} \frac{dp(x)}{dx}$
$\frac{kT}{q}=\frac{D}{\mu}$
```

````col
```col-md
### Equilibrium

$n_{0}=n_{i}e^{(E_{F}-E_{i})/kT}$
$p_{0}=n_{i}e^{(E_{i}-E_{F})/kT}$
$n_{0}p_{0}=n_{i}^{2}$

### Steady State

$n=N_{c}e^{-(E_{C}-F_{n})/kT}=n_{i}e^{(F_{n}-E_{i})/kT}$
$p=N_{v}e^{-(F_{p}-E_{v})/kT}=n_{i}e^{(E_{i}-F_{p})/kT}$
$np=n_{i}^{2}e^{(F_{n}-F_{p})/kT}$
```
```col-md
### Potential Well

$\psi=A\sin Kx$
$K=\frac{\sqrt{2mE}}{\hslash}$

$\frac{d^{2}}{dx^{2}}\psi(x)+\frac{2m}{\hslash^{2}}E\psi(x)=0$

$\psi_{H}=\sqrt{\frac{2}{L}} \sin \frac{nm}{L}x$
$\psi_{K}(X)=U(k_{x},x)e^{jKxX}$
```
````

### p-n

````col
$V_{0}=\frac{kT}{q}\ln\left( \frac{N_{a}N_{d}}{n_{i}^{2}} \right)$
$\frac{p_{p}}{p_{n}}=\frac{n_{n}}{n_{p}}=e^{qV_{0}/kT}$
$W=\sqrt{\frac{2\epsilon(V_{0}-V)}{q}\left(\frac{N_{a}+N_{d}}{N_{a}N_{d}}\right)}$
$n=n_{0}+\delta_{n}$
$p=p_{0}+\delta_{p}$
$\delta_{p}(x_{n})=\Delta p_{n}e^{-x_{n}/L_{p}}$
$\delta_{n}(x_{p})=\Delta n_{p}e^{-x_{p}/L_{n}}$

$Q_{+}=qAx_{n0}N_{d}=qAx_{p0}N_{a}$
$\varepsilon_{0}=-\frac{q}{\varepsilon}x_{n0}N_{d}=-\frac{q}{\varepsilon}x_{p0}N_{a}$
$I_{p}=qA \frac{D_{p}}{L_{p}}p_{n}(e^{qV/kT}-1)$
$I_{n}=qA \frac{D_{n}}{L_{n}}n_{p}(e^{qV/kT}-1)$
$I_{op}=qAg_{op}(L_{p}+L_{n}+W)$
$\Delta\sigma=qg_{op}(\tau_{n}\mu_{n}+\tau_{p}\mu_{p})$
$C_{j}=\frac{\epsilon A}{W}$
````

````col
```col-md
#### One sided

$x_{p0}=W \frac{N_{d}}{N_{a}+N_{d}}$
$x_{n0}=W \frac{N_{a}}{N_{a}+N_{d}}$

### BJT pnp

$B=\frac{I_{C}}{I_{E_{p}}}=\operatorname{sech}\left(\frac{W_{b}}{L_{p}}\right)$
$\gamma=\frac{I_{E_{p}}}{I_{E_{n}}+I_{E_{p}}}=\left(1+\frac{L_{p}^{n}n_{n}\mu_{n}^{p}}{L_{n}^{p}p_{p}\mu_{p}^{n}}\operatorname{tanh}\left(\frac{W_{b}}{L_{p}^{n}}\right)\right)^{-1}$
$\alpha=B\gamma$
$\beta=\frac{\alpha}{1-\alpha}$
$I_{E_{p}}=qA\frac{D_{p}}{L_{p}}\left(\Delta p_{E}\operatorname{ctnh}\frac{W_{b}}{L_{p}}-\Delta p_{C}\operatorname{csch}\frac{W_{b}}{L_{p}}\right)$
$I_{C}=qA\frac{D_{p}}{L_{p}}\left(\Delta p_{E}\operatorname{csch}\frac{W_{b}}{L_{p}}-\Delta p_{C}\operatorname{ctnh}\frac{W_{b}}{L_{p}}\right)$
$I_{B}=qA\frac{D_{p}}{L_{p}}\left(\left(\Delta p_{E}+\Delta p_{C}\right)\operatorname{tanh}\frac{W_{b}}{2L_{p}}\right)$
$\Delta p_{E}=p_{n}(e^{qV_{EB}/kT}-1)$
$\Delta p_{C}=p_{n}(e^{qV_{CB}/kT}-1)$
$I_{C}/I_{E}=\alpha$
$I_{C}/I_{B}=\beta$
```
```col-md
### MOS

$\frac{1}{2}\phi_{s}=\phi_{F}=\frac{kT}{q}\ln\left( \frac{N_{a}}{n_{i}} \right)=E_{F}-E_{i}$
$W_{min}=W\bigg|_{V_{0}-V=\phi_{s}}$
$C_{i}=\frac{\epsilon_{i}}{d}$
$C_{d}=\frac{\epsilon_{s}}{W}$
$C=\frac{C_{i}C_{d}}{C_{i}+C_{d}}$
$V_{FB}=\phi_{ms}-\frac{Q_{i}}{C_{i}}$
$Q_{d}=-qN_{a}W_{m}=-2(\epsilon_{s}qN_{a}\phi_{F})^{1/2}$
$V_{T}=V_{FB}-\frac{Q_{d}}{C_{i}}+\phi_{s}$
$\Phi_{s}=\chi+\frac{E_{g}}{2}-\phi_{F}$
$I_{D}=\frac{\bar{\mu_{n}}ZC_{i}}{L}((V_{G}-V_{T})V_{D}-\frac{1}{2}V_{D}^{2})$
$I_{Dsat}=\frac{Z}{2L}\bar{\mu_{n}}C_{i}V_{D}^{2}$
```
````

$B$ Base Transportation Factor
$\gamma$ Emitter Injection Efficiency
$\alpha$ Current Transfer Ratio
$\beta$ Base to Collection Current Amplification Factor