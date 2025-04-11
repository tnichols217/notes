# type: ignore
# flake8: noqa
#
from cmath import polar
from sympy import symbols, solve
from sympy.matrices import Matrix

l1 = complex(0, 6)
r1 = 9
c1 = complex(0, -10)
c2 = complex(0, -4)

v1r = 20
i1r = 10
v2r = 30

i1, i2, i3, v1, v2, v3 = symbols("i1, i2, i3, v1, v2, v3")


R = [
    Matrix([[l1 + r1, -r1], [-r1, c1 + c2 + r1]]),
    Matrix([[l1 + r1, -r1], [-r1, c1 + c2 + r1]]),
    Matrix([[l1 + r1, -r1, 0], [-r1, c1 + c2 + r1, -c1], [0, -c1, c1]]),
]

I = [
    Matrix([[i1, i2]]).T,
    Matrix([[i1, i2]]).T,
    Matrix([[i1, i2, -i1r]]).T,
]

V = [
    Matrix([[v1r, 0]]).T,
    Matrix([[0, -v2r]]).T,
    Matrix([[0, 0, v3]]).T
]

S = [solve([r*i - v], i1, i2, v3) for r, i, v in zip(R, I, V)]
va = [(s[i2] * c2).evalf() for s in S]
Va = sum(va)
display(va)
display(Va)
polar(Va)
#
#
#
from cmath import polar
from sympy import symbols, solve
from sympy.matrices import Matrix

v1, vo = symbols("v1, vo")

s = solve([
        (v1-10)/5 + (v1)/(-2j) + (v1)/5,
        (-v1)/5 + (-vo)/(-4j)
    ], v1, vo
)
display(s[vo])
polar(s[vo])
#
#
#
from cmath import polar, rect
from sympy import symbols, solve
from sympy.matrices import Matrix

v1r = rect(15, 45 / 180 * pi)

i1, i2, vi = symbols("i1, i2, v_i")
C, L1, L2, R = symbols("C, L1, L2, R")
omega = symbols("\\omega")

R = Matrix([[-1j/(omega*C) + 1j*omega*L1, -1j*omega*L1], [-1j*omega*L1, 1j*omega*L1 + ]])
I = Matrix([[i1, i2, i3]]).T
V = Matrix([[v1r, -2 * i2, 2 * i2]]).T

S = solve([R*I - V], i1, i2, i3)

p = polar(S[i3])[0] ** 2 * zl / 2
display(p)
polar(p)
#
#
#
from cmath import polar
from sympy import symbols, solve
from sympy.matrices import Matrix

vi = 8
r1 = 5000
rl = 2000
c1 = -5000j
c2 = -1064j
vo = symbols("vo")

s = solve([
        (vo-vi)/r1 + (vo-vi)/c1 + (vo)/c2
    ], vo
)
i1 = abs(s[vo]/rl)
i1 ** 2 * rl / 2
#
#
#
from cmath import polar, rect
from sympy import symbols, solve, Derivative
from sympy.matrices import Matrix
from fractions import Fraction

vs, T, delT, delVo = symbols("v_s, T, \\Delta_T, \\Delta_{v_o}")

# ss = {vs: Fraction(31, 10), delVo: Fraction(100, 1000000000)}
# ss = {vs: Fraction(31, 10), delVo: Fraction(195, 96774)}
ss = {vs: Fraction(31, 10), delVo: Fraction(122, 967740)}

# vo = vs * (-Fraction(1, 2) + (1+Fraction(4, 1000)*(T-25))/(2+Fraction(4, 1000)*(T-25)))
vo = vs * ((Fraction(4, 1000)*(T-25))/(2+Fraction(4, 1000)*(T-25)))
display(vo)
dvo = Derivative(vo, T).simplify()
display(dvo)
display(dvo*delT)

ss[delT] = delT.subs(solve([dvo*delT - delVo], delT))
display(ss[delT])

dt = ss[delT].subs(ss).subs({T:25})
display(dt)
dt.evalf()
#
#
#
