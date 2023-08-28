console.log('Hello, world!');



/* Array declaration */
const students = ['Riccardo', 'Licia', 'Carlo',' Ester'];
// Loggo l'array
console.log(students);
console.log(typeof students);
// get the array length
console.log(students.length)

// Add a nmew elenment to the array

students.push('Federica')
console.log(students);


// leggo un elemento dell'array

console.log('ciao', students[0]); // roiccardo
console.log(students[1]); 
console.log(students[2]); 
console.log(students[3]); 
console.log(students[4]); //federica
console.log(students[5]); //undefined




for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log('ciao', student); 
}

//1. i = 0 -> students[i] // riccardo
//2. i = 1 -> students[i] // licia
//5. i = 4 -> students[i] // Federica
//6. i = 5 ->  students[i]



/* Movies Example */
const movies = [] //
movies.push('matrix')
movies.push('avatar')
movies.push('lion king')
movies.push('imitation game')
movies.push('harry potter')
movies.push('Star wars')

console.log(movies[0]); // matrix
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]); // imitation game ...etc


// seleziono nodo DOM dove inserire gli elementi dell'arra
const ul = document.querySelector('ul')

for (let index = 0; index < movies.length; index++) {
  const movie = movies[index];
  // loggo la variabile che contiene l'emento dell'array in questa iterazione.
  //console.log(movies); // array
  console.log(movie); //stringa

  const liMarkup = `<li>${movie}</li>`

  /* Option 1 - innerHTML */
  //ul.innerHTML += liMarkup
  //ul.innerHTML += `<li>${movie}</li>`




  /* Option 2 - insertAdjacentHTML /insertAdjacentElement*/

  //ul.insertAdjacentHTML('beforeend', liMarkup)


  /* Option 3 - createElement/append */
  const liElement = document.createElement('li')
  liElement.setAttribute('class', 'li-element')
  liElement.setAttribute('id', index)

  liElement.append(movie)
  ul.append(liElement)
  //console.log(liElement);

  
}






