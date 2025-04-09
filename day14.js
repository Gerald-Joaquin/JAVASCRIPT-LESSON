// JAVASCSRIPT CLASS

class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  greet() {
    return "Hello, " + this.fname + " " + this.lname;
  }

  changeName(newName) {
    this.fname = newName;
  }
}
const person1 = new Person("Gerald", "Joaquin", 19);

console.log(person1);
console.log("Firstname: " + person1.fname);
console.log("Lastname: " + person1.lname);
console.log(person1.greet());

person1.changeName("Mark");

console.log(person1);
console.log("Firstname: " + person1.fname);
console.log("Lastname: " + person1.lname);
console.log(person1.greet());
