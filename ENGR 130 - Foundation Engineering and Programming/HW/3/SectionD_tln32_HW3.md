# HW 3

## 1

![[SectionD_tln32_HW2.png]]

## 2

```Matlab
% Headers would normally go here.  Leave them out since they are
% problematic in MATLAB Grader.

% Create a vector of the masses and a vector of the inner radii
mass = [2, 1.3, 1.5, 1.2]      % in kg
rad_in = [3.5, 5.5, 4, 8] ./ 100   % in m

% Assign a value for the outer radius
rad_out = 10 / 100                    % in m

%Calculate moment of inertia for each sphere, store results in one vector
inertia = 2 .* mass ./ 5 .* (rad_out .^ 5 - rad_in .^ 5) ./ (rad_out .^ 3 - rad_in .^ 3)

%Determine the greatest moment of inertia
most_inertia = max(inertia)

%Determine the least moment of inertia
least_inertia = min(inertia)
```

## 3

```Matlab
costs = [32559, 29625, 24838, 23899];
intownEff = [54, 51, 35, 34];
highwayEff = [52, 47, 42, 39];

totalPrice = costs + avgGas .* ownYears .* (avgintownMiles ./ intownEff + avghighwayMiles ./ highwayEff);

name = input("What is your name? ", "s");
ownYears = input("How many years do you plan to own this car? ");
avgGas = input("What is the average price of gas? ");
avgintownMiles = input("How many miles do you plan to drive in-town per year? ");
avghighwayMiles = input("How many miles do you plan to drive on the highway per year? ");

fprintf("\n\nPotential car analysis for %s:\n", name);
fprintf("  owning the car %i years\n", ownYears);
fprintf("  average yearly in-town miles: %i\n", avgintownMiles);
fprintf("  average yearly highway miles: %i\n", avghighwayMiles);
fprintf("  average cost of gasoline: %.2f\n\n", avgGas);

arrayfun(@(x) fprintf("Car %i: $%i\n", x, round(totalPrice(x))), 1:length(totalPrice));
```
