/* 

Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23


Tools:
- prompt
- let/const
- console.log()
- document.getElementById('id')

*/


//Chiedi all’utente il suo nome,
const userName = prompt('Type your name here');
// chiedi il suo cognome
const lastName = prompt('Type your lastname here');
// chiedi il suo colore preferito 
const favouriteColor = prompt("what's your favourite color");

//console.log('👉', userName, lastName, favouriteColor);


//il risultato, va formattato in questo modo: nomecognomecolorepreferito23
const result = `${userName + lastName + favouriteColor}23`;
// scrivi in pagina (non solo in console) il risultato
//console.log(result);
// seleziono l'elemento della dom nel quale mettere il risultato
const passwordElement = document.getElementById('password');
//console.log(passwordElement);
// prendo il suo innerHTML gli assegno il valore della variabile result
passwordElement.innerHTML = result;
