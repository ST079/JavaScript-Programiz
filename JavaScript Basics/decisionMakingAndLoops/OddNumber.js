/*
Print Odd Numbers
Write a program to display only the odd numbers between 1 and n.

Use a loop to iterate from 1 to n (inclusive).
In each iteration, check if the current number is even. If it is, skip the current iteration.
If the current number is odd, display the number.
*/
const prompt = require("prompt-sync")();
// Get integer input
let n = parseInt(prompt("Enter an integer: "));

// Iterate from 1 to n (inclusive)
for (let number = 1; number <= n; number++) {
  // Skip printing if the number is even
  if (number % 2 == 0) {
    continue;
  }

  console.log(number);
}
