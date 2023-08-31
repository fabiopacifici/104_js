console.log('Hello, world!');

// 🤔 calculate the user age given its yob

//🤔 calculate the user age given its yob

const yob_2 = 1990; // prompt('whats your yob')
const currentYear_2 = new Date().getFullYear()

console.log(yob_2, currentYear_2);

const userAge_2 = currentYear_2 - yob_2

console.log(userAge_2);



console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');


//🤔 calculate the user age given its yob

const yob_3 = 1995; // prompt('whats your yob')
const currentYear_3 = new Date().getFullYear()

console.log(yob_3, currentYear_3);

const userAge_3 = currentYear_3 - yob_3

console.log(userAge_3);



console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');
console.log('I am doing something');


/* 
Function declaration

// without parameter
function name(){
  // logic here
}


// with parameters
function name(param1, param2, param3, etc etc){
  // logic here
  // can read all parameters

}

*/

/* function sommaNumeri(num1, num2) {
  // 
  console.log(num1);
  alert(num1 + num2);

} */

//sommaNumeri(5, 9)


/* function calcAge(year_of_birth) {
  console.log(year_of_birth); //undefined se l'utente non passa il parametro alla funzione quando la invoca calcAge()

  const year_of_birth = 'ciao';

  const currentYear = new Date().getFullYear()
  const userAge = currentYear - year_of_birth
  console.log(userAge);
}

console.log(currentYear); // function (local) scoped 
const year_of_birth = Number(prompt('type your yob'));
/* Invoke (usa) the calcAge function */

//calcAge(1890)
//calcAge(year_of_birth)


//alert('Ciao! hai x anni!')

let num2 = 20 // global variable

/**
 * 
 * @param {number} num1 just a number
 * @param {number} num2 just another number
 * @returns {number} returns a number
 */
function sommaNumeri(num1, num2) {
  const result = num1 + num2
  console.log(result);

  return result


}

//console.log(result); // ReferenceError: result is not defined

console.log(sommaNumeri(4, 5)) // return (read) e loggo


5 + 5 // leggo ma non loggo
console.log(5 + 5) // leggo e loggo


/* 
const currentYear = new Date().getFullYear()
function calcAge(year_of_birth, currentYear) {
  return currentYear - year_of_birth;
}

calcAge(1980, currentYear) // uso la variabile
calcAge(1980, new Date().getFullYear()) // oppure inline


 */


sommaNumeri(1)




const first_number = 100;


/**
 * # isEven function
 * This function checks if a number is even and returns true/false
 * 
 * @param {number} first_number Just an integer number 
 * @returns {boolean}
 */
function isEven(first_number) {
  if (first_number % 2 === 0) {
    return true
  }
  return false

}

console.log(isEven(10) === false); // true === true

sommaNumeri()

if (isEven('cio')) {
  console.log('pari');
} else {
  console.log('dispari');
}



/* Event listener con funzione anonoma o callback function */
/* NON Possibile riusare la logica della funzione */

document.querySelector('button').addEventListener('click', function(ev){
/* zdzfkasd[f lpkfd
sd;foksdfoksadf
sdfposdoasdf] */
})


/* Possibile riusare la logica della funzione */
document.querySelector('button').addEventListener('click', myFunction)




function myFunction(ev) {
  /* zdzfkasd[f lpkfd
sd;foksdfoksadf
sdfposdoasdf] */
}




document.querySelector('button.btn').addEventListener('click', myFunction)
