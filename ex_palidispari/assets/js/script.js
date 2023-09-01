
/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

# Cosa é un palindomo?
é una parola che letta al contrario si legge uguale. es. otto


*/

const word = 'otto' // global
/* 
// slitto la parola in un array
const splitted_word = word.split('')

//console.log(splitted_word);

// rovescio l'array
const reversed_array = splitted_word.reverse()
console.log(reversed_array);

// riunisco l'array in una stringa
const reversed_word = reversed_array.join('')

//console.log(word, reversed_word); */

/**
 * 
 * Reverse a word
 * @param {string} word 
 */
function reverseWord(word) {

  return word.split('').reverse().join('')

}

/**
 * 
 * @param {string} word the word to check
 * @returns 
 */
function is_palindrom(word) {

  const reversed_word = reverseWord(word)
  if (word === reversed_word) {
    return true
  }
  return false
}

/* 
if(is_palindrom('ada')){
  console.log('palindromo');
} else {
  console.log(' non palindromo');

}
 */



/* Exploration */

// [split] scorrendo in una parola, seleziono i singoli caratteri e li inserisco in array


// creo un array vuota
const splitted_word = []
//uso un ciclo per scorrere nella stringa (é una sequenza di caratteri, come un array é una sequenza di elementi)
for (let i = 0; i < word.length; i++) {
  //recupero il singolo carattere dalla stringa
  const char = word[i];
  //pusho nell'array vuota il singolo carattere.
  splitted_word.push(char)
}
// loggo la parola 
console.log(splitted_word);

/**
 * 
 * @param {string} word 
 * @returns array
 */
function split_this_word(word) {
  // creo un array vuota
  const splitted_word = []
  //uso un ciclo per scorrere nella stringa (é una sequenza di caratteri, come un array é una sequenza di elementi)
  for (let i = 0; i < word.length; i++) {
    //recupero il singolo carattere dalla stringa
    const char = word[i];
    //pusho nell'array vuota il singolo carattere.
    splitted_word.push(char)
  }
  // return the splitted word 
  return splitted_word;

}

const my_splitted_word = split_this_word('otto')


// [reverse] scorro nell'array al contrario (decremento), in ciascuna seleziono il carattere e lo pusho in una nuova array
/* const reversed_word_as_array = []
for (let i = my_splitted_word.length - 1; i >= 0; i--) {
  const char = my_splitted_word[i];

  reversed_word_as_array.push(char)
  
}

console.log(reversed_word_as_array); */

function reverse_array(my_array) {
  const reversed_word_as_array = []
  for (let i = my_array.length - 1; i >= 0; i--) {
    const char = my_array[i];

    reversed_word_as_array.push(char)

  }

  return reversed_word_as_array;

}
const my_reversed_word_as_array = reverse_array(my_splitted_word)
console.log(my_reversed_word_as_array);
// [join] scorro nell'array che ho rovesciato, in ciascuna iterazione seleziono il carattere, lo contateno ad una stringa inizialmente vuota

let my_reversed_word = ''

for (let i = 0; i < my_reversed_word_as_array.length; i++) {
  const char = my_reversed_word_as_array[i];
  my_reversed_word += char
}
console.log(my_reversed_word);

// [check palindrom] se la stringa della parola rovesciata é identica alla stringa della parola originale (é un palindromo)  [altrimenti] non a palindrom

if(word === my_reversed_word) {
  console.log('palindom');
} else {
  console.log('not palindrom');
}



/*
// Pari e Dispari


 





Dichiariamo chi ha vinto.

*/



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = 'pari' // prompt('type pari o dispari)
const userNumber = 2 // Number(prompt('type a number between 1 and 5))
/* TODO Validate the user input */

if(isNaN(userNumber)){
  alert('not a number')
}

/* if(userNumber < 1 || userNumber > 5) {
  alert('devi inserire numbero tra 1 e 5')
}

if (userChoice.toLowerCase() !== 'pari' || userChoice.toLowerCase() !== 'dispari') {
  alert('devi inserire pari o dispari')
} */



//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

const pcNumber = generateRandomNumber(1, 5)

//Sommiamo i due numeri
const result = sum(userNumber, pcNumber)
console.log(userNumber, pcNumber, result);


//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
/* if(result % 2 === 0) {
  console.log('pari');
} else {
  console.log('dispari');
} */

function is_even(numb) { 
  
  if (numb % 2 === 0) {
    return 'pari';
  } 
  return 'dispari'
  //return numb % 2 === 0
 }


if (is_even(result) === userChoice) {
  console.log('😎 You win!');
} else {
  console.log('😫 You lose!');

}







/* Funzioni sempre soggette ad hoisting e quindi possono essere usate prima della loro dichiarazione */
// sum(1,4) 
/**
 * Sum two numbers
 * @param {number} num_1 the first number to sum
 * @param {number} num_2 the second number to sum
 * @returns number
 */
function sum(num_1, num_2) {
  return num_1 + num_2
}
// sum(1,4)













/**
 * Generate a random number between a min and a max value.
 * 
 * @param {number} min The minimum number to generate
 * @param {number} max The maximum number to generate
 * @returns number
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
