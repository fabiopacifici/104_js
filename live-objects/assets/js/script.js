console.log('Hello, world!');


/* 

Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
Consigli del giorno
- Scriviamo sempre prima in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


*/

const student = {
  name: 'Fabio',
  lastname: 'Vasi',
  age: 27,
  image: 'https://'
}

student['name'] // Fabio
student.name // Fabio

for (const key in student) {
  const value = student[key]
  console.log(value);
}



// Array of objects

const students = [
  {
    name: 'Fabio',
    lastname: 'Vasi',
    age: 27,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Antonio',
    lastname: 'Cucuzza',
    age: 21,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Marco',
    lastname: 'Zellini',
    age: 21,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Elisa',
    lastname: 'Boscani',
    age: 21,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Federica',
    lastname: 'Campo',
    age: 21,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Licia',
    lastname: 'Licari',
    age: 25,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Ester',
    lastname: 'Dahri',
    age: 21,
    image: 'https://picsum.photos/400/200'
  },
  {
    name: 'Valentina',
    lastname: 'De Mite',
    age: 21,
    image: 'https://picsum.photos/400/200'
  },

]

const rowDomElement = document.querySelector('.students .row')
console.log(rowDomElement);

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  console.log(student.name);
  console.log(student.lastname);
  console.log(student.age);

  const markup = `
  <div class="col-12 col-md-4">			
      <div class="card">
        <img class="card-img-top" src='${student.image}' alt='' />
        <div class="card-body">
          <h4>${student.name + ' ' + student.lastname}</h4>
          <p>${student.age}</p>
    
        </div>
      </div>
    </div>`

    //console.log(markup);

    rowDomElement.insertAdjacentHTML('beforeend', markup)


}
