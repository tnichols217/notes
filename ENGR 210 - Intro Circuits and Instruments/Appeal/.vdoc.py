# type: ignore
# flake8: noqa
#
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, id, v3 = symbols("i1 i_d v3")

R = Matrix([
    [18, -12, 0],
    [-12, 87, -60],
    # [0, -60, 0] Accidentally wrote 0 instead of 60
    [0, -60, 60]
])

I = Matrix([[i1, -id, 12*i1]]).T
V = Matrix([[-75+7*id, -7*id, v3]]).T

s = solve([R*I - V], i1, id, v3)
# P = 7*id*(i1+id) Did not follow passive sign convention by not negating
P = -7*id*(i1+id)
display(P.subs(s))
display(P.subs(s).evalf())
#
#
#
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, v2, i6 = symbols("i1 v2 i6")

R = Matrix([
    [50, 10, -40],
    [10, 10, 0],
    [-40, 0, 48]
])

I = Matrix([[i1, -10, i6]]).T
V = Matrix([[0, v2, 0]]).T

s = solve([R*I - V], i1, v2, i6)
i6p = i6.subs(s)

R = Matrix([
    [50, -40],
    [-40, 48]
])

I = Matrix([[i1, i6]]).T
V = Matrix([[-200, 200]]).T

s = solve([R*I - V], i1, i6)
i6pp = i6.subs(s)

i6 = i6p + i6pp

P = i6**2 * 6
display(P)
#
#
#
#
