const readlineSync = require('readline-sync'); // Importing readline-sync for user input

let name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}! Welcome to the Values, Data Types, and Operations Quiz.`); // 1. Prompting the user for their name and greeting them

// 2. Asking 5 questions 
let question1 = readlineSync.question('Q1: What is the result of 5 + "8"? (Answer with your explanation): '); // Q1 testing understanding of number and string operation (e.g., 5 + "8").
let question2 = readlineSync.question('Q2: What is the type of the following value: 42? (Answer with a data type): '); // Q2 testing knowledge of JavaScript's data types (e.g., 42 is a number).
let question3 = readlineSync.question('Q3: What is the result of 10 / 2? (Answer with a number): '); 
let question4 = readlineSync.question('Q4: What is the result of "hello" * 3? (Answer with your explanation): '); // Asking about how JavaScript handles operations with strings ("hello" * 3 will result in NaN).
let question5 = readlineSync.questionInt('Q5: How many characters are there in the string "JavaScript"? (Enter a number): '); // Asking for the length of the string. 

// 3. Store the answers in variables
let answer1 = question1;
let answer2 = question2;
let answer3 = question3;
let answer4 = question4;
let answer5 = question5;

// 4. Printing the answers back to the user
console.log('\nYour Quiz Results:');
console.log(`1. Your answer for Q1: "${answer1}"`);
console.log(`2. Your answer for Q2: "${answer2}"`);
console.log(`3. Your answer for Q3: "${answer3}"`);
console.log(`4. Your answer for Q4: "${answer4}"`);
console.log(`5. Your answer for Q5: "${answer5}"`);


console.log("\nThank you for taking the quiz!");

