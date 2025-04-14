
| $\omega$ | $\log{\omega}$ | $M$                                       | $\frac{dM}{d\omega}^{+}~ \frac{dB}{decade}$ |
| -------- | -------------- | ----------------------------------------- | ------------------------------------------- |
| $0$      | $-\infty$      | $20\log\left( \frac{3}{2000} \right)$     | $0$                                         |
| $10$     | $1$            | $20\log\left( \frac{3}{2000} \right)$     | $20$                                        |
| $100$    | $2$            | $20(\log\left( \frac{3}{2000} \right)+1)$ | $0$                                         |
| $500$    | $2.6990$       | $20(\log\left( \frac{3}{2000} \right)+1)$ | $-20$                                       |
^at

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [0, -56.478174818886366]
		- [1, -56.478174818886366]
		- [2, -36.478174818886366]
		- [2.6990, -36.478174818886366]
		- [4.6990, -76.478174818886366]
xAxis:
	domain:
		- 0
		- 4.6990
	label: log(omega)
yAxis:
	domain:
		- -80
		- 0
	label: M (dB)
```
^ag

| Component                                    | $0.1\omega_c$ | $10\omega_c$ |
| -------------------------------------------- | ------------- | ------------ |
| $1+\frac{1}{10}j\omega$                      | $1$           | $100$        |
| $\left( 1+\frac{1}{100}j\omega \right)^{-1}$ | $10$          | $1000$       |
| $\left( 1+\frac{1}{500}j\omega \right)^{-1}$ | $50$          | $5000$       |
^at2

| $\omega$ | $\log\omega$ | $\phi\degree$   | $\frac{d\phi}{d\omega}^{+}\frac{\degree}{decade}$ |
| -------- | ------------ | --------------- | ------------------------------------------------- |
| $0$      | $-\infty$    | $0$             | $0$                                               |
| $1$      | $0$          | $0$             | $45$                                              |
| $10$     | $1$          | $45$            | $0$                                               |
| $50$     | $1.6990$     | $45$            | $-45$                                             |
| $100$    | $2$          | $45(1-\log 2)$  | $-90$                                             |
| $1000$   | $3$          | $45(-1-\log 2)$ | $-45$                                             |
| $5000$   | $4.6990$     | $-90$           | $0$                                               |
^at3

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, 0]
		- [0, 0]
		- [1, 45]
		- [1.6990, 45]
		- [2, 31.4537]
		- [3, -58.5463]
		- [4.6990, -90]
		- [5.6990, -90]
xAxis:
	domain:
		- -1
		- 5.6990
	label: log(omega)
yAxis:
	domain:
		- -180
		- 180
	label: phi (degree)
```
^ag2

| $\omega$ | $\log{\omega}$ | $M$                        | $\frac{dM}{d\omega}^{+}~ \frac{dB}{decade}$ |
| -------- | -------------- | -------------------------- | ------------------------------------------- |
| $1$      | $0$            | $20(-4)$                   | $20$                                        |
| $20$     | $1.3010$       | $20\left(\log(2)-3\right)$ | $0$                                         |
| $100$    | $2$            | $20\left(\log(2)-3\right)$ | $-40$                                       |
^bt

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, -100]
		- [0, -80]
		- [1.3010, -53.979400086720375]
		- [2, -53.979400086720375]
		- [3, -93.979400086720375]
xAxis:
	domain:
		- -1
		- 3
	label: log(omega)
yAxis:
	domain:
		- -100
		- 0
	label: M (dB)
```
^bg

| Component                                    | $0.1\omega_c$ | $10\omega_c$ |
| -------------------------------------------- | ------------- | ------------ |
| $\left( 1+\frac{1}{20}j\omega \right)^{-1}$  | $2$           | $200$        |
| $\left( 1+\frac{1}{100}j\omega \right)^{-1}$ | $10$          | $1000$       |
^bt2

| $\omega$ | $\log\omega$ | $\phi\degree$     | $\frac{d\phi}{d\omega}^{+}\frac{\degree}{decade}$ |
| -------- | ------------ | ----------------- | ------------------------------------------------- |
| $0$      | $-\infty$    | $90$              | $0$                                               |
| $2$      | $0.3010$     | $90$              | $-45$                                             |
| $10$     | $1$          | $90-45\log(5)$    | $-90$                                             |
| $200$    | $2.3010$     | $90-45\log(2000)$ | $-45$                                             |
| $1000$   | $3$          | $-90$             | $0$                                               |
^bt3

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-0.6989700043360189, 90]
		- [0.30102999566398114, 90]
		- [1, 58.546349804879156]
		- [2.30102999566398114, -58.54634980487913]
		- [3, -90]
		- [4, -90]
xAxis:
	domain:
		- -0.6989700043360189
		- 4
	label: log(omega)
yAxis:
	domain:
		- -180
		- 180
	label: phi (degree)
```
^bg2

