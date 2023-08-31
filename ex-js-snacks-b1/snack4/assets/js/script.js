/* 

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

const numbs = []

for (let i = 0; i < 3; i++) {
  const userNumb = Number(prompt('type a number'));

  if(userNumb % 2 !== 0) {
    numbs.push(userNumb)
  }
  
}
console.log(numbs);
document.writeln(numbs)