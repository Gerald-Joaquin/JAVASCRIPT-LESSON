// SCOPE IN JAVASCRIPT

// GLOBAL SCOPE

var x = "hello!"; // can use the variables globally

function example() {
  console.log(x);
}

example();
console.log(x); // can use outisde of the variables

// FUNCTION SCOPE can use the variables only inside the function

function example() {
  var greet = "Hello!";

  console.log(greet);
}
example();

// console.log(y); // UNDEFINED - only the inside of the function/variable can read

// BLOCK SCOPE can use the variables only inside the block of code and cannot be use outside of functon or even inside  of the function

function example() {
  if (true) {
    let name = "Gerald";
    console.log(name); //can use only inside of its block of code
  }
}
example();
