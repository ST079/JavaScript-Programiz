/*
Countdown to Launch
Write a program to simulate a rocket launch countdown.

The program should display the countdown timer alongside the seconds elapsed at each step.

Task requirements:

Take the starting countdown value (in seconds) as input.
Use a while loop to display the remaining countdown time and elapsed time at each step.
Print a separator (---) after every update for better readability.
End the program with the message: "Liftoff!".
*/
const prompt = require("prompt-sync")();
// Take the starting countdown value as input
let countdown = parseInt(prompt("Enter starting countdown number: "));
let elapsed = 0;

// Use a while loop to display the countdown and elapsed time
while (countdown > 0) {
    console.log(`Time left: ${countdown} seconds`);
    console.log(`Elapsed: ${elapsed} seconds`);
    console.log("---");
    countdown -= 1;
    elapsed += 1;
}

// After the countdown reaches 0, print the final time
console.log(`Time left: ${countdown} seconds`);
console.log(`Elapsed: ${elapsed} seconds`);
console.log("---");
console.log("Liftoff!");