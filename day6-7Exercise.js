//FOR LOOPS

let num = 2;

for (let y = 1; y <= 10; y++) {
  console.log(`${num} x ${y} = ${num * y}`);
  //   if (y == 5) break;
}

console.log("----------------------");
let char = ["batman", "ironman", "spiderman", "hulk", "superman"];

for (let x = 0; x < char.length; x++) {
  console.log(char[x]);

  //   if (x == 2) break;
}
console.log("----------------------");

for (let x = char.length - 1; x > -1; x--) {
  console.log(char[x]);
} // the output is reversed

// WHILE LOOPS

console.log("----------------------");
let int = 0;

while (int < 10) {
  console.log(int);
  int++;
}
console.log("congrats");

console.log("----------------------");

let names = [
  "batman",
  "ironman",
  "spiderman",
  "hulk",
  "superman",
  "robin",
  "gagamboy",
  "hawkeye",
  "dr. strange",
  "mr bean",
];
let x = 0;
let search = "ironman";

while (names[x]) {
  if (names[x] == search) {
    console.log(names[x]);
    break;
  }
  x++;
}
console.log("----------------------");
do {
  console.log(names[x]);
  x++;
} while (x < 10);
