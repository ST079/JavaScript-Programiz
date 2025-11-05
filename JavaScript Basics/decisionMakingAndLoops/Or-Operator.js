/*
The || Operator
Write a program to check if you qualify for a scholarship based on your academic performance.

Get GPA input and store it in the variable gpa.
Get SAT score input and store it in the variable satScore.
You qualify for a scholarship if gpa is equal to or greater than 3.5, or satScore is equal to or greater than 1200.
If you qualify for the scholarship, display eligible, otherwise display not eligible.
*/
const prompt = require("prompt-sync")();
// Take user input
let gpa = parseFloat(prompt("Enter your GPA: "));
let satScore = parseInt(prompt("Enter your SAT score: "));

// Check scholarship eligibility
if (gpa >= 3.5 || satScore >= 1200) {
    console.log("eligible");
} else {
    console.log("not eligible");
}