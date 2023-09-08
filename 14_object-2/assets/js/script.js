console.log('Hello, world!');

/* Creazione oggetti semplificata */
/* let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it'; */

//es5 style sempre valido
/* const students = {
  name: name,
  age: age,
  email: email
};

console.log(students); */

//es6 style
/* const students = {
  name,
  age,
  email
};
 */



/* Chiavi dinamiche */
/* 
let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it';

const nameKey = 'fabio';

const student = {
  name: name,
  [nameKey]: age,
  email: email
};



console.log(student);


const userName = student.name
const userEmail = student.email

console.log(userName, userEmail);

*/


/* 🧩 Destructuring */
// Objects destructuring
const student = {
  name: 'Paolo',
  age: 30,
  email: 'paolo@email.it',
  friends: ['Mario', 'Luigi']
};

const { name, email, friends } = student;
console.log(name, email);


console.log(friends);

friends.forEach(friend => {
  console.log(friend);
})




// Array destructuring

const [userName, , catName] = ['Fabio', 'Pacifici', 'Antifa']

console.log(catName);




/* Parametro rest (rest parameter*/


function multiLog(...params) {
  
  params.forEach(param => {
    console.log(param);
  })


}

multiLog() // []
multiLog('uno'); //['uno']
multiLog('uno', 2);// ['uno', 2]
multiLog('uno', 2, {
  name: 'Paolo',
  age: 30,
  email: 'paolo@email.it',
  friends: ['Mario', 'Luigi']
});// ['uno', 2, {}]



// Spred operator
// with objects
const obj = { name: 'palla', peso: 50 };
const copyObj = { ...obj, colore: 'blue' };
console.log(copyObj);
//{name: "palla", peso: 50, colore: "blue"}


// with arrays

const list = ['Learn js', 'Learn php', 'Learn mysql']
const secondList = ['Learn css', 'Learn Laravel']
const thirdArray = [...list, ...secondList]
const invertThirdArray = [...secondList, ...list]



console.log(list);
console.log(secondList);


console.log(thirdArray, 'thid list');
console.log(invertThirdArray, 'invert');



/* Snack 3 */

const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]


const mammiferi = animals.filter(animal => animal.classe === 'mammiferi');

console.log(mammiferi);


/* Snack 4 */

// Creazione dell'array di persone
const persone = [
  { nome: 'Mario', cognome: 'Rossi', eta: 25 },
  { nome: 'Laura', cognome: 'Verdi', eta: 17 },
  { nome: 'Luigi', cognome: 'Bianchi', eta: 35 },
];

// Creazione dell'array con le frasi desiderate
const frasi = persone.map(persona => {
  const puoGuidare = persona.eta >= 18 ? 'può guidare' : 'non può guidare';
  
  //persona.can_drive = `${persona.nome} ${persona.cognome} ${puoGuidare}`
  //return persona // array di oggetti con frasi dentro can_drive
  return `${persona.nome} ${persona.cognome} ${puoGuidare}`; // nuova array con frasi a mo di stringa
});

console.log(frasi); // o array di frasi o array di oggetti con le frasi dentro.


/* Snack 1 blocco 5 */
// Creazione dell'array di zucchine
const zucchine = [
  { varieta: 'Zucchino nero di Milano', peso: 200, lunghezza: 20 },
  { varieta: 'Zucchino romanesco', peso: 180, lunghezza: 18 },
  { varieta: 'Zucchina lunga fiorentina', peso: 150, lunghezza: 15 },
  { varieta: 'Zucchino siciliano', peso: 170, lunghezza: 17 },
  { varieta: 'Zucchina striata di Napoli', peso: 160, lunghezza: 16 },
  { varieta: 'Zucchina bianca triestina', peso: 210, lunghezza: 21 },
  { varieta: 'Zucchina rigata pugliese', peso: 220, lunghezza: 22 },
  { varieta: 'Zucchino tondo di Piacenza', peso: 230, lunghezza: 23 },
  { varieta: 'Zucchino tondo di Nizza', peso: 240, lunghezza: 24 },
  { varieta: 'Zucchino tondo di Firenze', peso: 250, lunghezza: 25 },
];

// Calcolo del peso totale delle zucchine

// con foreach
let total = 0;
zucchine.forEach(zucchina => {
  total += zucchina.peso;
});

console.log(`Il peso totale delle zucchine è ${total} grammi.`);


// con reduce
let pesoTotale = zucchine.reduce((totale, zucchina) => {
  console.log(totale, 'cumulative result'); // sempre disponibile
  console.log(zucchina, 'oggetto in questa iterazione');
  return totale += zucchina.peso

}, 0);



console.log(`Il peso totale delle zucchine è ${pesoTotale} grammi.`);


// reduce one liner
let totalWeight = zucchine.reduce((total, element) => total += element.peso, 0)
console.log(totalWeight);
