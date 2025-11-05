/*
Write a function to perform basic mathematical addition.

Create a function sum()
Prompt the user to input two numbers: num1 and num2 and display the result.
Call the sum() function.
*/

const prompt = require("prompt-sync")();
// Create the sum function
function sum() {
    // Get user input
    let num1 = parseFloat(prompt('Enter the first number:'));
    let num2 = parseFloat(prompt('Enter the second number:'));
    // Calculate sum
    let result = num1 + num2;

    // Display the sum
    console.log(result);
}

// Call the sum function
sum();