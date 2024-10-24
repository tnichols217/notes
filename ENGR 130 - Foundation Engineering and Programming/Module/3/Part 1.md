# Lab 1 Matlab Code

```matlab
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Darsh, Trevor, Ananya, Ben  %
% ENGR 130 Module 3 Lab 1     %
% Section D                   %
% 2024-10-15T10:38:39-04:00   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Lab 1
% Generate a 1Hz wave on pin 8

clear
clc
close all

a = arduino();

% Set pin 8 to output
a.pinMode(8, 'OUTPUT');

% Generate a 1Hz wave
for x=1:30
    % Turn on the LED
    writeDigitalPin(a,'D8',1);

    % Wait 0.5s
    pause(.5);

    % Turn off the LED
    writeDigitalPin(a,'D8',0);

    % Wait 0.5s
    pause(.5);
end
```

# Lab 2 Matlab Code

```matlab
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Darsh, Trevor, Ananya, Ben  %
% ENGR 130 Module 3 Lab 1     %
% Section D                   %
% 2024-10-17T10:33:35-04:00   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

clear; clc; close all;

% Load the CSV file and exclude rows containing NaN values
data = readmatrix('Lab1_data.csv');

% Test data to test script
% data = [1 NaN; 2 1; 3 2; 4 3];

data = data(~isnan(data(:,1)), :);
data = data(~isnan(data(:,2)), :);

% Extract time and voltage data
time = data(:,1);
voltage = data(:,2);

% Calculate the mean voltage
mean_voltage = mean(voltage);
disp(mean_voltage);

% Find the indices of the maximum and minimum voltage values
[max_V, max_I] = max(voltage);
[min_V, min_I] = min(voltage);

% Create a figure
figure(1);
hold on;

% Plot the voltage vs. time
plot(time, voltage, 'k');

% Add the maximum and minimum voltage points
plot(time(max_I), max_V, 'bo');
plot(time(min_I), min_V, 'rs');

% Add the mean voltage line
yline(mean_voltage, 'm--');

% Add the legend
legend('Voltage vs. Time', 'Max Voltage', 'Min Voltage', 'Mean Voltage');

% Set the title and axis labels
title('Piezoelectric Materials Lab 1 Data Analysis');
xlabel('Time (s)');
ylabel('Voltage (V)');

% Finish the figure
hold off;
```