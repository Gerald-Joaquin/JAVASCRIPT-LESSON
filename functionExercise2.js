//simple arithmetic operation using function and callbacks

function display(result) {
  console.log(result);
}
function add(x, y, callback) {
  let sum = x + y;
  callback(sum);
}

function subtract(x, y, callback) {
  let minus = x - y;
  callback(minus);
}

function multiply(x, y, callback) {
  let product = x * y;
  callback(product);
}

function divide(x, y, callback) {
  let quotient = x / y;
  callback(quotient);
}

add(10, 10, display);
subtract(30, 10, display);
multiply(10, 10, display);
divide(100, 10, display);
