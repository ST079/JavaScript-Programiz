/*
Reverse Countdown
Write a program to print numbers from n to 1 using a while loop.

Get an integer input from the user and store it in variable n.
Create a variable i with value n.
Use a while loop that runs from i = n to i = 1.
Inside a while loop, print the value of i.
*/
const prompt = require("prompt-sync")();

// Get user input
let n = Number(prompt("Enter the value of n:"));

// Initialize i with the value of n
let i = n;

// Use a while loop to print numbers from n to 1
while (i >= 1) {
    console.log(i);
    i--;    // Decrease i by 1 in each iteration
}