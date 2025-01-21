import { readFile } from 'fs';

// code for reading from text file and convert to array
// and select randomly two names from array and print 
// them with there length.

readFile('counterisNames.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file: ' + err);
    return;
  }
    const a = data.split(" ");
let i = Math.floor(Math.random() * a.length);
let j = Math.floor(Math.random() * a.length);
  while (j === i) {
    j = Math.floor(Math.random() * a.length);
  }
let FirstName = a[i];
let SecondName = a[j];
  console.log(FirstName, FirstName.length);
  console.log(SecondName, SecondName.length);
});