$\epsilon_{0}=8.8541878188\times10^{-12}$ F/m
$\mu_{0}=1.25663706127\times10^{-6}\approx 4\pi\times 10^{-7}$ H/m
$A\cos\left( 2\pi ft-\frac{2\pi}{\lambda}x \right)=A\cos(\omega t-\beta x)$
$e^{i\theta}=\cos\theta+j\sin\theta$
$ae^{i\theta}=x+iy$
$(x,y)=a(\cos\theta,\sin\theta)$
$a=\sqrt{x^{2}+y^{2}},~\theta=\arctan\left( \frac{y}{x} \right)$

| Variable                                               | Letter                   | Unit   | Definition                                                                                                                                             |
| ------------------------------------------------------ | ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Frequency                                              | $f$                      | Hz     | $\frac{u_{p}}{\lambda}=\frac{f}{2\pi}=\frac{1}{T}$                                                                                                     |
| Wavelength                                             | $\lambda$                | m      | $\frac{u_{p}}{f}=\frac{\lambda_{0}}{\sqrt{\epsilon_{r}}}$                                                                                              |
| Wavelength in free space                               | $\lambda_{0}$            | m      | $\frac{c}{f}$                                                                                                                                          |
| Angular Frequency                                      | $\omega$                 | rad/s  | $\beta u_{p}=2\pi f$                                                                                                                                   |
| Attenuation Constant                                   | $\alpha$                 | Np/m   | $\omega\sqrt{\frac{\mu\epsilon}{2}(\sqrt{1+L^2}-1)}\approx\frac{\sigma\eta}{2}$ low loss                                                               |
| Phase Constant                                         | $\beta$                  | rad/m  | $\frac{2\pi}{\lambda}=\frac{\omega}{u_{p}}=\omega\sqrt{\frac{\mu\epsilon}{2}(\sqrt{1+L^2}+1)}$                                                         |
| Permeability<br>Support of mag. fields                 | $\mu$                    | H/m    | $\mu_{r}\mu_{0}$                                                                                                                                       |
| Permittivity<br>Support of elec. fields                | $\epsilon$               | F/m    | $\epsilon_{r}\epsilon_{0}$                                                                                                                             |
| Phase Velocity                                         | $u_{p}$                  | m/s    | $\frac{1}{\sqrt{\mu\epsilon}}=f\lambda$                                                                                                                |
| Speed of light                                         | $c$                      | m/s    | $\frac{1}{\sqrt{\mu_{0}\epsilon_{0}}}$                                                                                                                 |
| Characteristic Impedance<br>Impedance of infinite wire | $Z_{0},Z_{c}$            | $\ohm$ | $\sqrt{\frac{L'}{C'}}$                                                                                                                                 |
| Load Impedance                                         | $Z_{L}$                  | $\ohm$ |                                                                                                                                                        |
| Input Impedance                                        | $Z_{in}$                 | $\ohm$ | $Z_{0}\left(\frac{z_{L}+i\tan(\beta l)}{1+iz_{L}\tan(\beta l)}\right)=Z_{0}\left( \frac{Z_{L}+iZ_{0}\tan(\beta l)}{Z_{0}+iZ_{L}\tan(\beta l)} \right)$ |
| Generator Voltage                                      | $\tilde{V_{g}}$          | $V$    |                                                                                                                                                        |
| Input Voltage                                          | $\tilde{V_{in}}$         | $V$    | $\tilde{V_{g}}\frac{Z_{in}}{Z_{g}+Z_{in}}=V_{0}^{+}+V_{0}^{-}=V(0)$                                                                                    |
| Voltage at a point                                     | $V(x)$                   | $V$    | $V_{0}^{+}e^{-\gamma x}+V_{0}^{-}e^{\gamma x}=V_{0}^{+}(e^{-\gamma x}+\Gamma e^{\gamma(x-2l)})$                                                        |
| Transmission line length                               | $l$                      | m      |                                                                                                                                                        |
| Reflection coefficient<br>at load                      | $\Gamma$                 |        | $\frac{Z_{L}-Z_{0}}{Z_{L}+Z_{0}}=\frac{z_{L}-1}{z_{L}+1}=\frac{V_{0}^{-}}{V_{0}^{+}}=-\frac{I_{0}^{-}}{I_{0}^{+}}$                                     |
| Normalized Load Impedance                              | $z_{L},\overline{Z_{L}}$ |        | $\frac{1+\Gamma}{1-\Gamma}=\frac{Z_{L}}{Z_{0}}$                                                                                                        |
| Standing Wave Ratio                                    | $S$                      |        | $\frac{1+\|\Gamma\|}{1-\|\Gamma\|}$                                                                                                                    |
| Forward and Backward<br>Voltage wave phasor            | $V_{0}^{+},V_{0}^{-}$    | $V$    | $V_{0}^{+}=\frac{V_{in}}{1+\Gamma e^{-2\gamma l}}$                                                                                                     |
| Intrinsic Impedance                                    | $\eta$                   | $\ohm$ | $\sqrt{\frac{\mu}{\epsilon}}$                                                                                                                          |
| Loss Tangent                                           | $L$                      |        | $\frac{\sigma}{\omega\epsilon}$                                                                                                                        |
| Skin Depth                                             | $\delta_{s}$             | $m$    | $\frac{1}{\alpha}$                                                                                                                                     |
| DC Resistance                                          | $R_{DC}$                 | $\ohm$ | $\frac{l}{\sigma A}$                                                                                                                                   |
| AC Resistance                                          | $R_{AC}$                 | $\ohm$ | $\approx\frac{l}{\sigma\omega\delta_s}$ when thin skin                                                                                                 |

