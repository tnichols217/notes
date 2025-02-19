```{python}
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, i2, v3, i4, i5 = symbols("i1 i2 v3 i4 i5")

R = Matrix([[14, -10, -4, 0], [-10, 35, -20, 5], [-4, -20, 24, 0], [0, 5, 0, 13]])
I = Matrix([[i1], [i2], [2*(i2-i1)], [i4]])
V = Matrix([[38], [0], [v3], [38]])

s = solve([R*I - V], i1, i2, v3, i4)
display(R)
display(I.subs(s))
display(V.subs(s))
VT = s[i4] * 8
display(VT)

R = Matrix([[14, -10, -4, 0, 0], [-10, 35, -20, 5, 0], [-4, -20, 24, 0, 0], [0, 5, 0, 13, -8], [0, 0, 0, -8, 10]])
I = Matrix([[i1], [i2], [2*(i2-i1)], [i4], [i5]])
V = Matrix([[38], [0], [v3], [38], [0]])

s = solve([R*I - V], i1, i2, v3, i4, i5)
display(R)
display(I.subs(s))
display(V.subs(s))
IT = s[i5]
display(IT)

RT = VT/IT
display(RT)
```

```{python}
from sympy import symbols, solve, lambdify, Derivative
from sympy.matrices import Matrix
from numpy import linspace
import matplotlib.pyplot as plt

i1, i2, rl = symbols("i1 i2 R_L")

R = Matrix([[9, -6], [-6, 10 + rl]]) * 1000
I = Matrix([[i1], [i2]])
V = Matrix([[15], [-2000 * (i1 - i2)]])

s = solve([R*I - V], i1, i2)

p = (s[i2]**2) * rl
pp = Derivative(p, rl, evaluate=True)

pl = lambdify(rl, p, modules=['numpy'])
ppl = lambdify(rl, pp, modules=['numpy'])

mr = solve(pp, rl)
mp = p.subs({rl: mr[0]})

x = linspace(0, 200, 100000)
y = pl(x)
y2 = ppl(x)

plt.plot(x, y, label="Power")
plt.plot(x, y2, label="dPower")
plt.ylabel("Power (W)")
plt.xlabel("Resistance (kΩ)")
plt.legend()
plt.show()
display(mp)
display(mp.evalf())
```

```{python}
from sympy import symbols, solve, lambdify, Derivative
from sympy.matrices import Matrix
from numpy import linspace
import matplotlib.pyplot as plt

i1, i2, rl = symbols("i1 i2 R_L")

R = Matrix([[9]]) * 1000
I = Matrix([[i1]])
V = Matrix([[15]])

s = solve([R*I - V], i1)

Vt = s[i1]*4000

display(s[i1])
display(Vt)

R = Matrix([[9, -6], [-6, 10]]) * 1000
I = Matrix([[i1], [i2]])
V = Matrix([[15], [-2000 * (i1 - i2)]])

s = solve([R*I - V], i1, i2)

It = s[i2]
Mp = Vt*It/4

display(s[i2])
display(Mp)
display(Mp.evalf())
```

```{python}
from sympy import symbols, solve, lambdify, Derivative
from sympy.matrices import Matrix
from numpy import linspace
import matplotlib.pyplot as plt

rs, ri, rf, ro, rl, a, vs = symbols("R_s, R_i, R_f, R_o, R_l, A, V_s")
i1, i2, i3 = symbols("i1, i2, i3")
vs=1
R = Matrix([
    [rs + ri, -rs, 0],
    [-rs, rs + rf + rl, -rl],
    [0, -rl, rl + ro]
])
I = Matrix([[i1, i2, i3]]).transpose()
V = Matrix([[-vs, vs, -a * i1 * ri]]).transpose()

s = solve([R*I - V], i1, i2, i3)

G = ((s[i2] - s[i3]) * 1000) / vs

v = {
    rs: 10,
    ri: 10e6,
    rf: 1e3,
    ro: 50,
    rl: 1e3,
    a: 1e6
}

display(I.subs(s).subs(v))

G.subs(v)
```

```{python}
from sympy import symbols, solve, lambdify, Derivative
from sympy.matrices import Matrix
from numpy import linspace
import matplotlib.pyplot as plt

rs, ri, rf, ro, rl, a, vs = symbols("R_s, R_i, R_f, R_o, R_l, A, V_s")
i1, i2, i3 = symbols("i1, i2, i3")
vs=1
R = Matrix([
    [rs + ri, -rs, 0],
    [-rs, rs + rf + rl, -rl],
    [0, -rl, rl + ro]
])
I = Matrix([[i1, i2, i3]]).transpose()
V = Matrix([[-vs, vs, -a * i1 * ri]]).transpose()

s = solve([R*I - V], i1, i2, i3)

G = ((s[i2] - s[i3]) * 1000) / vs

v = {
    rs: 10,
    ri: 10e6,
    rf: 1e3,
    ro: 50,
    rl: 1e3,
    a: 1e6
}

display(I.subs(s).subs(v))

G.subs(v)
```

```{python}
import matplotlib.pyplot as plt
from math import sqrt, sin, cos
import numpy as np

s = 200
t = 2
z = 20
h = t * 1/s
print(h)

func = lambda x, y: x**2+y**2

def fp(x, y):
    ff = func(x, y)
    return (x + h, y + h/2 * (ff + func(x + h, y + h * ff)))

x = 0
y = 0

X = [x]
Y = [y]

for i in range(s):
    x, y = fp(x, y)
    X.append(x)
    Y.append(y)

xy = np.array([X, Y])
xy1 = xy[:,np.array(range(z+1))* int(s/z)]

display(xy1.T)
plt.plot(xy[0], xy[1])
plt.show()
```