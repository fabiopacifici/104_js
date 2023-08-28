/* 

Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100, 
a che:
 - per i multipli di 3 stampi “Fizz” al posto del numero
- e per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// tools
- console.log x100
- for loop
- if/elseif/else
- module operator %

- element.append()
- document.createElement()
*/

// Select DOM elements
const fieldsElement = document.querySelector('.fields')

// stampa in console i numeri da 1 a 100
// - counter variabile da inizializzare
// - condition
// - incremento/decremento
for (let i = 1; i <= 100; i++) {
  //console.log(i);
  // Se numbero multiplo di 3 stampo “Fizz” al posto del numero
  // Creo nuovo elemento della dom 
  const fieldElement = document.createElement('div')
  // gli assegno la classe box
  fieldElement.classList.add('box')

  if (i % 15 === 0) {
    // Se numbero multiplo di 3 e 5 stampo “FizzBuzz” al posto del numero
    //console.log(i % 3 === 0 && i % 5 === 0); // option 1
    //console.log(i % 15 === 0); // option 2
    console.log('fizzbuzz');
    fieldElement.append('fizzbuzz')
    fieldElement.classList.add('bg-red')
  } else if (i % 3 === 0) {
    console.log('fizz');
    fieldElement.append('fizz')
    fieldElement.classList.add('bg-green')


  } else if (i % 5 === 0) {
    // Se numbero multiplo di 5 stampo “Buzz” al posto del numero
    console.log('buzz');
    // Altrimenti stampo il numero
    fieldElement.append('buzz')
    fieldElement.classList.add('bg-yellow')

  } else {
    console.log(i);
    fieldElement.append(i)
  }

  fieldsElement.append(fieldElement)

}

//console.log(i);



