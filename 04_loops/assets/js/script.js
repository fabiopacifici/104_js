/* console.log(10 * 1);
console.log(10 * 2);
console.log(10 * 3);
console.log(10 * 4);
console.log(10 * 5); */


/* 
const userAge_1 = prompt('whats your age?')
const userAge_2 = prompt('whats your age?')
const userAge_3 = prompt('whats your age?')
const userAge_4 = prompt('whats your age?')
const userAge_5 = prompt('whats your age?')
const userAge_6 = prompt('whats your age?')
const userAge_7 = prompt('whats your age?')
const userAge_8 = prompt('whats your age?')
const userAge_9 = prompt('whats your age?')
const userAge_10 = prompt('whats your age?') */



/* .... */



/* const x_userAge_1 = prompt('whats your age?')
const x_userAge_2 = prompt('whats your age?')
const x_userAge_3 = prompt('whats your age?')
const x_userAge_4 = prompt('whats your age?')
const x_userAge_5 = prompt('whats your age?')
const x_userAge_6 = prompt('whats your age?')
const x_userAge_7 = prompt('whats your age?')
const x_userAge_8 = prompt('whats your age?')
const x_userAge_9 = prompt('whats your age?')
const x_userAge_10 = prompt('whats your age?') */


/* lOOPS */


// SYNTAX

/* for (counter; condition; increment/decrement) {
  // codice da eseguire

} */

// i++ -> i = i + 1
for (let i = 0; i < 10; i++) {
  console.log(i * 10);
}

console.log('vado avanti');
//1. i = 0 ? true -> eseguo il codice -> i++ = 0+1
//2. i = 1 ? true -> eseguo il codice -> i++ = 1+1
//3. i = 2 ? true -> eseguo il codice -> i++ = 2+1
//4. i = 3 ? true -> eseguo il codice -> i++ = 3+1
//5. i = 4 ? true -> eseguo il codice -> i++ = 4+1
//6. i = 5 ? true -> eseguo il codice -> i++ = 5+1
//7. i = 6 ? true -> eseguo il codice -> i++ = 6+1
//8. i = 7 ? true -> eseguo il codice -> i++ = 7+1
//9. i = 8 ? true -> eseguo il codice -> i++ = 8+1
//10. i = 9 ? true -> eseguo il codice -> i++ = 9+1
//11. i = 10 ? false -> non eseguo il blocco di codice e vado avanti



/* 💥 Loop infinito */
/* 

for(let i = 0; i < 10;) {
  console.log(i);
}
console.log('vado avanti');
*/
//1. i = 0 ? true -> eseguo il codice 
//2. i = 0 ? true -> eseguo il codice
//3. i = 0 ? true -> eseguo il codice 
//... all'infinito


/* pre-posizione */
let x = 2;

y = ++x;
console.log(x, y); // x = 3, y = 3

/* Post-posisiozione */
let z = 2;

j = z++;

console.log(j, z); // j = 2, z = 3
console.log(z);


/* For Loop + DOM */


const ul = document.querySelector("ul.list");
// const ul = document.querySelector("ul");

for (let index = 0; index < 10; index++) {
  //const element = `<li class="box box--${index}">${index}</li>`;

  const element = document.createElement('li');
  element.append(index)
  ul.append(element)
  //ul.innerHTML += element;
  //ul.insertAdjacentHTML('beforeend', element)

  //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
}


/* 1

<ul class="list">
  <li class="box box--0">0</li>
  <li class="box box--1">1</li>
  <li class="box box--2">2</li>
  ...
  <li class="box box--9">9</li>

</ul>

 */
