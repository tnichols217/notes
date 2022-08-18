```jupyter

import math

L = 10
h = 1.5
m = 7.5
g = 10

TotalE = m*g*h
print(TotalE)

v = math.sqrt(TotalE*2/m)
print(v)

h10 = L-L*math.cos(10*math.pi/180)
print(h10)
Ev = TotalE - h10*g*m

v10 = math.sqrt(Ev*2/m)
print(v10)

```