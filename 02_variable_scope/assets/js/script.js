/* 

Variable scope

*/

const userName = 'fabio'; // global

/* 
if(1 > 1) {
  console.log(userName);

}


function name(params) {
  console.log(userName);
}
 */


let animal_2; // globale
if (1 == 1) {
  //var animal = 'cat'; // globale
  //let animal_2 = 'dog'; // block scoped variable
  animal_2 = 'dog'; // global variable
  console.log(animal_2); // dog

}

//console.log(animal);
console.log(animal_2);


console.log('###################################');

let validation = true;
const wordA = "Word A"; // globale
let wordB = "Word B"; // globale
let wordC;
if (validation === true) {
  wordC = "Word Ccc"; // block scoped [non esce da qui dentro]
  console.log(wordB); //  Word B
  let wordB = "Word Custom B";
  console.log(wordA); //Word A
  console.log(wordB); // Word Custom B
  console.log(wordC); // Word C
  
}

function name(params) {
  let wordX = "Word X"; // local scoped [non esce da qui dentro]
  
}


console.log(wordA); // Word A
console.log(wordB); // Word B
console.log(wordC); // Error



