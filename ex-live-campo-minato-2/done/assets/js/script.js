console.log('Hello, world!');
/* 


**Consegna **

//campo minato 1
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




//Campo minato 2 


Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


*/



// Select all dom elments
// Select all dom elements
const formDomEl = document.querySelector('form')
const fieldDomEl = document.querySelector('.field')

formDomEl.addEventListener('submit', function (ev) {
  ev.preventDefault()
  let limit = Number(document.getElementById('levels').value)
  //clear the dom element
  fieldDomEl.innerHTML = ''

  // Generate battle field
  generateBattleField(limit, fieldDomEl)

  const bombs = generateBombs(1, limit, 16)
  console.log(bombs);

  // start the game:
  startGame(bombs, limit);
})

function startGame(bombs, limit) {
  // select all cells
  const cells = document.querySelectorAll('.cell');
  let attempts = 0;


  function handleClick(){
    const cellNumber = Number(this.innerText)
    if (bombs.includes(cellNumber)) {
      // game over
      this.innerText = '💣'
      // stop the game
      gameOver(attempts, 'you lose', bombs, handleClick )
    } else {
      attempts++
      // otherwise keep playing
      this.classList.add('bg-green')
      console.log('cool! keep clicking');
      if (attempts === limit - bombs.length) {
        gameOver(attempts, 'you win', bombs, handleClick);
      }
    }
  }

  for (let i = 0; i < cells.length; i++) {
    const cellElement = cells[i];
    // attach eventlistener?
    cellElement.addEventListener('click', handleClick)
  }
}

function gameOver(attempts, message, bombs, handleClick) {
  console.log('game over');
  // remove the event listener (so users cannot click cells again)
  const cells = document.querySelectorAll('.cell');
  // show all bombs
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];

    cell.removeEventListener('click', handleClick)
    if (bombs.includes(Number(cell.innerText))) {
      cell.innerText = '💣'
      cell.style.backgroundColor = 'red'
    }
  }
  showScore(attempts, message)
}

// Rest of your code...


/** 
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/



function showScore(attempts, message) {
  const alertMarkup = `<div class="alert alert-danger">score: ${message}! ${attempts}</div>`

  document.querySelector('.score').innerHTML = alertMarkup
}




/**
 * Generates the battle filed give a cells limit and a dom element
 * @param {number} limit the max amount of cells to create
 * @param {object} fieldDomEl Dom element where insert the cells
 */
function generateBattleField(limit, fieldDomEl) {
  // Generate battle field
  //genererà una griglia di gioco quadrata.
  for (let i = 0; i < limit; i++) {


    // generate the field cell
    //Ogni cella ha un numero progressivo, da 1 a 100.
    const cellMarkupEl = generateCell(i + 1, 'div', 'cell', limit)


    // append to the dom element
    fieldDomEl.append(cellMarkupEl)

  }

}


/**
 * 
 * @param {*} numb The number to insert into the cell
 * @param {string} el the html element tag name to create
 * @param {string} css_class the css class name to appy to the cell
 * @returns {Object}
 */
function generateCell(numb, el, css_class, limit) {

  //console.log(this);
  // generate the field cell
  //Ogni cella ha un numero progressivo, da 1 a 100.
  const cellMarkupEl = document.createElement(el)
  cellMarkupEl.append(numb)
  cellMarkupEl.classList.add(css_class)
  cellMarkupEl.style.width = `calc(100% / ${Math.sqrt(limit)})`


  return cellMarkupEl

}


/* 

Milestone 1: 

Il computer deve generare 16 numeri casuali (nello stesso range della difficoltà prescelta: le bombe) es. da 1 a 100.  
Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

*/

//generare 16 numeri casuali (nel range delle celle 1/100)
//nell’array delle bombe non potranno esserci due numeri uguali

// Create a function to generate an x number of random numbers.

/**
 * generates bombs
 * @param {number} min the lowest numeber to use in the cell generation
 * @param {number} max 
 * @param {number} total 
 * @returns {array}
 */
function generateBombs(min, max, total) {
  const bombs = []
  while (bombs.length < total) {
    const randomNumb = generateRandomNumber(min, max);
    if (!bombs.includes(randomNumb)) {
      bombs.push(randomNumb)
    }
  }

  return bombs
}

function generateRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min))
}


/* 

Milestone 2 

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
*/

