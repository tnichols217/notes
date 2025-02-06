```{python}
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, v2, i3 = symbols("i1 v2 i3")

a = Matrix([[7, -3, -2], [-3, 9, -6], [-2, -6, 12]])
I = Matrix([[i1], [-4], [i3]])
b = Matrix([[-48], [v2], [48]])

s = solve([a*I - b], i1, v2, i3)

p = 48 * (s[i3] - s[i1])
p

```

```{python}
from sympy import symbols, solve
from sympy.matrices import Matrix

v1, i1, i2 = symbols("v1 i1 i2")

a = Matrix([[7, -2, -4], [-2, 8, -6], [-4, -6, 15]])
I = Matrix([[i1], [i2], [2]])
b = Matrix([[0], [-6], [v1]])

s = solve([a*I - b], v1, i1, i2)

print(s[i1])

```

```{python}
from sympy import symbols, solve
from sympy.matrices import Matrix

ix, i3, i4, vx = symbols("i_x i3 i4 v_x")

a = Matrix([[6, 2, 0, 0], [2, 11, -9, -3], [0, -9, 16, 8], [0, -3, 8, 8]])
I = Matrix([[ix], [3*ix], [i3], [i4]])
b = Matrix([[vx], [vx], [0], [-2]])

s = solve([a*I - b], ix, i3, i4, vx)
print(s[i3])

```

```{python}
from sympy import symbols, solve
from sympy.matrices import Matrix

v1, i2, i3, v2 = symbols("v1 i2 i3 v2")

a = Matrix([[12, -12, 0], [-12, 12, 0], [0, 0, 30]])
I = Matrix([[1], [i2], [i3]])
b = Matrix([[v1], [0], [0]])

s1 = solve([a*I - b], v1, i2, i3)

a = Matrix([[12, 0], [0, 30]])
I = Matrix([[i2], [i3]])
b = Matrix([[-10], [10]])

s2 = solve([a*I - b], i2, i3)

a = Matrix([[12, 0, 0], [0, 30, -10], [0, -10, 31]])
I = Matrix([[i2], [i3], [-3]])
b = Matrix([[0], [0], [v2]])

s3 = solve([a*I - b], i2, i3, v2)

a = Matrix([[12, -12, 0, 0], [-12, 12, 0, 0], [0, 0, 30, -10], [0, 0, -10, 31]])
I = Matrix([[1], [i2], [i3], [-3]])
b = Matrix([[v1], [-10], [10], [v2]])

s = solve([a*I - b], v1, i2, i3, v2)
print(s)
print(s1[i2]+s2[i2]+s3[i2])
print(s1[i3]+s2[i3]+s3[i3])

```

```{python}
from sympy import symbols, solve, print_latex
from sympy.matrices import Matrix

i1, i2, i3, i4 = symbols("i1 i2 i3 i4")

a = Matrix([[8, -2, -2], [-2, 8, -2], [-2, -2, 8]])
I = Matrix([[i1], [i2], [i3]])
b = Matrix([[6], [-8], [-12]])

s1 = solve([a*I - b], i1, i2, i3)

Tv = 4*s1[i3]

a = Matrix([[8, -2, -2, 0], [-2, 8, -2, 0], [-2, -2, 8, -4], [0, 0, -4, 4]])
I = Matrix([[i1], [i2], [i3], [i4]])
b = Matrix([[6], [-8], [-12], [0]])

s2 = solve([a*I - b], i1, i2, i3, i4)

Ti = s2[i4]

Tr = Tv/Ti

print_latex(I)

print(Tv, Tr)
```