# type: ignore
# flake8: noqa
#
from sympy import symbols, sqrt
from math import e

na, nc, nv, eg, k, efi = symbols("N_a N_c N_v E_g k E_fi")

k = 8.617333262 * 10**-5
t = 300

# N_{d}=N_{a}+\sqrt{N_{c}N_{v}}e^{-E_{g}/2kT}\left( e^{ \frac{E_{f}-E_{i}}{kT}}- e^{ -\frac{E_{f}-E_{i}}{kT} } \right)$

nd = na + sqrt(nc * nv) * e**(-eg/(2*k*t)) * (e**((efi)/(k * t)) - e**(-(efi)/(k * t)))

nd.subs({
    na: 10**16,
    nc: 2.8*(10**19),
    nv: 1.04*(10**19),
    eg: 1.11,
    efi: 0.36
})

#
#
#
