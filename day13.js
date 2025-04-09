//JAVASCRIPT OBJECT PROTOTYPE

//constructor
function Person(first, last) {
  (this.fname = first), (this.lname = last);
}

//inital object prototype
Person.prototype.age = 18;
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

const person1 = new Person("Gerald", "Joaquin");

console.log(person1);
console.log(person1.age + " Years old");
console.log(person1.getFullName());

// changing object prototype

Person.prototype.age = 19;
const person2 = new Person("Razzel", "Dallego");

console.log(person2);
console.log(person2.age + " Years old");
console.log(person2.getFullName());

Person.prototype.age = 20;
Person.prototype.gender = "Male";
const person3 = new Person("Mark", "Santos");

console.log(person3);
console.log(person3.age + " Years old");
console.log(person3.gender);
console.log(person3.getFullName());
