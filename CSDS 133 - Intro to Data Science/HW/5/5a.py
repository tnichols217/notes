import numpy as np
import scipy.stats as s

data1 = np.array([
    [170, 124, 90],
    [120, 130, 100],
    [130, 90, 88]
])

data2 = np.array([
    [27, 35, 33, 25],
    [13, 15, 27, 25]
])

data = data2

chi = s.chi2_contingency(data)

o = np.array((data - chi.expected_freq) ** 2 / chi.expected_freq)


chi_square_value = np.sum(o)

print(chi)
print(o)
print(chi_square_value)