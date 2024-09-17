# HW 4

## 1

![[SectionD_tln32_HW2.png]]

## 2

```Matlab
% Headers would normally go here.  Leave them out since they are
% problematic in MATLAB Grader.


idx = 0;    % this variable is used to count the campsites being evaluated and to
            % store the results in a vector
            
function res = ternary(c, a, b)
    if c
        res = a;
    else
        res = b;
    end
end

% the outer structure of these loops should not be modified.
% they will vary the qualities of the campsites, going through all combinations

for rain = 0:1:1     % loop to vary rain conditions; 0 for dry, 1 for damp
    for shade = 0:1:1  % loop to vary shade conditions; 0 for sunny, 1 for shady
        for ground = 0:1:1 % loop to vary ground conditions; 0 for soft, 1 for hard

            idx = idx + 1;

% selection structure to evaluate the campsite qualities
% Do not change the order in which conditions are checked from what is said in the comments
% Designate whether a campsite is good or bad by storing either a G or a B
% in the variable site(idx).  site will be a vector of characters.
    siteb(idx) = (~rain & ~ground) | (rain & ~shade);
    site(idx) = ternary(siteb(idx), 'G', 'B');

    if true
    else                        % not dry
    end

% Summarize conditions.  Use 0's and 1's as defined at beginning of loops.
    fprintf("Site is %s, %s, and %s\n", ...
        ternary(rain, "damp", "dry"), ...
        ternary(shade, "shady", "sunny"), ...
        ternary(ground, "hard", "soft") ...
    );
    fprintf("This site is %s\n", ternary(siteb(idx), "good", "bad"));

% Use a selection structure to share conclusion about the campsite
    if true
    else

    end
    
        end    % These are the ends of the loops
    end
end

% the following lines may be ignored for the assignment
% they are here purely due to the way Grader assesses the code.
site1 = site(1);
site2 = site(2);
site3 = site(3);
site4 = site(4);
site5 = site(5);
site6 = site(6);
site7 = site(7);
site8 = site(8);
```

## 3

```pseudocode
Ask customer for name
	Store name
Ask what kind of cone they want
	Store type of cone and cost
Ask which flavor they want
	Store flavor and cost
Ask how many scoops they want
	Store as a multiplier
Ask if tip
	Store as a yes/no
Calculate the total
Generate a message based on the total
Print a reciept with all the information
```

```Matlab
function res = ternary(c, a, b)
    if c
        res = a;
    else
        res = b;
    end
end

function res = getValidString(question, validAns)
    while true
        res = input(question, "s");
        if ismember(res, validAns)
            break
        else
            fprintf("Invalid option.\n");
        end
    end
end

function res = getValidNumber(question, validAns)
    while true
        res = input(question);
        if validAns(res)
            break
        else
            fprintf("Invalid option.\n");
        end
    end
end

% Ask customer for name
% 	Store name

name = input("What is your name? ", "s");

% Ask what kind of cone they want
% 	Store type of cone and cost

cones = ["S", "C", "W"];
coneCost = [240, 240, 315];
cone = getValidString("What kind of cone do you want? [S, C, W] ", cones);

% Ask which flavor they want
% 	Store flavor

flavors = ["Blue Cosmo", "Cookie Dough", "Key Lime Pie", "Mango Sorbet"];
flavor = getValidNumber("What kind of flavor do you want? [1: Blue Cosmo, 2: Cookie Dough, 3: Key Lime Pie, 4: Mango Sorbet,] ", @(a) a==1 | a==2 | a==3 | a==4);

% Ask how many scoops they want
% 	Store as a multiplier

scoops = input("How many scoops do you want? ");

% Ask if tip
% 	Store as a yes/no

tip = getValidString("Do you want to tip? [yes, no] ", ["yes", "no"]);

% Calculate the total

total = coneCost(find(cones == cone)) + 110 * scoops;
total = ternary(tip == "yes", total * 1.1, total);
total = round(total);

% Generate a message based on the total

message = "";

if total <= 350
    message = "Thank you!";
elseif total <= 475
    message = "Have a nice day!";
elseif total <= 600
    message = "Come back soon!";
else
    message = "Take care!";
end

% Print a reciept with all the information

fprintf("<o | KIOSK RECEIPT | o>\n");
fprintf("Customer: %s\n\n", name);
fprintf("Order: %s %s %i Scoop%s\n", ...
    ternary(cone == "W", "Deluxe", "Standard"), ...
    flavors(flavor), ...
    scoops, ...
    ternary(scoops > 1, "s", "")...
);
fprintf("Total: $%.2f\n\n", total/100);
fprintf("%s\n", message);
```

