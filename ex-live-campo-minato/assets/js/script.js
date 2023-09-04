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
  //console.log('hey there');
  //console.log(ev);
  let limit = 100
  //clear the dom element
  fieldDomEl.innerHTML = ''

  // Generate battle field
  //genererà una griglia di gioco quadrata.
 generateBattleField(limit, fieldDomEl)


})



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

  console.log(this);
  // generate the field cell
  //Ogni cella ha un numero progressivo, da 1 a 100.
  const cellMarkupEl = document.createElement(el)
  cellMarkupEl.append(numb)
  cellMarkupEl.classList.add(css_class)
  cellMarkupEl.style.width = `calc(100% / ${Math.sqrt(limit)})`

  //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
  cellMarkupEl.addEventListener('click', function(ev){
    console.log(this);
    this.classList.toggle('bg-green')
    console.log(this.innerText);
  })


  return cellMarkupEl

}
