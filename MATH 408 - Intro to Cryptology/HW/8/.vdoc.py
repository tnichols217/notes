# type: ignore
# flake8: noqa
#
from sympy import symbols, Poly, GF, Mod

# Define the variable
x = symbols('x')

# Define the base polynomial, modulus polynomial, and exponent
base = Poly(x + 1, x, domain=GF(2))  # x + 1 in GF(2)
modulus = Poly(x**3 + x + 1, x, domain=GF(2))  # x^3 + x + 1 in GF(2)
exponent = 5

# Compute the power modulo the given polynomial
result = Mod(base ** exponent, modulus, domain=GF(2))

# Print result
print(result)
#
#
#
