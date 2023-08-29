// Select DOM elements
const fieldsElement = document.querySelector('.fields')


/* Option 1 */
// stampa in console i numeri da 1 a 100
/* for (let i = 1; i <= 100; i++) {
  // Creo nuovo elemento della dom 
  const fieldElement = document.createElement('div')
  // gli assegno la classe box
  fieldElement.classList.add('box')
  
  // Se numbero multiplo di 3 stampo “Fizz” al posto del numero
  if (i % 15 === 0) {
    // Se numbero multiplo di 3 e 5 stampo “FizzBuzz” al posto del numero

    //console.log('fizzbuzz');
    fieldElement.append('fizzbuzz')
    fieldElement.classList.add('bg-red')
  } else if (i % 3 === 0) {
    //console.log('fizz');
    fieldElement.append('fizz')
    fieldElement.classList.add('bg-green')


  } else if (i % 5 === 0) {
    // Se numbero multiplo di 5 stampo “Buzz” al posto del numero
    //console.log('buzz');
    fieldElement.append('buzz')
    fieldElement.classList.add('bg-yellow')

  } else {
    // Altrimenti stampo il numero
    //console.log(i);
    fieldElement.append(i)
  } 

  fieldsElement.append(fieldElement)

} */


for (let i = 1; i <= 100; i++) {

  let markup;
  if (i % 15 === 0) {
    markup = `<div class="box bg-red">FizzBuzz</div>`
  } else if (i % 3 === 0) {
    markup = `<div class="box bg-yellow">Fizz</div>`
  } else if (i % 5 === 0) {
    markup = `<div class="box bg-green">Buzz</div>`
  } else {
    markup = `<div class="box">${i}</div>`
  }

  console.log(markup);

  //fieldsElement.insertAdjacentHTML('beforeend', markup) // option 2
  fieldsElement.innerHTML += markup // option 3

}




