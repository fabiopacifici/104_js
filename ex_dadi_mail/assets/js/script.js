/* 

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.


# toools:
- Math.floor
- Math.random
- const/let
- if/else
- operators >
- console.log
- document.querySelector()

*/

// generate a random number between 1 and 6 for the player
const playerNumber = Math.floor(Math.random() * 6) + 1;

// generate a random number between 1 and 6 for the PC
const pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(pcNumber, playerNumber);

let winner;

// if player number is greather than pc number (Player wins)
if (playerNumber > pcNumber) {
  //console.log('Player wins');
  // else if pc number is greather than player number (PC wins)
  winner = 'Player'
} else if (pcNumber > playerNumber) {
  //console.log('PC wins');
  console.log(`The winner is ${winner}`);
  winner = 'PC'

} else {
  // else the number is the same no body wins
  //console.log('Pari no winner! try again');
  winner = 'No winner'

}



/* Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. 

## tools:
- const/let
- array
- console.log
- prompt
- loop (for)

Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

*/


// create an array of email addresses
const partecipants = [
  'email_1@example.com',
  'email_2@example.com',
  'email_3@example.com',
  'email_4@example.com',
  'email_5@example.com',
]
// ask the email address to the user
const partecipantEmail = 'email_3@example.com'
let canAccess = false;

// loop over the list

  // check that its present in the list
  // if true set can access to true.


for (let i = 0; i < partecipants.length; i++) {
  const thisPartecipantEmail = partecipants[i];
  console.log(thisPartecipantEmail);


  if (thisPartecipantEmail === partecipantEmail) {
    canAccess = true
  } else {
    canAccess = false
  }


}

console.log(canAccess);

if(canAccess) {
  console.log('Welcome to the party');
} else {
  console.log('Go Home dude!');
}