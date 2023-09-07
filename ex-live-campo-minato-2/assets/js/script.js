console.log('Hello, world!');

/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// tools
- eventListener
- let/const
- for
- append
- classList/toggle
- functions

*/



// Select all dom elments
const formDomEl = document.querySelector('form')
const fieldDomEl = document.querySelector('.field')

formDomEl.addEventListener('submit', function (ev) {

  ev.preventDefault()
  // 👉  prepare the battle filed
  //console.log('hey there');
  //console.log(ev);

  


  let level = selectLevel(document.getElementById('level').value)
  //clear the dom element
  fieldDomEl.innerHTML = ''

  // Generate battle field
  //genererà una griglia di gioco quadrata.
  generateBattleField(level, fieldDomEl)


  // Generates bombs
  const bombs = generateBombs(1, level, 16)

  console.log(bombs);
  console.log(bombs.sort(function (a, b) { return a - b }));


  startGame(bombs, level)



  /*
  
  Milestone 2 (game_over()):
  
  In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
  
  
  //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
  cellMarkupEl.addEventListener('click', function (ev) {
    console.log(this);
    this.classList.toggle('bg-green')
    console.log(this.innerText);
  })



  
  la cella si colora di rosso e la partita termina. 
  
  
  Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.


  La partita termina quando:
  -  il giocatore clicca su una bomba 
  - o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

  
  Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

  
  */



})



function startGame(bombs, level){

  // ▶ Start the game

  const cells = document.querySelectorAll('.cell')
  console.log(cells);

  let attempts = 0
  // attach an event on click on every cell
  for (let index = 0; index < cells.length; index++) {
    const cellDomEl = cells[index];
    cellDomEl.addEventListener('click', handleCellsClicks)

  }
  
  
  function handleCellsClicks(){
    console.log(this);
  
    // make sure the inner cell text is a number
    const cellNumber = Number(this.innerText)
  
    if (bombs.includes(cellNumber)) {
      console.log('bomb');
      this.innerText = '💣'
      this.style.backgroundColor = 'red';
      // Game over
      gameOver(bombs, 'you loose', attempts)
  
    } else {
      console.log('safe');
      // option 2
      attempts++
  
      this.classList.toggle('bg-green')

      // option 1
      this.classList.add('safe')

      if(attempts === level - 16) {
        gameOver(bombs, 'you win!', attempts)
      }



    }
  }
  
  
  /* How to remove an event listner  
  Element.addEventListener('click', my_function)
  function my_function (){
  
  }
  Element.removeEventListener('click', my_function)
  */
  

  function gameOver(bombs, message, attempts) {
    console.log(bombs);
    const cells = document.querySelectorAll('.cell')

    for (let index = 0; index < cells.length; index++) {
      const cellDomEl = cells[index];
      console.log(cellDomEl);

      if (bombs.includes(Number(cellDomEl.innerText))) {

        cellDomEl.innerText = '💣'
        cellDomEl.style.backgroundColor = 'red';
      }


      // avoid all cells to be clickable
      cellDomEl.removeEventListener('click', handleCellsClicks)

      // Print the alert
      document.querySelector('.result').innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					<strong>${message} Points</strong>

          /* Option 1 */
          ${document.querySelectorAll('.safe').length}
          
          /* Option 2 */
          ${attempts}
				</div>`

    }


  }
  
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


function selectLevel(levelChoice) {
  //console.log(levelChoice);
  let selectedLevel;
  switch (levelChoice) {
    case '1':
      selectedLevel = 100;
      break;
    case '2':
      selectedLevel = 81;
      break;

    case '3':
      selectedLevel = 49;
      break;

  }

  return selectedLevel;

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

  //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
/*   cellMarkupEl.addEventListener('click', function (ev) {
    console.log(this);
    this.classList.toggle('bg-green')
    console.log(this.innerText);
  }) */


  return cellMarkupEl

}



/* 

Consegna

Milestone 1:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 

Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

Milestone 2 (game_over()):
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


*/


// generare 16 numeri casuali (nello stesso range della difficoltà prescelta)

// nell’array delle bombe non potranno esserci due numeri uguali




/**
 * ### Gennerates Bombs 
 * Generates an x amount of bombs using min, max and limit.
 * @param {number} min the lowest number to use in the bombs generation
 * @param {number} max the hights number to use in the bombs generation
 * @param {number} limit the limit of bombs to generate
 * @returns {array}
 */
function generateBombs(min, max, limit) {
  // generate an empty array
  const bombs = [];

  // loop until the bombs lenght is 16
  while (bombs.length < limit) {
    // generate the random number
    const randomNumber = generateRandomNumber(min, max)
    //console.log(randomNumber);

    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }

  }

  return bombs;

}


//console.log(bombs.sort(function (a, b) { return a - b }));


/** generates random numbers */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





console.log(document.getElementsByClassName('.cell'))