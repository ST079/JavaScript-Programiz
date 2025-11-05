/*
Function Arguments
Create a function to print a person's information.

Step 1

Create a function named displayInfo().
This function must accept two arguments: name and location.
Print name and location in two separate lines.
Step 2

Outside of the function:

Get a string input from the user and assign it to the country variable.
Call the displayInfo() with arguments: the "Taylor" string and the country variable, respectively.
*/
const prompt = require("prompt-sync")();
// Create displayInfo() function that takes 2 arguments
function displayInfo(name, location) {
    console.log(name);
    console.log(location);
}

// Take user input
let country = prompt('Enter country:');
// Call the function with arguments "Taylor" and country
displayInfo("Taylor", country);