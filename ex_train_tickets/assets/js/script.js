/* 
DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.


## Tools:
- prompt
- let/const
- if/else
- console.log
- getElementById
- .toFixed(x) !Attenzione - la documentazione dice che restituisce una stringa!! da verificare.


*/


// chiedere all'utente il numero di chilometri da percorrere
const km = Number(prompt('Quanti km vuoi percorrere?')); // 10
// chiedere eta passeggero
const userAge = Number(prompt('Quanti anni hai?')); // 20
const price_per_km = 0.21;

// calcolare il prezzo totale del viaggio (0.21 € al km)
let ticket_price = km * price_per_km;
let discount_message = 'Il prezzo pieno é stato applicato.';
console.log('👉',km, userAge, price_per_km, ticket_price);

// verificare se utente é minore di 18 anni, se si applica sconto del 20%
if (userAge < 18) {
  ticket_price = ticket_price - (ticket_price * 0.2);
  discount_message = 'Il prezzo applicato é scontato del 20%';
} else if(userAge > 65) {
  console.log('sei over 65, ti faccio il 40%');
  ticket_price = ticket_price - (ticket_price * 0.4);
  discount_message = 'Il prezzo applicato é scontato del 40%';

}
console.log('Price: $' + ticket_price.toFixed(2), discount_message);
// verifica se utente é over 65, se si applica sconto del 40%

// [nota] altrimenti il prezzo é pieno (niente sconto)

