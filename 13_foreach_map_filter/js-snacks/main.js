/* 


Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.


*/


const cars = [
  { brand: 'Fiat', model: 'Punto', fuel_type: 'benzina' },
  { brand: 'Volkswagen', model: 'Golf', fuel_type: 'diesel' },
  { brand: 'Renault', model: 'Clio', fuel_type: 'benzina' },
  { brand: 'Tesla', model: 'Model S', fuel_type: 'elettrico' },
  { brand: 'Toyota', model: 'Yaris', fuel_type: 'ibrida' },
  { brand: 'BMW', model: 'X5', fuel_type: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel_type: 'benzina' },
  { brand: 'Mercedes', model: 'C-Class', fuel_type: 'diesel' },
  { brand: 'Hyundai', model: 'Tucson', fuel_type: 'gpl' },
  { brand: 'Volvo', model: 'XC90', fuel_type: 'metano' }
];


/* 
In questa soluzione: 

- tonde rimosse (c'é un solo parametro)
- graffe rimosse
- return implicito

*/
const petrol = cars.filter(function (car) {
  return car.fuel_type === 'benzina';
})

// cars 
// car = { brand: 'Fiat', model: 'Punto', fuel_type: 'benzina' },
//1. car.fuel_type === 'benzina' ? true 👍
//2.  car.fuel_type === 'benzina' ? false 
//3.  car.fuel_type === 'benzina' ? true 👍
// ....
//x. car.fuel_type === 'benzina' ? true 👍
// ...



console.log(petrol); // 
/* 
petrol = [ 
  { brand: 'Fiat', model: 'Punto', fuel_type: 'benzina' },
  { brand: 'Renault', model: 'Clio', fuel_type: 'benzina' },
  { brand: 'Audi', model: 'A4', fuel_type: 'benzina' },
]
 */


const diesel = cars.filter(car => car.fuel_type === 'diesel')

/* 

array.filter((car) => {
  return car.fuel_type === 'diesel'
})

*/

// cars 
// car = { brand: 'Fiat', model: 'Punto', fuel_type: 'benzina' },
//1. car.fuel_type === 'diesel' ? false
//...
//x.  car.fuel_type === 'diesel' ? true 👍
// ....
//x. car.fuel_type === 'diesel' ? true 👍
// ...


console.log(diesel); // 
/* 
diesel = [ 
    { brand: 'Volkswagen', model: 'Golf', fuel_type: 'diesel' },
    { brand: 'BMW', model: 'X5', fuel_type: 'diesel' },
    { brand: 'Mercedes', model: 'C-Class', fuel_type: 'diesel' }
]
 */






const others = cars.filter(car => car.fuel_type !== 'diesel' && car.fuel_type !== 'benzina')

console.log(others);
/* 

others = [ 
  { brand: 'Tesla', model: 'Model S', fuel_type: 'elettrico' },
  { brand: 'Toyota', model: 'Yaris', fuel_type: 'ibrida' },
  { brand: 'Hyundai', model: 'Tucson', fuel_type: 'gpl' },
  { brand: 'Volvo', model: 'XC90', fuel_type: 'metano' }
]
*/






/* 
console.log(diesel);
 */




/* Snack 2 */


/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

  Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


/* v1 */

const names = ['faBio', 'SerEna', 'ANTIFA']
const newStrings = names.map(name => {

  // take the first character of the string and make it uppercase
  let firstChar = name.charAt(0).toUpperCase();
  // take the rest of the string and make it lowercase
  let restOfCharsToLower = (name.slice(1)).toLowerCase()
  // contatenates the two pieces togheter and return them
  return firstChar + restOfCharsToLower

})


console.log(newStrings); // ['Fabio', 'Serena', 'Antifa']

/* 
const newStrings = names.map(name => {

  return name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase()

})


*/


/* v2 one liner*/
const newNames = names.map(name => name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase())
console.log(newStrings);