console.log('Hello, world!');

const userAge = prompt('type your age'); // retuns always a string
console.log(userAge);
console.log(Number(userAge));

document.getElementById('age').innerHTML = userAge;