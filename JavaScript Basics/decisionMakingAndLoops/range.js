/*
Print Numbers Within a Range
Write a program to continuously ask integer input from the user.

If the number is between 1 (inclusive) and 100 (inclusive), print the number.
However, if the number is outside this range, terminate the loop.
*/
const prompt = require("prompt-sync")();
while (true) {
  // Get input from the user
  let number = parseInt(prompt("Enter an integer:"));

  // Terminate the loop if the number is outside the range 1 to 100
  if (number < 1 || number > 100) {
    break;
  }

  // Print the number if it's within the range
  console.log(number);
}