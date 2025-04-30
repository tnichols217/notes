# type: ignore
# flake8: noqa
#
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, i2 = symbols("i1, i2, v_i")
r, L = symbols("R, L")
omega = symbols("\\omega")

R = Matrix([[R + L * 1j * omega, -L * 1j * omega], []])
I = Matrix([[i1, i2]]).T
V = Matrix([[vi, 0]]).T

S = solve([R*I - V], i1, i2)

display(i2.subs(S) * r / vi)
#
#
#
#
