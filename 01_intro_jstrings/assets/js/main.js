/* hoisting 
var userAge;
console.log(userAge); undefined */
/* 
 Data Types
- string

*/
/* Strings */
'ciao'
'4'
'ciao classe'
"Ciao"
"5"

console.log('Hello Classe 104');



/* Variables with strings */

// Variables declaration

//const myFistName;
let myFistName;
var myLastName;


console.log(myFistName, myLastName); // undefined undefined


/* Const */

const constantString = 'mio valore';
//constantString = 10;
//Uncaught TypeError: Assignment to constant variable.

const constantArray = [];
//constantArray = 'Pippo';
//Uncaught TypeError: Assignment to constant variable.

const constantObject = {
  'name': 'Pippo'
}
//constantObject = [];
//Uncaught TypeError: Assignment to constant variable.
console.log('I am here');


/* Let */


let userName = 'Fabio';
console.log(userName);
console.log('userName');

// re-assign the variable
userName = 'Marco';
console.log(userName);


/* Hoisting */


// Var é soggetta ad hoisting
console.log(userAge); // undefined
var userAge = 43;
console.log(userAge); // 43


// Let non soggetto hoising
//console.log(userAge_2); // undefined

let userAge_2 = 44;
console.log(userAge_2); // undefined


/* Variabili best practices */

// variabili ok
//let userAge; // camel case
//let user_age; // underscore case


// variabili non ok
//❌let user age Con lo spazio js pensa che vogliamo due variabili
// Assegnazione multipla di variabili
let user, age;
user = 'Fabio';
age = 43;

// ❌ let my-first-name = 'Fabio'; il trattino é il meno in matematica e quindi cerca di fare operazioni matematiche tra le variabili.


// dichiarazione variabile
let miaStringa;

// assegnazione
miaStringa = 'ciao';
// utilizzo/richiamo
//alert(miaStringa);

// assegnazione
miaStringa = 'arrivederci';
// utilizzo/richiamo
//alert(miaStringa);



/* Strings concatenation */


// esempio di stringhe
const stringaVirgolette = "Stringa tra virgolette.";
const stringaApici = 'Stringa tra apici';



// concatenazione di stringhe
const myStringa = "Rosso" + " " + "Acceso";
//alert(myStringa); // cosa uscirà?

/* 

// numeri o stringhe?
*/
const stringa = '8'; //questa è una stringa
const numero = 8; //questo è un numero

// type coercion - javascript converte in automatico il numero in una striga e poi fa la concatenazione invece di una somma.
// stringa + stringa(numero) = 88

// Trasformo stringa numerica in un numero

console.log(Number(stringa) + numero);


/* string interpolation */

let string = 'Qui';
let stringTwo = 'Qua';
console.log(
  `${string} Quo ${stringTwo}
  Andarono al mercato
 `
);


//Qui Quo Qua
//Andarono al mercato

console.log(`${string} ciao ciao ${myStringa}`);


/* NUMBERS */

// addizione, con il segno +
let somma = 4 + 4;
console.log(somma);
// sottrazione, con il segno -
let sottr = somma - 3;
console.log(sottr);

// divisione, con il segno /
let divisione = somma / 2;
console.log(divisione);
// moltiplicazione, con il segno*
let molt = sottr * 2; 
console.log(molt);
