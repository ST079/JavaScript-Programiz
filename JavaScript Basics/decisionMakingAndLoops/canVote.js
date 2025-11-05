const prompt = require("prompt-sync")();
// Get integer input
let age = parseInt(prompt("Enter your age:"));

// Check if age is 18 or higher
if (age >= 18) {
  console.log("The person can vote.");
}
else{
    console.log("The person cannot vote.");
}
