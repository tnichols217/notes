
| Input | Output |
| ----- | ------ |
| 111   | 11     |
| 100   | 10     |
| 011   | 01     |
| 111   | 11     |
| 000   | 00     |
^2b

| Input | Output |
| ----- | ------ |
| 111   | 11     |
| 001   | 10     |
| 111   | 11     |
| 011   | 01     |
| 100   | 10     |
^2c


```python
from sympy import *
from sympy.matrices import Matrix

vin, vout, vdd = symbols("Vin Vout Vdd")
bp, bn = symbols("\\beta_p \\beta_n")
vgsn, vdsn, vtn = symbols("Vgsn Vdsn Vtn")
vgsp, vdsp, vtp = symbols("Vgsp Vdsp Vtp")
vth, vil, vih = symbols("Vth VIL VIH")

mos = {
	vgsn: vin,
	vdsn: vout,
	vgsp: vin - vdd,
	vdsp: vout - vdd
}

given = {
	bn: 5/2*bp,
	vtn: 1,
	vtp: -0.9,
	vdd: 5
}

linear = lambda b, vgs, vt, vds: b * ((vgs - vt)*vds- vds**2 /2)
saturated = lambda b, vgs, vt: b/2*(vgs-vt)**2

f = saturated(bn, vgsn, vtn) - saturated(bp, vgsp, vtp)
vth = solve(f.subs(mos).subs(given), vin)

f = saturated(bn, vgsn, vtn) - linear(bp, vgsp, vtp, vdsp)
vos = solve(f.subs(mos).subs(given), vout)
vil = [solve(diff(v, vin) + 1, vin) for v in vos]

f = linear(bn, vgsn, vtn, vdsn) - saturated(bp, vgsp, vtp)
vos = solve(f.subs(mos).subs(given), vout)
vih = [solve(diff(v, vin) + 1, vin) for v in vos]
```
^3

```python
from sympy import *
from sympy.matrices import Matrix

vin, vout, vdd = symbols("Vin Vout Vdd")
vgsn, vdsn, vtn = symbols("Vgsn Vdsn Vtn")
vgsp, vdsp, vtp = symbols("Vgsp Vdsp Vtp")
vth, vil, vih = symbols("Vth VIL VIH")
mun, mup, ln, lp, wn, wp, tox = symbols("mu_n mu_p Ln Lp Wn Wp t_ox")

mos = {
	vgsn: vin,
	vdsn: vout,
	vgsp: vin - vdd,
	vdsp: vout - vdd
}

given = {
	mun: 2 * mup,
	bn: 5/2*bp,
	vtn: 0.8,
	vtp: -0.8,
	wn: 1.4 * ln,
	wp: 4 * lp,
	vdd: 5
}

b = lambda mu, w, l: mu*w/tox/l
linear = lambda b, vgs, vt, vds: b * ((vgs - vt)*vds- vds**2 /2)
saturated = lambda b, vgs, vt: b/2*(vgs-vt)**2

bn = b(mun, wn, ln)
bp = b(mup, wp, lp)

f = saturated(bn, vgsn, vtn) - saturated(bp, vgsp, vtp)
vth = solve(f.subs(mos).subs(given), vin)

f = saturated(bn, vgsn, vtn) - linear(bp, vgsp, vtp, vdsp)
vos = solve(f.subs(mos).subs(given), vout)
vil = [solve(diff(v, vin) + 1, vin) for v in vos]

f = linear(bn, vgsn, vtn, vdsn) - saturated(bp, vgsp, vtp)
vos = solve(f.subs(mos).subs(given), vout)
vih = [solve(diff(v, vin) + 1, vin) for v in vos]
```
^4