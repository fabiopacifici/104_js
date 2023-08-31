console.log('Hello, world!');
/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

/*
let words = [] // '123', 'ciao'
 for(let i = 1; i <=2; i++) {
  const userWord = prompt('type a word')
  words.push(userWord)
 }
let i = 1;
while ( i <= 2) {
  const userWord = prompt('type a word')
  words.push(userWord)

  i++
} */


/* 
console.log(words);

const pEl = document.createElement('p');

if(words[0].length > words[1].length){
  pEl.innerHTML = 'The first word is longer than the second'
} else if (words[1].length > words[0].length) {
  pEl.innerHTML = 'The second word is longer than the first'
} else {
  pEl.innerHTML = 'The first and the second word are equal'
}

document.body.append(pEl)
 */

/* 


Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/




let sum = 0;
let y = 0

/* for (let y = 0;y < 3; y++) {
  const userNumber = Number(prompt('type a number'))

  console.log(userNumber);
  if (!isNaN(userNumber)) {
    sum += userNumber

  }

} */


while(y < 3){
  const userNumber = Number(prompt('type a number'))
  
  console.log(userNumber);
  if(!isNaN(userNumber)) {
    sum += userNumber
    y++
  }

}


console.log(sum);
