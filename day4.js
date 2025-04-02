// OPERATORS IN JAVASCRIPT

// ARITHMETIC OPERATORS

let a = 100;
let b = 100;
let c = 70;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % c);
console.log(a ** c);

// INCREMENT AND DECREMENT

let x = 5;

console.log(x++); //will show 5
console.log(++x); //will show 7 because in first increment the value was already increase but it didnt show on the console because only the first value of variable will only appear at your console.
console.log(--x); //will show 5 at because it was decreased

// COMPARISION OPERATOR

let y = 10,
  z = 20;

console.log(y == z);
console.log(y === z);
console.log(y != z);
console.log(y !== z);
console.log(y < z);
console.log(y > z);
console.log(y <= z);
console.log(y >= z);

// LOGICAL OPERATORS

let f = false,
  g = true;

console.log(g && f); // both must be true to output true
console.log(g || f); // one must be true to output true
console.log(!g); // if the value is false it will output true, if the value was true it will output false
console.log(!f); // same as above

// TERNARY OPERATORS - NOT COMMONLY USED BECAUSE IT JUST LIKE IF STATEMENTS

let age = 27;
let status = age >= 18 ? "Adult" : "Minor";

console.log(status); // "Adult"
