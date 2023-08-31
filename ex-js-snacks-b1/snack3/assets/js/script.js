let sum = 0;
/* for (let i = 0; i < 3; i++) {
  const userNumber = Number(prompt('type a number'))

  if (!isNaN(userNumber)) {
    sum += userNumber
  } else {
    i--
  }

} */


let i = 0;
while ( i < 3) {
  const userNumber = Number(prompt('type a number'))

  if (!isNaN(userNumber)) {
    sum += userNumber
    i++
  } 

}


document.writeln(`Sum: ${sum}`)