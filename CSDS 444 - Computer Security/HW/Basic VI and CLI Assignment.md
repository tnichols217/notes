# Basic VI and CLI Assignment

Trevor Nichols
tln32

## 1

Create a directory called logs and change the permissions so that only the owner can add files to the log directory and anybody (including group and everyone else) can read and execute the directory.

Submit a screenshot showing the command to make the directory, the command to set the permissions, and an `ls -l` to show the permissions.

> [!answer]
> ![[attachments/Pasted image 20250911035731.png]]

## 2

Create a file called `todos.txt` using vi. Put in 3 things you like to do on 3 separate lines. Then in control mode, type the following `:set number`. Submit a screenshot while you are still in vi with the number option set.

> [!answer]
> ![[attachments/Pasted image 20250911035829.png]]

## 3

Rename the file called `todos.txt` to `completed.txt`. Submit a screenshot that shows the command to rename the file and the output from the `ls` command.

> [!answer]
> ![[attachments/Pasted image 20250911035902.png]]

## 4

Make a copy of the file `completed.txt` to a new directory called `docs`. Submit a screenshot of the command to make the directory, perform the copy, and the output from ls confirming it was copied (not moved).

> [!answer]
> ![[attachments/Pasted image 20250911040017.png]]

## 5

Using the following: `cat`, `wc`, and `|` (pipe), print out only the number of characters in `completed.txt` (the one that you moved into docs) while being in your home directory (Do not change directory into docs). To find out more information about `wc`, you can use the following: `man wc` which will show the manual for the program.

> [!answer]
> ![[attachments/Pasted image 20250911040113.png]]
