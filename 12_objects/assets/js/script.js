console.log('Hello, world!');



/* 
Syntax only
OBJECT LITERAL

- conts/let variable_name
- =
- {}
- key: value

// solo oggetto letterale
{
  key: value
}

const my_object = {
  key: value
}


*/


/* Create an object literal 
const ball = {
  //key: value
  "color": "red", // key between quotes or not (optional)
  weight: 100, // key without quoted
  type: 'golf',

}
*/
/* Object with methods */
const user = {
  name: 'fabio',
  lastname: 'pacifici',
  middlename: 'armando',
  job: 'teacher',
  calcAge() {
    console.log('ciao');
  }

}

//console.log(ball); //object
//console.log(user.calcAge());


const user_2 = {
  name: 'fabio',
  lastname: 'pacifici',
  middlename: 'armando',
  job: 'teacher',
  fiends: [
    'fiend 1',
    'friend 2'
  ],
  cat: { name: 'antifa', color: 'black' },

  // ES6
  calcAge() {
    console.log('ciao');
  },

  calc_age: function () { }



}

console.log(user_2.name); // Fabio
console.log(user_2.lastname); // Fabio
console.log(user_2.middlename); // Fabio
console.log(user_2.job); // Fabio




console.log(user_2.cat.name);


/* 📖 Read Object's literal properties */
// con dot notation
user_2.name // fabio
'fabio' // fabio
console.log(user_2.name); // fabio


// con square brackets notation
user_2['cat'] // {}
console.log(user_2['cat']);


//➕  Add properties to an object
// con dot notation
user_2.weight = 78
console.log(user_2);


// con square brackets notation
user_2['height'] = 170

console.log(user_2);


// 📝 Update an object property

user_2.name = 'Fabio'
console.log(user_2);

user_2['lastname'] = 'Pacifici'
console.log(user_2);


/* For In loop */

/* Create an object literal */
const ball = {
  color: "red",
  weight: 100,
  type: 'golf',
  // key does not exist
}

ball.color // color (esiste) é una proprietá dell'oggetto 
ball['type'] // type (esiste) é una proprietá dell'oggetto


// loop

/* Syntax
- for
- (let key in object)
- let key
- in
- object (object in which we want to loop)
- { // code to run}
	
for (let key in ball) {
 console.log(ball[key]);
}

*/




for (const key in ball) {

  //ball.key // key does not exist in the object ball
  console.log(key);
  const value = ball[key]; // 1. key === 'color'  -> 2. key === 'weight' -> 3.
  console.log(` ${key} : ${value} `);

  console.log(value);


}





/* Advanced Data Types */

// Array of arrays
const classi = [
  ['Mattia', 'Giacomo'],
  ['Martina', 'Giorgia']

];


console.log(classi);
console.log(classi[0]); // read the first element in the array
console.log(classi[1][1]); // read the second element in the array



/* Array of objects */


const classesList = [

  {
    'nome': 'Classe 1',
    'numero_studenti': 10
  },

  {
    'nome': 'Classe 2',
    'numero_studenti': 15
  }

];

console.log(classesList); // Array
console.log(classesList[0]); // Object
console.log(classesList[1]); // Object

const class_1 =  classesList[0];
console.log(classesList[1].nome); // classe 2
console.log(classesList[1]['nome']); // classe 2

console.log(class_1.nome); // can use dot notation
console.log(class_1['nome']); // can use [] notation


