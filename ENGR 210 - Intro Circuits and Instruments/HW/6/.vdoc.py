# type: ignore
# flake8: noqa
#
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, i2 = symbols("i1 i2")

R = Matrix([[100, -40], [-40, 46]]) * 1000
I = Matrix([[i1, i2]]).T
V = Matrix([[10, 2]]).T

s = solve([R*I - V], i1, i2)
display(I.subs(s))
display((3000*i2).subs(s))
display((60000*i1 - 43000*i2).subs(s))
display((20000*i1 + 3000*i2 - 2).subs(s))
#
#
#
from sympy import symbols, solve
from sympy.matrices import Matrix

v1, i2, i0, r1, r2, r3, c = symbols("v1 i2 i0 r1 r2 r3 c")


R = Matrix([[r1, -r1], [-r1, r1+r2+r3]])
I = Matrix([[i0, i2]]).T
V = Matrix([[v1, 0]]).T

s = solve([R*I - V], v1, i2)
v = {
    i0: 21,
    r1: 2,
    r2: 3,
    r3: 4,
    c: 50
}

display((i2*r2).subs(s).subs(v))
display((c/(1/r2 + 1/r3)).subs(s).subs(v))powerof
#
#
#
