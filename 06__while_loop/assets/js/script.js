console.log('Hello, world!');


/* For loop */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//console.log(i);

/* While loop 

while (condition) {
  // run the code

  // aggiungi un istrizione che modifichi la condizione al fine di interrompoere il loop
}

// outside
*/

/* Meglio il for di questa soluzione */
let i = 0; // counter
while ( i < 10) { // <-- condition
  console.log(i);
  
  i++ // incremento/decremento
}
console.log(i); // la i é globale e quindi accssibile qui fuori


/* 'meglio' il for */
let index = 0;
const list = [1, 2, 4 ,5]
while (index < list.length) {
  const element = list[index]; 
  console.log(element);

  j++
}



/* Tutta la vita il While */
/* ################ ESEMPIO WHILE LOOP GAME ############### */
/* let play = true;

while (play) {
  
  // crate random number for pc
  const pcNumb = Math.floor(Math.random() * 6) + 1 
  // crate random number for player
  const playerNumb = Math.floor(Math.random() * 6) + 1

  // show the winner
  const winner = 'player'
  //TODO: decide the wiiner 

  alert(`${winner} - ${playerNumb}${pcNumb}`)


  // mettere un istruzione per terminare il loop (altrimenti éun loop infinito)
  play = confirm('Do you want to play again?')
  console.log(play);

}

console.log('Outside the loop'); */

/* Do while */


let x = 110; // counter

do {
  console.log(x); // 110

  x++ // incremento/decremento 111
} while (x < 10) 

// fuori dal do-while

