/* 

Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.

 */


// seleziono gli elementi della dom
const formEl = document.querySelector('form');
const nameEl = document.getElementById('name');
const kmEl = document.getElementById('km');
const ageGroupEl = document.getElementById('age-group');
const ticketEl = document.querySelector('.ticket');
const passengerNameEl = document.querySelector('.ticket .passenger-name')
const offerNameEl = document.querySelector('.ticket .offer-name')
const wagonNumberEl = document.querySelector('.ticket .wagon-number')
const cpNumberEl = document.querySelector('.ticket .cp-number')
const ticketPriceEl = document.querySelector('.ticket .ticket-price')

// ascolto per l'evento submit scatenato sul form (eventListner 'submit')
formEl.addEventListener('submit', function(e) {
  console.log('form submitted');
  e.preventDefault();
  //ticketEl.innerHTML = '' cleanm the ticket before generation

  // leggo il valore dell'input name
  const passengerName = nameEl.value;
  // leggo il valore dell'input km
  const km = Number(kmEl.value);
  // leggo valore del select age-group
  const ageGroup = ageGroupEl.value;

  //console.log(passengerName, km, ageGroup);
  // calcolo il prezzo del ticket
  let ticketPrice = km * 0.21;
  let discountMessage = 'Prezzo pieno';


  // verificare se utente é minore di 18 anni, se si applica sconto del 20%
  if (ageGroup === 'minor') {
    ticketPrice = ticketPrice - (ticketPrice * 0.2);
    discountMessage = 'Scontato del 20%';
  } else if (ageGroup === 'over65') {
    //console.log('sei over 65, ti faccio il 40%');
    ticketPrice = ticketPrice - (ticketPrice * 0.4);
    discountMessage = 'scontato del 40%';
  }


  // calcolare un numero random per il codice della carrozza
  let wagonNumber = Math.floor((Math.random() * 10) + 1);
  // cacolare numero random per codice cp
  let cpNumber = Math.floor((Math.random() * 10000) + 5000);


  console.log('Price: $' + ticketPrice.toFixed(2), discountMessage, passengerName, wagonNumber, cpNumber);

  // stampo il ticket in pagina
  // show the ticket
  //ticketEl.style.display = 'block';
  ticketEl.classList.remove('d-none')
  
  // fill the ticket info [option 1]
 /*  passengerNameEl.innerText = passengerName
  offerNameEl.innerText = discountMessage
  wagonNumberEl.innerText = wagonNumber
  cpNumberEl.innerText = cpNumber
  ticketPriceEl.innerText = ticketPrice.toFixed(2) */

  /* Option 2 con markup nel js */

  const markup = `
  	<div class="card-body">
				<h3>Ticket</h3>


				<div class="d-flex justify-content-around">

					<div>
						<h6>Passenger Name</h6>
						<div class="passenger-name">${passengerName}</div>
					</div>
					<div>
						<h6>Offer</h6>
						<div class="offer-name">${discountMessage}</div>
					</div>
					<div>
						<h6>Wagon Number</h6>
						<div class="wagon-number">${wagonNumber}</div>
					</div>
					<div>
						<h6>CP</h6>
						<div class="cp-number">${cpNumber}</div>
					</div>
					<div>
						<h6>Price</h6>
						<div class="ticket-price">${ticketPrice.toFixed(2)}</div>
					</div>
				</div>
			</div>
      `

  //ticketEl.innerHTML += markup


  /* Option 3 */
  ticketEl.insertAdjacentHTML('afterbegin', markup)    

  // reset the input values
  nameEl.value = ''
  kmEl.value = ''
  ageGroupEl.value = 'adult'

})


formEl.addEventListener('reset', function(){
  //ticketEl.style.display = 'none'
  ticketEl.classList.add('d-none')
  ticketEl.innerHTML = ''

})