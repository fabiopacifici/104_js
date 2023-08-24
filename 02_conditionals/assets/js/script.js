console.log('Hello, world!');


/* ❓ Conditional Statements */

// Syntax
// IF only
/*
if (condition){
  // blocco da eseguire
} */


//IF/ELSE 
/* 
if (condition){
  // blocco da eseguire
} else {
  // blocco da eseguire
}
*/

//if/elseif/else

/* 
if (condition) {
  // to do
} else if (condition) {
  // todo
} else {
  // blocco da eseguire opzionale (in alcuni casi)
}

*/

const x = 3;
const y = 4;
console.log(x == 12); //false
console.log(x === '12'); // false
console.log(x > 10); // true
console.log(x < 20); //true
console.log(x >= 12); //true




if(x == 12) {
  console.log('I am here');
} else {
  console.log('Altrimenti ci sono io!');
}

if (x == 12) {
  console.log('I am here');
}  else if (y === 4) {
  console.log('y é 4');
} else {
  console.log('Altrimenti ci sono io!');
}

console.log('I am outside');





/* AND/OR/NOT */

if ((x === 12) && (y === 4)) { // true

  // Questo blocco viene eseguito 
  // solo se x è uguale a 3 e Y uguale a 4

  alert('I am running');

}

console.log('Outside');


console.log(y === '4'); // false 


if(!(y === '4')) {
  console.log('siamo nell if');
}

//                 0123
const greetings = 'ciao';

console.log(greetings[3]);

// count string characters
console.log(greetings.length);



