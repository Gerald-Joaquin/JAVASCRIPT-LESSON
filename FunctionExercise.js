//Basic

// function greet() {
//   console.log("Good Morning!");
// }
// greet();0

// with parameter and arguments
function sum(x, y) {
  console.log(x + y);
}
sum(10, 20);

//return function

function sum2(x, y) {
  return x + y;
}

let add = sum2(10, 10);
console.log(add);

//---------------------------------

function greet(greetings) {
  return "HELLO! " + greetings + " mabuhay";
}
let message = greet("MADLANG PEOPLE");
console.log(message);

// callbacks

function fullName(username) {
  console.log(username);
}

function sum1(fname, lname, callbacks) {
  let sum = fname + " " + lname;
  callbacks(sum);
}

sum1("Gerald", "Joaquin", fullName);

//anonymous function

let print = function (a, b) {
  return a + b;
};

console.log(print(10, 10));

function countdown(num2) {
  console.log(num2);
  num2++;

  if (num2 <= 10) {
    setTimeout(function () {
      countdown(num2);
    }, 2000);
  } else {
    console.log("done");
  }
}
countdown(0);
