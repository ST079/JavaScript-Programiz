/*
Add Three Numbers
Write a program to add three numbers.

Define a function addThreeNums(), which takes three arguments n1, n2, and n3.
Inside the function, find the sum of n1, n2, and n3 and store it in a variable.
Take 3 inputs from the user outside of the function and store them to num1, num2, and num3 as numbers.
Call the function by passing the required arguments.
Print the result inside the function.
*/
const prompt = require("prompt-sync")();

// Create addThreeNums function that takes 3 arguments
function addThreeNums(n1, n2, n3) {
    let sum = n1 + n2 + n3;
    console.log(sum);
}

// Take user input for 3 numbers
let num1 = Number(prompt('Enter the first number:'));
let num2 = Number(prompt('Enter the second number:'));
let num3 = Number(prompt('Enter the third number:'));

// Call the function with 3 arguments
addThreeNums(num1, num2, num3);

