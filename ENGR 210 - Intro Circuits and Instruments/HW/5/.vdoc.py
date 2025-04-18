# type: ignore
# flake8: noqa
#
from sympy import symbols, solve
from sympy.matrices import Matrix

vn, vx, vo, vs  = symbols("v_n v_x v_o v_s")

e = [
    (vn - vx) / 600 + (vn - vo) / 2400,
    (vn - vx) / 1200 + (vn) / 1200,
    (vx - vn) / 600 + (vx - vn) / 1200 + (vx - vs) / 400,
]

s = solve(e, vn, vx, vo)

display((vo/vs).subs(s))
display(*e)
#
#
#
from sympy import symbols, solve
from sympy.matrices import Matrix

vn, vx, vo  = symbols("v_n v_x v_o")

e = [
    (vx) / 2000 + -0.002 + (vx - vo) / 4000 + (vx - vn) / 6000,
    (vn - vx) / 6000 + (vn - vo) / 6000,
    vn - 5,
]

s = solve(e, vn, vx, vo)

display((vo).subs(s))
display(*e)
#
#
#
from sympy import symbols, solve
from sympy.matrices import Matrix

vn, vo  = symbols("v_n v_o")

e = [
    (vn - 3) / 5000 + (vn - vo) / 4000 + (vn - 9) / 2000,
    (vn - 9) / 6000 + (vn) / 4000,
]

s = solve(e, vn, vo)

display((vo).subs(s))
display(*e)
#
#
#
from sympy import symbols, solve
from sympy.matrices import Matrix

vn, vo, rf = symbols("v_n v_o r_f")

e = [
    ((vn - 6) / 3000 + (vn - 7) / 4000 + (vn - vo) / rf).subs({vn: 4}),
]

s = solve(e, rf)
f = (rf).subs(s)
vo = solve((rf).subs(s)-rf, vo)[0]
rf = solve(vo + 10, rf)[0]
display(rf.evalf())
#
#
#
from sympy import symbols, solve
from sympy.matrices import Matrix

vn1, vn2, vo1, vo2, vs = symbols("v_n1 v_n2 v_o1 v_o2 v_s")

e = [
    (vn1 - vs) / 50000,
    (vn1 - vo1) / 12000 + (vn1) / 6000 + (vn1 - vn2) / 4000,
    (vn2 - vo1) / 10000,
    (vn2 - vn1) / 4000 + (vn2) / 2000 + (vn2 - vo2) / 8000,
]

s = solve(e, vn1, vn2, vo1, vo2)
display(*e)
display(vo2.subs(s))
#
#
#
import numpy as np
from scipy.stats import binom

scipy.stats.binom.pmf(5, 10, 0.5)
#
#
#
