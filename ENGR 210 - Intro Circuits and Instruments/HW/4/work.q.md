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
