import numpy as np
import scipy.stats as s
import scipy as sp
import pandas as pd
import matplotlib.pyplot as plt

a = pd.read_csv("p3b.csv")

_ = plt.plot(a["x"], a["y"], "o")
p = s.pearsonr(a["x"], a["y"])

line = s.linregress(a["x"], a["y"])

domain = np.linspace(-4, 4, 100)

plt.plot(domain, line.intercept + line.slope * domain, color="red")

print(p)
print(line)
plt.show()
