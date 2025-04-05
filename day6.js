// FOR LOOP

// for(VARIABLE;CONDITION,OPERATION)

for (let x = 0; x < 5; x++) {
  console.log("hello world!");
}

for (let num = 0; num < 150; num += 11) {
  console.log(num);
}

let food = ["hotdog", "egg", "bread", "burger"];

for (let x = 0; x < food.length; x++) {
  console.log(food[x]);
  console.log("-------------");
}

for (let x = food.length - 1; x > -1; --x) {
  // will output in reverse type
  console.log(food[x]);
  console.log("************");
}

for (let x = 0; x < food.length; ++x) {
  // will output egg because it it equal to 1 and print it 4 times as per food lenght function
  console.log(food[1]);
}

// USING BREAK

let color = ["blue", "white", "red", "purple", "violet"];

// for (let colors = 0; colors < color.length; ++colors) {
//   console.log(color[colors]);
//   if (colors == color.lenght) break;
// }

for (let colors = color.length - 1; colors > -1; --colors) {
  console.log(color[colors]); // will output in reverse mode
  if (colors == 0) break;
}
