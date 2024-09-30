```Matlab
% housekeeping commands would go here, but we leave them out to keep Grader happy

%bring in data from data file
load("HW6_vector.mat", "V")

V

%  In one line, determine how many elements in V are equal to 0.
zero_el = length(V(V == 0))

%  In one line, determine how many numbers in V are greater than or equal to 25.  
more_than_25 = length(V(V >= 25))

%  In one line, calculate the sum of all numbers in V that are positive.
pos_sum = sum(V(V > 0))

%  In one line, calculate the mean value of the numbers in V that are less than 70.
avg_less_70 = mean(V(V < 70))

%  In one line, determine how many values in V are equal to the mode of V.
mode_freq = length(V(V == mode(V)))

%  In one line, create a new vector that contains only the odd numbers in V.
not_even = V(mod(V, 2) == 1)
```

