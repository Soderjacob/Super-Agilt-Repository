import fs from 'node:fs';

// Function to read the content of a file and return its content as a string
const readFileLines = filename => fs.readFileSync(filename).toString('UTF8');
let a = readFileLines('counterisNames.txt');
const myArray = a.split(" ");

// Function to generate a random name pair from the array
function  rnd() {
let i = Math.floor(Math.random() * myArray.length);
let j = Math.floor(Math.random() * myArray.length);
 while (j === i) {
   j = Math.floor(Math.random() * myArray.length);
 }
let FirstName = myArray[i];
let SecondName = myArray[j];
 return {FirstName,SecondName};
};

// Call the function to get a random name pair from the array
let randomName = rnd();
console.log(randomName.FirstName,randomName.SecondName);
