```Matlab
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Sam, Aarushi, Esha, Trevor  %
% ENGR 130 Module 2 Lab 5     %
% Section D                   %
% 2024-10-13T21:04:18-04:00   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Read the voltages from known turbid samples

clear
clc
close all

a = arduino();

voltage_vector = [];

% Record the voltages over time and calculate a mean
for idx = 1:100
    button = readDigitalPin(a,'D8');
    if button == 1
        break
    else
        voltage_vector(idx) = readVoltage(a,'A0');
    end
    pause(0.25)
    disp(voltage_vector(idx));
end
disp(mean(voltage_vector));

%% analysis

clear
clc
close all

% Data collected from previous section
mean_voltages = [3.7323, 3.3246, 3.0129, 2.6043]
known_ntu_values = [0, 250, 500, 750]

% Plot our predicted curve for interpolating data

hold on

plot(mean_voltages,known_ntu_values,'ro')

coeff = polyfit(mean_voltages, known_ntu_values, 2)
curve_fit_y = polyval(coeff,mean_voltages)
plot(mean_voltages,curve_fit_y,'black-')

hold off

fprintf('the curve fit  coefficients are %fx^2+%fx+%f\n', coeff(1),coeff(2),coeff(3))
```
