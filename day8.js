// FUNCTION IN JAVASCRIPT

// FUNCTION
function function1() {
  console.log("HELLO!");
}
function1();

//ARGUMENTS AND PARAMETERS
function string(fname, lname, mname) {
  // PARAMETERS
  console.log("hello! " + fname + " " + lname + " , " + mname);
}
string("Gerald", "Joaquin", "S"); // ARGUMENTS

// DEFAULT PARAMETERS
function sum(x, y = 0) {
  // Y = 0 is a default value
  console.log(x + y);
}
sum(100);

// FUNCTION RETURN

function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Gerald");
console.log(message);

//------------------------------

function multiply(x, y) {
  return x * y;
}

let product = multiply(4, 6);
console.log("Product is: " + product);

//--------------------------------

function applyDiscount(price, discount) {
  return price - (price * discount) / 100;
}

let total = applyDiscount(100, 10);
console.log("total: " + total);
