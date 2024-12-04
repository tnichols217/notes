# Question 3

A nearby database recently went out of power and they need help recovering their database. Unfortunately, the names of the backups for their databases were also lost in the power outage. They managed to recover the journal of the database they are trying to recover, in `journal.txt`, which records all changes to the database after the previous backup on each line. It has columns for the item id, previous value, and new value for items in the database. Find which backup (provided as `backup#.txt`) was the correct backup of the database, and recover the database at the time of the incident. Then, write the recovered database in the same format as the backups to `restored.txt`.

## Sample answer:

```Matlab
readf = @(f) cell2mat(arrayfun(@(x) arrayfun(@str2double, split(f(x))), 2:length(f), UniformOutput=false))';
transaction = readf(readlines("journal.txt"));
num_transaction = length(transaction);
match = false;
for n=[2, 3, 5]
    if match break; end
    data = readf(readlines(sprintf("backup%i.txt", n)));
    match = true;
    for i=1:num_transaction
        row = find(data(:,1)==transaction(i,2));
        match = ~isempty(row) & data(row,2) == transaction(i,3);
        if match
            correct = n;
            data(row,2) = transaction(i,4);
        end
    end
    if ~match continue; end
end
if match
    header = readlines(sprintf("backup%i.txt", correct));
    writelines([header(1), arrayfun(@(x) sprintf('%i\t%g', data(x, 1), data(x, 2)), 1:length(data), UniformOutput=false)], "restored.txt");
    fprintf("The correct backup was found! It was backup %i", correct);
else
    disp("Backup not found :(");
end
```
