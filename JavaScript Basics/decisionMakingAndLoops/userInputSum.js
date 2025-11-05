/*
Find User Input Sum
Write a program to calculate the sum of positive numbers entered by the user.

The program should accept input as long as the user enters positive numbers.
If the user enters a negative number or zero, the loop should terminate.
Don't include the final number (0 or negative number).
*/
const prompt = require("prompt-sync")();

// Get a number input
let n = parseFloat(prompt("Enter a number: "));

// Initialize the total variable
let total = 0;

// Loop as long as the number is positive
while (n > 0) {
    total += n;    // Add the number to the total
    n = parseFloat(prompt("Enter a number: "));    // Take input again
}

// Print the total
console.log(total);