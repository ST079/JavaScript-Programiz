/*
Check Positive, Negative, or Zero
Write a program to check whether a number is positive, negative, or zero.

Get integer input from the user and store it in the number variable.
If number is positive, print positive.
If number is negative, print negative.
If number is 0, print zero.
*/

const prompt = require("prompt-sync")();
// Get user input
let number = parseInt(prompt("Enter an integer:"));

// Check if the number is positive, negative, or zero, and print the result
if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero");
}