/* 🤓 Functions Recap */


/* my_function_name()
// 👉 Function declaration
function my_function_name(params) {

}

my_function_name()
 */

// 👉 function expression

/* const my_second_function = function(){

}

my_second_function()
 */

/* Anonymous function */

// 🙃 cannot be invoked
/* function() {

} */


// inside an event listener

/* element.addEventListener('click', function(){

}) */



// IIFE (immediately invoked function expression)

(function () {

  console.log('Invoked');

})();



function greetings() {
  console.log(this, 'greetings'); // window objes
}


greetings()



document.querySelector('h1').addEventListener('click', function () {


  console.log(this); // dom element h1

})




/* Arrow Functions 

- () sono opzionali se c'é un solo parametro, altrimenti sono obbligatorie
- =>
- {} sono opzionali, se il codice é su una sola righa, altrimenti sono obbligatorie
- return | é implicito se la funzione non usa le graffe, altrimenti va messo esplicitamente
- this | viene ereditato dall'ambito del genitore

*/



// Option 1
// without params -> () mandatory
// graffe
// return esplictito
const calcAge = () => {
  // ....

  console.log(this, '😒');
  return 10 + 10
}

calcAge();


// Option 2
// rounded parethesis () required
// curly brackets not required
// no return required

const calc_age = () => 10 + 10 // 20


// Ometto tutto
// no rounded ()
// no curly
// no return


/* function calc_my_age(year_of_birth) {
  return new Date().getFullYear() - year_of_birth
} */

const calc_my_age = year_of_birth => new Date().getFullYear() - year_of_birth;

console.log(calc_my_age(1980))


//const calc_my_age = function(year_of_birth) {return new Date().getFullYear() - year_of_birth};






/* const myFunction = age => age + 1 // 
myFunction(10) // 11 */










//funzione anonima
document.querySelector('h1').addEventListener('click', function () {

  console.log(this); // h1

})

document.querySelector('p').addEventListener('click', () => {

  console.log(this); // windows

})


/* 

WHAT

*/

const myFunction = () => 1 + 1;  //← qui abbiamo il return implicito
console.log(myFunction()); // otteniamo 2


const myFunction2 = () => { 1 + 1 };  //← qui non abbiamo un valore di return
console.log(myFunction2()); // otteniamo undefined

const myFunction3 = () => 'pippo';
console.log(myFunction3()); // pippo


console.log(myFunction3);

const anotherFunction = function() {
  return 'hi'
}

console.log(anotherFunction); // codice sorgente della funzione


//const calc_my_age = year_of_birth => new Date().getFullYear() - year_of_birth;


function is_even(numb){
  return numb % 2 === 0;
}

console.log(is_even());
