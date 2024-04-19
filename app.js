// // Assignemnt Part 12 (Math Methods)
// //Question 01
// let num1 = prompt("Enter a Number1 in Decimals");
// console.log(num1);
// num1 = Math.abs(num1);
// const num1_roundoff = Math.round(num1);
// const num1_floor = Math.floor(num1);
// const num1_ceil = Math.ceil(num1);
// console.log(num1_roundoff);
// console.log(num1_floor);
// console.log(num1_ceil);



// //Question 02
// let num2 = prompt("Enter a Negative Number2 in Decimals");
// console.log(num2);
// num2 = Math.abs(num2);
// const num2_roundoff = Math.round(num2);
// const num2_floor = Math.floor(num2);
// const num2_ceil = Math.ceil(num2);
// console.log(num2_roundoff);
// console.log(num2_floor);
// console.log(num2_ceil);



// //Question 03
// let num3 = -50;
// console.log(num3);
// console.log(`Abosolute value = ${Math.abs(num3)}`);



// //Question 04
// Dice Game 
const Dice1 = Math.round((Math.random()*6))
const Dice2 = Math.round((Math.random()*6))
console.log(`Random Dice-1: ${Dice1}  Random Dice-2:${Dice2}`);



// //Question 05
let coin  = ["heads" , "tail"];
rollcoinIndex1 = Math.random()*1 ;
rollcoinIndex1 = Math.round(rollcoinIndex1)
rollcoinIndex2 = Math.random()*1 ;
rollcoinIndex2 = Math.round(rollcoinIndex2)
console.log(rollcoinIndex1 , coin[rollcoinIndex1])
console.log(rollcoinIndex2 , coin[rollcoinIndex2])
 



// //Question 06
let random = Math.random()*100 + 1;
console.log("Random Number :",Math.round(random));





// //Question 07
// Ask the user for their weight
let userInput = prompt("Please enter your weight:");
let weight = parseFloat(userInput);
console.log("The Weight of User is:",weight,"kilograms");



//Secret Guessing Game
// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let user_input = prompt("Guess the secret number (between 1 and 10):");
user_input = parseInt(user_input);
if (user_input >= 1 && user_input <= 10) {
    if (user_input === secretNumber) {
        alert("Congratulations! You guessed the secret number!");
    } else {
        alert(`Sorry, the secret number was ${secretNumber}. Try again!`);
    }
} 
else {
    alert("Please enter a number between 1 and 10.");
}
