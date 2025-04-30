# type: ignore
# flake8: noqa
#
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
V = Matrix([[vi, 0, 0]]).T

S = solve([R*I - V], i1, i2, i3)

display((i3).subs({vi: rect(20, 30/180*pi)}).subs(S).simplify())
#
#
#
#
