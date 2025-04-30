```function-plot
data:
	- fn: 20 * log(0.0001*x*1/(sqrt(1+x*x*2.5/10000000000000)*sqrt(1+x*x*0.000025)))
xAxis:
	type: log
	domain:
		- 0.001
		- 100000000000
	label: omega
yAxis:
	domain:
		- -200
		- 0
	label: M (dB)
```
^41m

```function-plot
data:
	- fn: (-atan(x*0.0000005)-atan(x*0.005))/3.1415*180
xAxis:
	type: log
	domain:
		- 0.001
		- 100000000000
	label: omega
yAxis:
	domain:
		- -180
		- 180
	label: M
```
^41p

$(C_{1}R_{2})(i\omega)(1+i\omega C_{2}R_{2})^{-1}(1+i\omega C_{1}R_{1})^{-1}$
$M(\omega)=(C_{1}R_{2})(\omega)(\sqrt{1+\omega^{2} C_{2}^{2}R_{2}^{2}})^{-1}(\sqrt{1+\omega^{2} C_{1}^{2}R_{1}^{2}})^{-1}$

```python
from sympy import symbols, solve
from sympy.matrices import Matrix
from cmath import rect
from math import pi

i1, i2, i3 = symbols("i1, i2, i3")
vi = symbols("v_i")
r, L = symbols("R, L")
omega = symbols("\\omega")

R = Matrix([[2+4j, -4j, 0], [-4j, 4-10j, -8j], [0, -8j, 6+16j]])
I = Matrix([[i1, i2, i3]]).T
V = Matrix([[rect(20, 30/180*pi), 0, 0]]).T

S = solve([R*I - V], i1, i2, i3)

display((i3).subs(S).simplify())
```
^last