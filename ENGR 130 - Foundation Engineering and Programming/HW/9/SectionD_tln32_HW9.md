# HW 8

## 1

### a

I think I did well on this midterm. I performed well basically everywhere except for the usage of `size()` and `length()`, this is just because I'm not used to coding outside an editor that will let me know what the functions I'm using do. Additionally, reading the question more carefully would be beneficial.

### b

Corrections:

4: I just forgot to circle that one
6: I also just forgot to state where in the algorithm it would need to be: after step b
7: Should have used `length()` instead of `size()` and forgot to divide the size by `2`
	(Not sure why I got 4 points out of 9 points off for this mistake)
7: Should have used `length()` instead of `size()` again
8: Should have titled it "Bakery Sales" or something? The code is so nondescript and lacking comments that I don't even know what its purpose is. Even the variable names are arbitrary and thus cannot even trust that `cookie` or `cake` actually represents cookies or cakes.

## 2

```matlab
function o = myFibo(n)
    o = [1 1; 1 0] ^ (floor(n)-2);
    o = o(1,1);
end
```

## 3

```matlab
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Trevor Nichols              %
% ENGR 130 Module HW 8        %
% Section D                   %
% 2024-10-15T00:50:36-04:00   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Question 3 %%

% Get input
in = input("What type of shape do you want to calculate the volume for? ('r' for rectangular prism, 's' for sphere, or 'c' for cylinder)", "s");
[vol, name] = calculate_shape_volume(in);

% Print output
fprintf("The volume of the %s is %.2f cubic inches.\n", name, vol);

% Print if volume is too big or small
if vol > 300
    fprintf("The volume is too big\n");
elseif vol < 150
    fprintf("The volume is too small\n");
else
    fprintf("The volume is within range\n");
end

function [volume, name] = calculate_shape_volume(shape_type)
    % This function will calculate the volume of a shape based on the given shape type
    % and determine if the volume is within the specified range.
    %
    % Format of call: calculate_shape_volume(shape_type)
    % Input
    %   shape_type: A character indicating the type of shape ('r' for rectangular prism, 's' for sphere, or 'c' for cylinder)
    % Output
    %   volume: The volume of the given shape (double)
    %   name: The name of the shape (string)

    names = dictionary('r', 'Rectangular Prism', 's', 'Sphere', 'c', 'Cylinder');
    
    switch shape_type
        case 'r'
            % Ask for dimensions
            len = input('Enter the length of the rectangular prism (in inches): ');
            width = input('Enter the width of the rectangular prism (in inches): ');
            height = input('Enter the height of the rectangular prism (in inches): ');
            
            % Calculate volume
            volume = len * width * height;
        case 's'
            % Ask for radius
            radius = input('Enter the radius of the sphere (in inches): ');
            
            % Calculate volume
            volume = (4/3) * pi * radius^3;
        case 'c'
            % Ask for radius and height
            radius = input('Enter the radius of the cylinder (in inches): ');
            height = input('Enter the height of the cylinder (in inches): ');

            % Calculate volume
            volume = pi * radius^2 * height;
        otherwise
            % Invalid input, throw exception
            error('Invalid shape type. Please enter r for rectangular prism, s for sphere, or c for cylinder.')
    end
    name = names(shape_type);

end
```