//CALLBACKS IN JAVASCRIPT

function display(result) {
  // will serve as printer
  console.log(result);
}

function add(num1, num2, callback) {
  // will serve as operator
  let sum = num1 + num2;
  callback(sum);
}

add(220, 20, display); // will output the result by calling back to the functions

function display(result) {
  // will serve as printer
  console.log(result);
}

function string(fname, lname, callback) {
  // will serve as operator
  let check = fname + lname;
  callback(check);
}

add("Mark Gerald ", "Joaquin", display);

function waitAndRun(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

waitAndRun(3, function () {
  console.log("3 seconds later... Hello!");
});
