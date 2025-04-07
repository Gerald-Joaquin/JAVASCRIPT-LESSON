//OBJECT IN JAVASCRIPT, JAVASCRIPT OBJECT METHOD and THIS KEYWORD

const person = {
  firstName: "Gerald",
  lastName: "Joaquin",
  age: 18,
};
for (let user in person) {
  console.log(user + ":" + person[user]);
}
console.log(person.firstName);
console.log("age" in person);
console.log(typeof person);

//----------------------------

const human = new Object({
  firstName: "Gerald",
  lastName: "Joaquin",
  age: 18,
});

console.log(human);

// object method

const user = {
  firstName: "Gerald",
  lastName: "Joaquin",
  age: 18,
};

function greet() {
  console.log("Hello, " + user.lastName + "!");
}

greet();

