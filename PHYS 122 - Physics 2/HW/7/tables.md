```function-plot
data:
	- fn: 1/x
	  range:
	    - 2
	    - 10
	  color:
	    blue
	- fn: 1-1
	  range:
	    - 0
	    - 2
	  color:
	    blue
xAxis:
	domain:
		- 0
		- 10
yAxis:
	domain:
		- -0.5
		- 1
```
^1

```function-plot
data:
	- fn: 1/x
	  range:
	    - 2
	    - 10
	  color:
	    blue
	- fn: x/4
	  range:
	    - 0
	    - 2
	  color:
	    blue
xAxis:
	domain:
		- 0
		- 10
yAxis:
	domain:
		- -0.5
		- 1
```
^2

```function-plot
data:
	- fn: (min(abs(x), 2)^2)/(4*abs(x)) - (min(abs(x-1), 1)^2)/(4*abs(x-1))
	  range:
	    - -5
	    - 5
	  color:
	    blue
xAxis:
	domain:
		- -5
		- 5
yAxis:
	domain:
		- -0.5
		- 1
```
^3