| Coaxial          | 2-Wire              | Parallel-Plate      |
| ---------------- | ------------------- | ------------------- |
| $a$ inner radius | $d$ wire diameter   | $w$ width of plate  |
| $b$ outer radius | $D$ wire separation | $h$ height of plate |

|      Parameter      |                       Coaxial                        |                            2-Wire                             |     Parallel-Plate     |      Unit       |
| :-----------------: | :--------------------------------------------------: | :-----------------------------------------------------------: | :--------------------: | :-------------: |
| $R'$<br>Resistance  |    $\frac{R_{s}}{2\pi}(\frac{1}{a}+\frac{1}{b})$     |                    $\frac{2R_{s}}{\pi d}$                     |   $\frac{2R_{s}}{w}$   | $\ohm\text{/m}$ |
| $L'$<br>Inductance  |   $\frac{\mu}{2\pi}\ln\left( \frac{b}{a} \right)$    |   $\frac{\mu}{\pi}\text{arcosh}\left( \frac{D}{d} \right)$    |   $\frac{\mu h}{w}$    |  $\text{H/m}$   |
| $G'$<br>Conductance |  $\frac{2\pi\sigma}{\ln\left( \frac{b}{a} \right)}$  |  $\frac{\pi\sigma}{\text{arcosh}\left( \frac{D}{d} \right)}$  |  $\frac{\sigma w}{h}$  |  $\text{S/m}$   |
| $C'$<br>Capacitance | $\frac{2\pi\epsilon}{\ln\left( \frac{b}{a} \right)}$ | $\frac{\pi\epsilon}{\text{arcosh}\left( \frac{D}{d} \right)}$ | $\frac{\epsilon w}{h}$ |  $\text{F/m}$   |

