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

r1 = 5
r2 = 2
c1 = -1j
l1 = 2j
zl = 6+4j

v1r = rect(15, 45 / 180 * pi)

i1, i2, i3 = symbols("i1, i2, i3")

R = Matrix([[r1 + c1, -c1, 0], [-c1, c1 + l1 + r2, -r2], [0, -r2, r2 + zl]])
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

vse = Fraction(31, 10)
voe = Fraction(100, 1000000000)

vo, vs, T = symbols("v_o, v_s, T")

ss = {vs: vse, vo: voe, T: 25}

e = vs * (-Fraction(1, 2) + (1+Fraction(4, 1000)*(T-25))/(2+Fraction(4, 1000)*(T-25)))
display(e)
de = Derivative(e-vo, vo).simplify()
display(de)

S = solve([e-vo], T)
display(25-T.subs(S).subs({vs: vse, vo: voe, T: 25}).evalf())

display((de*voe).subs({T:25}))
#
#
#
