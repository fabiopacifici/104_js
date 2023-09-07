const team = [

  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },

  {
    name: "Walter Gordo",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },

  {
    name: "Angela Lope",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrad",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  },

];


// element
// index
// array

/* for (let i = 0; i < team.length; i++) {
  const element = team[i];

  console.log(element);
  
} */


/* Syntax */
// element, index, array
/* team.forEach((element, index, array)=>{
  console.log(element);
  console.log(index);
  console.log(array);

}) */

// params can have the name you want
/* team.forEach((member, i, my_team) => {
  console.log(member);
  console.log(i);
  console.log(my_team);

}) */
//team.forEach(function(){ })


// foreach/arrow function
team.forEach(member => {
  console.log(member);

})


/* Esempio 2 */
const cats = [
  { name: 'Jerry', color: 'Gray',  },
  { name: 'Felix', color: 'Black and White' },
  { name: 'Garfield', color: 'Orange' },
];

cats.forEach((element) => {
  console.log(`${element.name}'s color is ${element.color}`);
});

console.log('**********');
cats.forEach((element) => {
  return `${element.name}'s color is ${element.color}`;
});



/* Map */
// must return a new value to put in a new array
const numeri = [1, 2, 3, 4, 5];
const quadrati = numeri.map((numero, index, array) => {

  const sum = numero + 2
  return sum;
});

console.log(numeri);
console.log(quadrati); // [1, 4, 9, 16, 25]


/* Filter */
// must return true or false
const numbers = [1, 2, 3, 4, 5];
const pari = numbers.filter((numb, index, array) => {
  if (numb % 2 === 0) {
    return true;
  }
  return false;
});
console.log(pari); // [2, 4]


/* Semplificazione intermedia 
const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter((numero) => {
  return numero % 2 === 0;
});
console.log(pari); // [2, 4]
*/

// single line
const numbs = numbers.filter(numb => numb % 2 === 0)
console.log(numbs);