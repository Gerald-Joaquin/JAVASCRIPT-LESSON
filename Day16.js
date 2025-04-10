// JAVASCRIPT EXPRESSION

//ANONYMOUS CLASS EXPRESSION

let Person = class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};

const person1 = new Person("Gerald Joaquin");

console.log(person1.name);

//NAMED CLASS EXPRESSION

const Person1 = class fullName {
  constructor(name) {
    this.name = name;
  }
  get greet() {
    return "Hello! " + this.name;
  }
  set changeName(newName) {
    this.name = newName;
  }
};

const person2 = new Person1("Gerald Joaquin");
console.log(person2.greet);

//-----

person2.changeName = "Mark Santos";
console.log(person2.greet);
