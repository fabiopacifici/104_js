/* Select dom elements using querySelector o getElementById */
const leadTextElement = document.getElementById('lead-text');
const titleElement = document.querySelector('h1 > span');
const linkElement = document.querySelector('.btn');

/* Class list */
console.log(linkElement.classList); // solo lettura della lista

// add a class to the list
console.log(linkElement.classList.add('btn-primary'));
// remove a class from the list
console.log(linkElement.classList.remove('btn'));


// Class name
linkElement.className = linkElement.className + ' fabio';
linkElement.className += ' fabio';

console.log(linkElement.className);


/* Inner HTML */
leadTextElement.innerHTML += 'Ciao'
console.log(leadTextElement.innerHTML)


/* Element.style */
leadTextElement.style.color = 'red';
console.log(leadTextElement.style)



/* brief Functions intro */

// syntax (function declaration)
function myAlert(text) {
  console.log('ciao classe');
}
myAlert('ciao') // invoco la funzione usando il suo nome

// anonimous function (non richiamabile cosí)

/* function () {
  console.log('run me');

} */

// non posso invocare la funzione perché non ha nome

document.querySelector('button').addEventListener('click', function(e) {
  //console.log('cliccato su button', e); // e é l'oggetto che rappresenta l'evento scatenato.
  leadTextElement.style.fontSize = '2rem';
});


const div = document.querySelector("div.red");
//metodo che già conosciamo
div.innerHTML += '<p>Mio testo</p>';
//oppure
div.append('Mio testo');
//con questo metodo
//non possiamo usare tag


document.querySelector('button').addEventListener('click', function (e) {
 // loggo in console qualcosa per capire se sto pulsante é stato cliccato

 // se funge, posso:

 // leggere il valore dell'input km 

 // leggere il valore di eventuali altri input

 // fare i calcoli

 // stampare il ticket
});