//ANONYMOUS FUNCTION - no name funtion

let x = function (y, z) {
  return y + z;
};

console.log(x(10, 10));
console.log(x(100, 100));

// setTimeout(function () {
//   console.log("hello!");
// }, 5000);

function countDown(num) {
  console.log(num);
  num++;
  if (num <= 10) {
    countDown(num);
  }
}

countDown(0);
