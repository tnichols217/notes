
from numba import jit

N = 10000000

a = [1] * N
b = [N - 1] * N

@jit
def add(A, B):
    return [a + b for a, b in zip(A, B)]

c = add(a, b)
