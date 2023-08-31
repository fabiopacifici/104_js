console.log('Hello, world!');
/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore

*/

let numbers = []


/* for (let i = 1; i <= 2; i++) {
  const userNumber = Number(prompt('type a number'))

  if (isNaN(userNumber)) {
    i--
  } else {
    numbers.push(userNumber)
  }
} */


let i = 1;
while ( i <= 2) {
  const userNumber = Number(prompt('type a number'))
  /* Thre is a bug that pops up when the user inserts a string in the first prompt, how would you fix it? */
  if (isNaN(userNumber)) {
    //i-- // do we really need to decrement? what if we are in the first iteration?
    alert('hey, type a number dude!')
  } else {
    numbers.push(userNumber)
    i++
  }
  
}


console.log(numbers);

const pEl = document.createElement('p');

if(numbers[0] > numbers[1]){
  pEl.innerHTML = 'The first number is greather than the second'
} else if (numbers[1] > numbers[0]) {
  pEl.innerHTML = 'The second number is greather than the first'
} else {
  pEl.innerHTML = 'The first and the second number are equal'
}

document.body.append(pEl)