| $\omega$ | $\log{\omega}$ | $M$                                                   | $\frac{dM}{d\omega}^{+}~ \frac{dB}{decade}$ |
| -------- | -------------- | ----------------------------------------------------- | ------------------------------------------- |
| $0$      | $-\infty$      | $20\left( \log\left( \frac{1}{250} \right) \right)$   | $0$                                         |
| $10$     | $1$            | $20\left( \log\left( \frac{1}{250} \right) \right)$   | $-20$                                       |
| $100$    | $2$            | $20\left( \log\left( \frac{1}{250} \right)-1 \right)$ | $0$                                         |
| $1000$   | $3$            | $20\left( \log\left( \frac{1}{250} \right)-1 \right)$ | $-20$                                       |

^ct

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, -47.95880017344074]
		- [1, -47.95880017344074]
		- [2, -67.95880017344074]
		- [3, -67.95880017344074]
		- [5, -107.95880017344074]
xAxis:
	domain:
		- -1
		- 5
	label: log(omega)
yAxis:
	domain:
		- -110
		- 0
	label: M (dB)
```
^cg

| Component                                     | $0.1\omega_c$ | $10\omega_c$ |
| --------------------------------------------- | ------------- | ------------ |
| $\left( 1+\frac{1}{10}j\omega \right)^{-1}$   | $1$           | $100$        |
| $1+\frac{1}{100}j\omega$                      | $10$          | $1000$       |
| $\left( 1+\frac{1}{1000}j\omega \right)^{-1}$ | $100$         | $10000$      |
^ct2

| $\omega$ | $\log\omega$ | $\phi\degree$ | $\frac{d\phi}{d\omega}^{+}\frac{\degree}{decade}$ |
| -------- | ------------ | ------------- | ------------------------------------------------- |
| $0$      | $-\infty$    | $0$           | $0$                                               |
| $1$      | $0$          | $0$           | $-45$                                             |
| $10$     | $1$          | $-45$         | $0$                                               |
| $100$    | $2$          | $-45$         | $0$                                               |
| $1000$   | $3$          | $-45$         | $-45$                                             |
| $10000$  | $4$          | $-90$         | $0$                                               |

^ct3

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-2, 0]
		- [0, 0]
		- [1, -45]
		- [2, -45]
		- [3, -45]
		- [4, -90]
		- [6, -90]
xAxis:
	domain:
		- -2
		- 6
	label: log(omega)
yAxis:
	domain:
		- -180
		- 180
	label: phi (degree)
```
^cg2

```function-plot
data:
	- fn: 20*log(2*x/50/1000)/log(10)-10*log(1+4*4/2500/1000000*x*x)/log(10)
xAxis:
	type: log
	domain:
		- 0.1
		- 1000000000
	label: omega
yAxis:
	domain:
		- -100
		- 0
	label: M (dB)
```
^35b


```function-plot
data:
	- fn: atan(50/(0.004*x))/3.1415*180
xAxis:
	type: log
	domain:
		- 0.1
		- 1000000000
	label: omega
yAxis:
	domain:
		- -180
		- 180
	label: phi (degree)
```
^35phi

```function-plot
data:
	- fn: 10*(log(1+25/1000000*x*x)/log(10)-log(1+1/1000000*x*x)/log(10))
xAxis:
	type: log
	domain:
		- 0.001
		- 100000000
	label: omega
yAxis:
	domain:
		- -5
		- 20
	label: M (dB)
```
^37b

```function-plot
data:
	- fn: (atan(5/1000*x)-atan(1*x))/3.1415*180
xAxis:
	type: log
	domain:
		- 0.001
		- 100000000
	label: omega
yAxis:
	domain:
		- -180
		- 180
	label: phi (degree)
```
^37phi
