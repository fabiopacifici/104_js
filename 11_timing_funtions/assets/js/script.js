// 🤖 JS ⬇ leggo tutto in modo Sincrono
// programmazione sincrona

console.log('Hello, world!'); // ▶ Run


const list = ['Starwars', 'Matrix', 'Imitation game']; // ▶ Run




for (let i = 0; i < list.length; i++) { // ▶ Run
  const element = list[i]; // ▶ Run x numer of times

  console.log(element); // ▶ Run x numer of times
}



console.log('Hello, world 2!'); // ▶ Run (not running if the for loop is still running)


if (10 > 20) { // ▶ Run
  console.log('test 123'); // ▶ Run
}


function calcAge(yob) { // ▶ Run

  console.log('test 2345'); // ▶ Run
}


/* 
Asyncronous Programming 


*/




//Syntax
//setTimeout(callback_function, time_to_wait)

// callback
setTimeout(myFunction, 3000); // wait 3s
function myFunction() {
  // code to run in 3s
  console.log('inside the frist alert 1')
}
console.log('After the timing function 1'); // run

// closure
setTimeout(function () {
  // code to run in 3s
  console.log('inside the timing funciton 2');
}, 3000); // wait 3s

console.log('After the timing function 2'); // run


// 'After the timing function 1' (sincrono)
// 'After the timing function 2' (sincrono)
// After the timing function 1 (asincrono)
// After the timing function 2 (asincrono)



const clock = setInterval(myFunction_2, 1000);



function myFunction_2() {
  console.log('Hello');
}



clearInterval(clock);

/* Ex - timing functions

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!


Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?


*/