|                         |    Propagation Constant<br>$\gamma=\alpha+i\beta$    |    Phase Velocity<br>$u_{p}$    |                           Characteristic Impedance<br>$Z_{0}$                           |
| ----------------------- | :--------------------------------------------------: | :-----------------------------: | :-------------------------------------------------------------------------------------: |
| General case            |    $\gamma=\sqrt{(R'+i\omega L')(G'+i\omega C')}$    |     $\frac{\omega}{\beta}$      |                      $\sqrt{\frac{R'+i\omega L'}{G'+i\omega C'}}$                       |
| Lossless<br>$R'=G'=0$   | $\alpha=0,\beta=\frac{\omega\sqrt{\epsilon_{r}}}{c}$ | $\frac{c}{\sqrt{\epsilon_{r}}}$ |                                 $\sqrt{\frac{L'}{C'}}$                                  |
| Lossless Coaxial        | $\alpha=0,\beta=\frac{\omega\sqrt{\epsilon_{r}}}{c}$ | $\frac{c}{\sqrt{\epsilon_{r}}}$ |      $\left( \frac{60}{\sqrt{\epsilon_{r}}} \right)\ln\left( \frac{b}{a} \right)$       |
| Lossless 2-wire         | $\alpha=0,\beta=\frac{\omega\sqrt{\epsilon_{r}}}{c}$ | $\frac{c}{\sqrt{\epsilon_{r}}}$ | $\left( \frac{120}{\sqrt{\epsilon_{r}}} \right)\text{arcosh}\left( \frac{D}{d} \right)$ |
| Lossless parallel-plate | $\alpha=0,\beta=\frac{\omega\sqrt{\epsilon_{r}}}{c}$ | $\frac{c}{\sqrt{\epsilon_{r}}}$ |                         $\frac{120\pi h}{\sqrt{\epsilon_{r}}w}$                         |

$\sqrt{\frac{\mu_{0}}{\epsilon_{0}}}\approx120\pi~\ohm$

$\text{arcosh}(a)=\ln(a+\sqrt{a^{2}-1})$
$a^{2}\gg1:\text{arcosh}(a)\approx\ln(2a)$

$\text{Np}=20\log e~\text{dB}$
$\text{m/s}=1.943844~\text{knots}$

$V=IZ$

| Field    | Meaning                               |                |
| -------- | ------------------------------------- | -------------- |
| $\vec D$ | Displacement<br>Electric Flux Density | $\text{C/m}^2$ |
| $\vec E$ | Electric                              | $\text{V/m}$   |
| $\vec B$ | Magnetic                              | $\text{T}$     |
| $\vec H$ | Mag. Intensity                        | $\text{A/m}$   |
| $\vec J$ | Current Density                       | $\text{A/m}^2$ |

| Law       | Formula                                                       | Usage                                                                                                    |
| --------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Gauss     | $\nabla\cdot \vec D=\rho_{v}$                                 | $\oint_{S}\vec D\cdot ds=Q$                                                                              |
| Faraday   | $\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}$       | $\oint_{C}\vec E\cdot d\vec l=-\int_{S}\frac{\partial\vec B}{\partial t}\cdot ds$                        |
| Gauss Mag | $\nabla\cdot\vec B=0$                                         | $\oint_{S}\vec B\cdot ds=0$                                                                              |
| Ampere    | $\nabla\times\vec H=\vec J+\frac{\partial\vec D}{\partial t}$ | $\oint_{C}\vec H\cdot d\vec l=\int_{S}\left( \vec J+ \frac{\partial \vec D}{\partial t} \right)\cdot ds$ |

$\vec D=\epsilon\vec E$ in linear material
$C=\frac{Q}{V}=\frac{\epsilon A}{d}$
$\vec J=\sigma\vec E$
$\vec I=A(\vec J+\frac{\partial \vec D}{\partial t})$
$\vec B=\mu\vec H$
$F_{m}=I(L\times B)$
$\Phi=\int_{S}\vec B~ds$
$H=\frac{1}{\eta}(\hat v\times E)$

$E=\frac{1}{2}CV^{2}$
$\lambda\gg l$ means ignore transmission line effects

$S_{avg}=\frac{|E|^{2}}{2\eta_{0}}$

| $L$ Loss      | Classification |
| ------------- | -------------- |
| $<0.01$       | Low-loss       |
| $(0.01, 100)$ | Quasiconductor |
| $>100$        | Good conductor |

$Z_{0}$ is where you're coming from
$Z_{L}$ is where you end up
$Z_{in}=\eta_{2}\left( \frac{\eta_{3}+i\eta_{2}\tan(\beta l)}{\eta_{2}+i\eta_{3}\tan(\beta l)} \right)$
$\Gamma=\frac{Z_{in}-\eta_{1}}{Z_{in}+\eta_{1}}$
$T_{power}=1-|\Gamma|^{2}$
