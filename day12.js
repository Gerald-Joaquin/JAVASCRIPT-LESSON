//CONSTUCTION FUNCTION


function Person(first, last) {
  (this.firstName = first),
    (this.lastName = last),
    (this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    });
}

const person1 = new Person("Gerald", "Joaquin");
const person2 = new Person("Mark", "Santos");
const person3 = new Person("Razzel", "Dallego");

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person3.getFullName());

// person1.age = 18;

// person2.greet = function () {
//   console.log("Hello");
// };

// person2.greet();

// ---------------------------------
