/*
Print Multiples of 3 and 5
Write a program that prints numbers that are multiples of both 3 and 5 between 1 and n.

Get an integer input from the user and store it to n. We'll assume the user will enter a positive integer.
Use a loop to iterate from 1 to n (inclusive).
In each iteration, check if the number is a multiple of both 3 and 5. If it is, print the number.
Hint: You need to use the and operator in the if statement condition.
*/
const prompt = require("prompt-sync")();
// Get integer input
let n = parseInt(prompt("Enter a positive integer: "));

// Iterate from 1 to n (inclusive)
for (let number = 1; number <= n; number++) {
  // Check if number is divisible by both 3 and 5
  if (number % 3 == 0 && number % 5 == 0) {
    console.log(number);
  }
}
