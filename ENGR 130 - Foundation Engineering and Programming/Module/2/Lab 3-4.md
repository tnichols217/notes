```Matlab
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Sam, Aarushi, Esha, Trevor  %
% ENGR 130 Module 2 Lab 3-4   %
% Section D                   %
% 2024-10-03T14:56:35-04:00   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Lab 3 Problem 3 %%
% We are making an LED on pin D8 blink 4 times

clear; clc; close all;

a = arduino();

% Repeat 4 times
for x=1:4
    % Turn on the LED
    writeDigitalPin(a,'D8',1);

    % Wait 0.75s
    pause(.75);

    % Turn off the LED
    writeDigitalPin(a,'D8',0);

    % Wait 0.5s
    pause(.5);
end

%% Lab 3 Problem 4 %%
% We are testing the high and low limit of our turbidity sensor

% Take our initial reading (unobstructed)
voltage_1 = readVoltage(a,"A0");
disp(voltage_1);

% Wait some time
pause(5);

% Take another reading (obstructed with cardstock)
voltage_2 = readVoltage(a,'A0');
disp(voltage_2);

%% Lab 4 Problem 2-3 %%

clear; clc; close all;

% Initialize our arduino and voltage vector
a = arduino();
voltage_vector = [];

% Take 100 recordings
for idx = 1:100
    % Check if the button is pressed. If so, break the loop.
    button = readDigitalPin(a,'D7');
    if button == 1
        break
    else
        % Otherwise, read the voltage and store it in the voltage_vector.
        voltage_vector(idx) = readVoltage(a,'A0'); %#ok<SAGROW>
    end
    % Show current results
    disp(voltage_vector)
    % Wait one second before taking another recording
    pause(1)
end

% Calculate the NTU based off given formula
ntu_vector = -260*(voltage_vector).^2+1800*(voltage_vector)-3000;

% Calculate means of data
mean_voltage = mean(voltage_vector);
mean_ntu = mean(ntu_vector);

% Display our final results
disp(ntu_vector)
disp(mean_voltage);
disp(mean_ntu);
```
