console.log('Hello, world!');



function miaFunzione() {

  let firstNumber = 0; //questa variabile si vede solo qui dentro

  secondNumber = 10; //ma se dichiaro una variabile senza 
  //var let o const...

}

miaFunzione();
//console.log(firstNumber); //ReferenceError: firstNumber is not defined
console.log(secondNumber); //...si vede anche fuori




/* Esempio 2 */
const nome = 'Marta';


function stampaNome() {

  
  console.log(nome);
}

stampaNome();
// Marta


/* Esempio 3 

const saluto = 'Ciao'; // globale (👿 male se usata nel contesto della funzione)
saluta();

//10 k LOCs dopo…


function saluta() {
  console.log(saluto); // saluto da dove viene?
}
*/

const saluto = 'Ciao';
greetings(saluto);

//…

function greetings(message) {
  console.log(message);
}


const saluto_msg = 'Ciao';
greetings(saluto_msg);



/* Function scope */

function calcUseAge() {
  var userName = 'Fabio'
  let userLastName = 'Pacifici'
  const userAge = '43'
  console.log(userAge, userLastName, userName);
}

//console.log(userName); // reference error
//console.log(userLastName); // reference error
//console.log(userAge); // reference error



/* Block scope */


if (true) {
  //scope
  var user_1 = 'test user 1';
  let user_2 = 'test user 2';
  const user_3 = 'test user 3';

}
console.log(user_1);
//console.log(user_2); // block scoped (reference error)
//console.log(user_3); // block scoped (reference error)



for (let i = 0; i < 3; i++) {
  //scope 
  var user_loop_1 = 'test_1'
  let user_loop_2 = 'test_2'
  const user_loop_3 = 'test_3'


}
console.log(user_loop_1);
//console.log(user_loop_2); reference error
//console.log(user_loop_3); reference error



function my_new_function() {
  //Scope

}


/* What? */


for (let index = 0; index < 10; index++) {
  console.log(index);
}

//console.log(index); // reference Error
/* if (index === 10) {
  console.log(index);
} */


/* What? */
console.log('############################');

a = 0; // 👿 global evil 
b = "buongiorno" // 👿 global evil 
var c = "ciao"; // global 👴

saluta(); // invoke the saluta function

console.log("a is " + a);
console.log("b is " + b);

function saluta() {
  var d = "asd";
  console.log("a is " + a);
  var b = a + 1;
  console.log("b is " + b);
  console.log(c);
}

// a is 0
// b is 1
// ciao
// a is 0
// b is buongiorno