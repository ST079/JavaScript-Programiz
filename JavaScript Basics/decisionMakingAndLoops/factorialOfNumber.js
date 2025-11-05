/*
Write a program to find the factorial of an integer entered by the user.

The factorial of a positive integer n is equal to 1 * 2 * 3 * ... * n. For example, the factorial of 4 is 1 * 2 * 3 * 4 which is 24.

Get an integer input from the user and assign it to the variable n. We will assume the user will always enter a positive integer.
Using a for loop, compute the factorial.
Outside the loop, print the factorial.

Hint: This problem is similar to the sum of natural numbers problem we recently wrote. See code outline for more hints.
*/
const prompt = require("prompt-sync")();
// Get user input
let n = Number(prompt("Enter a positive integer:"));

// Initialize factorial variable
let factorial = 1;

// Compute the factorial using a for loop
for (let i = 1; i <= n; i++) {
  factorial *= i;
}

// Print the factorial
console.log(factorial);
