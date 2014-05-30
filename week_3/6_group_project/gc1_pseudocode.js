/*our assumption is we are given the numbers and don't need to create a new array*/

1) I want to be able to sum all the numbers in a group.
#pseudocode
create variable called total which is equal to 0
loop through the number array (which was given to us) 
pass the number array to a block which will add all the numbers

2) I want to be able to calculate the mean of a group of numbers.
#pseudocode
Create new variable named mean 
Have it equal to total / length of the array 

3) I want to be able to calculate the median of a group of numbers.
#pseudocode 
First put the array in order 
then find the length of the array
then divide by 2 
(this should be an if/else statment):
if no remainder, subtract 1 and use that number to call that location in the array.
if there's a remainder, round down and use that number to call the location in the array. 