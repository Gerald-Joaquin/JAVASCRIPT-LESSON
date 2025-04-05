// WHILE - DO WHILE LOOP

let x = 0;

while (x < 5) {
  console.log("hello");
  x++;
}

//-----------------------------------

let food = ["hotdog", "egg", "bread", "burger"];
let y = food.length - 1;
let z = 0;

while (food[z]) {
  console.log(food[z]); // will output from index 0-4
  z++;
}

while (food[y]) {
  console.log(food[y]); // will output from index 4-0 using food.length
  y--;
}

//-----------------------------------

let color = ["blue", "white", "red", "purple", "violet"];
let a = 0;
let find = "red";

while (color[a]) {
  console.log(color[a]);
  a++;
  if (a == 3) break; //  break funtion
}

while (color[a]) {
  // how to seach a value in while loop
  if (color[a] == find) {
    console.log(color[a]);
    break;
  }
  a++;
}

//DO WHILE LOOP

let b = 0;

do {
  console.log("Gerald Joaquin");
  b++;
} while (b < 5);

let num = [1, 2, 10, 10, 10];
let n = 0;
let sum = 0;

while (num[n]) {
  sum += num[n];
  n++;
}

alert(sum);
