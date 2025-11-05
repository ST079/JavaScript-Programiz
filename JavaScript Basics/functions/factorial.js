/*
Find Factorial of a Number
Write a program to compute the factorial of a number.

The factorial of a positive integer n is equal to:

factorial = 1 * 2 * 3 * ... * n
Step 1

Define a function named computeFactorial() that takes a single parameter n.
Inside the function, compute the factorial.
Return the factorial.
Step 2

Outside of the function:

Get an integer input from the user and store it in the number variable.
Call computeFactorial() with number as an argument, and assign the returned value to the total variable.
Print the total variable.
Assumption: The user will enter a non-negative integer.
*/
const prompt = require("prompt-sync")();
function computeFactorial(n) {
  let factorial = 1;

  // Compute factorial
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  // Return the factorial
  return factorial;
}

// Get user input
const number = parseInt(prompt("Enter a positive integer: "));
const total = computeFactorial(number);

// Print total
console.log(total);