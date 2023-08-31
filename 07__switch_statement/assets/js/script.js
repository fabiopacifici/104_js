let day;
console.log(new Date().getDay());


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);


// 3 === 0 ? day = sunday (if false) -> next case 
// 3 === 1 ? day = Monday (if false) -> next case 
// 3 === 2 ? day = Thesday (if false) -> next case 
// 3 === 3 ? day = Wednesday  -> break (exit from the switch) 


switch (true) {
  case new Date().getDay() === 0:
    day = "Sunday";
    break;
  case new Date().getDay() === 1:
    day = "Monday";
    break;
  case new Date().getDay() === 2:
    day = "Tuesday";
    break; // se manca il break il caso sotto viene eseguito
  case new Date().getDay() === 3:
    day = "Wednesday";
    break;
  case new Date().getDay() === 4:
    day = "Thursday";
    break;
  case new Date().getDay() === 5:
    day = "Friday";
    break;
  case new Date().getDay() === 6:
    day = "Saturday";
}



switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}


// 4 === 4 

let fruits = 'Kiwi'

switch (fruits) {

  case "Banana":
    alert("Hello")
    break;

  case "Apple":
    alert("Welcome")
    break;

  default:
    alert('not found')
}
// 'Apple' ==== 'Banana' -> false
// 'Apple' ==== 'Apple' -> true

console.log(123);

/* 

let fruits = 'Kiwi'

switch (true) {

  case fruits === "Banana":
    alert("Hello")
    break;

  case fruits === "Apple":
    alert("Welcome")
    break;

  default:
    alert('not found')
}
// 'Apple' ==== 'Banana' -> false
// 'Apple' ==== 'Apple' -> true

console.log(123);



*/




if(fruits === 'Banana') {
  // do something
} else if (fruits === 'Apple') {
  // do something

} else {
  // do something

}
