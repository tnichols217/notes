```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [0, 1]
		- [2, 1]
		- [2, 0]
		- [3, 0]
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [0, 1]
		- [1, 1]
		- [1, -1]
		- [2, -1]
		- [2, 0]
		- [3, 0]
xAxis:
	domain:
		- 0
		- 3
yAxis:
	domain:
		- -2
		- 2
```
^11a

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [0, 2]
		- [1, 2]
		- [1, 0]
		- [3, 0]
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [1, 0]
		- [1, -2]
		- [2, -2]
		- [2, 0]
		- [3, 0]
xAxis:
	domain:
		- 0
		- 3
yAxis:
	domain:
		- -2
		- 2
```
^11b

```function-plot
data:
	- fn: "sin(x)"
	  range: [0, 6.28]
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [0, 1]
		- [1, 1]
		- [6.28, 1]
		- [6.28, 0]
		- [9.42, 0]
xAxis:
	domain:
		- 0
		- 9.42
yAxis:
	domain:
		- -2
		- 2
```
^11c

```function-plot
data:
	- fn: "sin(x)+1"
	  range: [0, 6.28]
	- fn: "sin(x)-1"
	  range: [0, 6.28]
xAxis:
	domain:
		- 0
		- 9.42
yAxis:
	domain:
		- -2
		- 2
```
^11d

```function-plot
data:
	- fn: "sin(x)"
	  range: [0, 3.14]
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [0, 1]
		- [1, 1]
		- [3.14, 1]
		- [3.14, 0]
		- [9.42, 0]
xAxis:
	domain:
		- 0
		- 9.42
yAxis:
	domain:
		- -2
		- 2
```
^11e

```function-plot
data:
	- fn: "sin(x)+1"
	  range: [0, 3.14]
	- fn: "sin(x)-1"
	  range: [0, 3.14]
xAxis:
	domain:
		- 0
		- 9.42
yAxis:
	domain:
		- -2
		- 2
```
^11f

```function-plot
data:
	- fn: "abs(cos(6.28*x))/cos(6.28*x)"
xAxis:
	domain:
		- 0
		- 3
yAxis:
	domain:
		- -2
		- 2
```
^118a

```function-plot
data:
	- fn: "abs(sin(6.28*x))/sin(6.28*x)"
xAxis:
	domain:
		- 0
		- 3
yAxis:
	domain:
		- -2
		- 2
```
^118b

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-5, 0]
		- [-4, 0]
		- [-4, 4]
		- [0, 0]
		- [2, 2]
		- [2, 0]
		- [3, 0]
xAxis:
	domain:
		- -5
		- 3
yAxis:
	domain:
		- 0
		- 5
```
^122

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, 0]
		- [0, 0]
		- [0, 4]
		- [4, 0]
		- [6, 2]
		- [6, 0]
		- [7, 0]
xAxis:
	domain:
		- -1
		- 7
yAxis:
	domain:
		- 0
		- 5
```
^122a

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-7.5, 0]
		- [-6, 0]
		- [-6, 4]
		- [0, 0]
		- [3, 2]
		- [3, 0]
		- [4.5, 0]
xAxis:
	domain:
		- -7.5
		- 4.5
yAxis:
	domain:
		- 0
		- 5
```
^122b

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [5, 0]
		- [4, 0]
		- [4, 4]
		- [0, 0]
		- [-2, 2]
		- [-2, 0]
		- [-3, 0]
xAxis:
	domain:
		- -3
		- 5
yAxis:
	domain:
		- 0
		- 5
```
^122c

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-0.5, 0]
		- [0, 0]
		- [0, 4]
		- [2, 0]
		- [3, 2]
		- [3, 0]
		- [3.5, 0]
xAxis:
	domain:
		- -0.5
		- 3.5
yAxis:
	domain:
		- 0
		- 5
```
^122d

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [7, 0]
		- [6, 0]
		- [6, 4]
		- [2, 0]
		- [0, 2]
		- [0, 0]
		- [-1, 0]
xAxis:
	domain:
		- -1
		- 7
yAxis:
	domain:
		- 0
		- 5
```
^122e

```function-plot
data:
	- fn: "pow(16,-x)"
	  range: [0, 1]
	- fn: "1"
	  range: [-1, 0]
xAxis:
	domain:
		- -1
		- 1
yAxis:
	domain:
		- -2
		- 2
```
^126a

```function-plot
data:
	- fn: "pow(16,-(1-2*x))"
	  range: [-1, 0.5]
	- fn: "1"
	  range: [0.5, 1]
xAxis:
	domain:
		- -1
		- 1
yAxis:
	domain:
		- -2
		- 2
```
^126b

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [5, 0]
		- [5, 1]
		- [7, 1]
		- [7, 0]
		- [8, 0]
xAxis:
	domain:
		- 0
		- 8
yAxis:
	domain:
		- -1
		- 2
```
^141a

```function-plot
data:
	- fn: "x*x"
	  range: [1, 2]
	  color: lightblue
	- fnType: points
	  graphType: polyline
	  points:
		- [0, 0]
		- [1, 0]
		- [1, 1]
	  color: lightblue
	- fnType: points
	  graphType: polyline
	  points:
		- [2, 4]
		- [2, 0]
		- [3, 0]
	  color: lightblue
xAxis:
	domain:
		- 0
		- 3
yAxis:
	domain:
		- -1
		- 5
```
^141c

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-2, 0]
		- [-1, 0]
		- [0, 4]
		- [2, 0]
		- [3, 0]
xAxis:
	domain:
		- -2
		- 3
yAxis:
	domain:
		- -1
		- 5
```
^142a

```function-plot
data:
	- fn: "x*x"
	  range: [0, 2]
	  color: lightblue
	- fnType: points
	  graphType: polyline
	  points:
		- [2, 4]
		- [2, -4]
		- [4, 0]
		- [5, 0]
	  color: lightblue
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, 0]
		- [0, 0]
	  color: lightblue
xAxis:
	domain:
		- -1
		- 5
yAxis:
	domain:
		- -5
		- 5
```
^142b

```function-plot
data:
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, 0.5]
		- [1, 0.5]
	- fnType: points
	  graphType: polyline
	  points:
		- [-1, -0.5]
		- [0, -0.5]
		- [0, 0.5]
		- [1, 0.5]
xAxis:
	domain:
		- -1
		- 1
yAxis:
	domain:
		- -1
		- 1
```
^151a

```function-plot
data:
	- fn: "cos(x)"
	- fn: "0"
xAxis:
	domain:
		- -5
		- 5
yAxis:
	domain:
		- -2
		- 2
```
^151d

```function-plot
data:
	- fn: "0.5*(1+cos(x))"
	- fn: "0.5*(cos(x)-1)"
	  range: [0, 5]
	  color: red
	- fn: "0.5*(1-cos(x))"
	  range: [-5, 0]
	  color: red
xAxis:
	domain:
		- -5
		- 5
yAxis:
	domain:
		- -2
		- 2
```
^151g
