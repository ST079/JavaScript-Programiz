/*
Smallest Number
Write a program to find the smallest of three numbers.

Get three integer inputs: n1, n2 and n3.
Find the smallest number and display it.
*/

const prompt = require("prompt-sync")();
// Take user input
let n1 = parseInt(prompt("Enter the first number: "));
let n2 = parseInt(prompt("Enter the second number: "));
let n3 = parseInt(prompt("Enter the third number: "));

// Check if n1 is the smallest
let smallest;
if (n1 <= n2 && n1 <= n3) {
    smallest = n1;
}
// Check if n2 is the smallest
else if (n2 <= n1 && n2 <= n3) {
    smallest = n2;
} else {
    smallest = n3;
}

console.log(smallest);