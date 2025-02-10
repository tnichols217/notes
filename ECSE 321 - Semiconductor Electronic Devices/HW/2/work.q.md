```{python}
from sympy import symbols, sqrt
from math import e

na, nc, nv, eg, k, efi, eaf = symbols("N_a N_c N_v E_g k E_fi E_af")

k = 8.617333262 * 10**-5
t = 300

nd = na + sqrt(nc * nv) * e**(-eg/(2*k*t)) * (e**((efi)/(k * t)) - e**(-(efi)/(k * t)))

nd.subs({
    na: 10**16,
    nc: 2.8*(10**19),
    nv: 1.04*(10**19),
    eg: 1.11,
    efi: 0.36
})

nneu = na * (1 - 1 / (1+ e**(eaf/(k*t))))

nneu.subs({
    na: 10**16,
    eaf: 0.16-0.26
})

t = 900

ni = sqrt(nc * nv) * e**(-eg/(2*k*t))

ni2 = ni.subs({
    nc: 10**19,
    nv: 5 * (10**18),
    eg: 2
})

(ni2 ** 2) / (10 ** 17)

```