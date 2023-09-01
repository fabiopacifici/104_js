console.log('Hello, world!');


/* 
Creare in JavaScript una griglia 8x8. 

Ogni volta che clicco su un quadrato questo si colora di verde

*/


/* const fieldElement = document.querySelector('.filed')
const limit = 64 */
/* 
// generate the field 
for (let i = 0; i < limit; i++) {
  // option 1
   //const cellMarkup = `<div class="cell">${i + 1}</div>`
   //console.log(cellMarkup);
   //fieldElement.insertAdjacentHTML('beforeend', cellMarkup) 

  // option 2
  const cellElement = document.createElement('div')
  cellElement.className = 'cell'
  cellElement.innerText = i + 1
  fieldElement.append(cellElement)

} */


function generateField(domElement, limit) {
  console.log(this);
  
  // generate the field 
  for (let i = 0; i < limit; i++) {

    const cellElement = document.createElement('div')
    cellElement.className = 'cell'
    cellElement.append(i + 1)
    domElement.append(cellElement)

    //console.log(cellElement);

    // aggiungo l'event listener alla cella che ho appena generato
      cellElement.addEventListener('click', function () {
      //console.log('ho cliccato sull elemento dom:', cellElement);
      //console.log(this); // Dom element cellElement
      this.classList.toggle('bg-green')
    })
  }
}

const fieldElement = document.querySelector('.filed')
const limit = 64
generateField(fieldElement, limit)

