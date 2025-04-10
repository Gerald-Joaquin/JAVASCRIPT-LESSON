// GETTERS AND SETTERS IN JAVASCRIPT

// GETTER METHOD - A method that gets (returns) the value of a property.
class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  get greet() {
    // GETTER METHOD
    return "Hello, " + this.fname + " " + this.lname;
  }

  set changeName(newName) {
    //SETTER METHOD
    this.fname = newName;
  }
}

const person1 = new Person("Gerald", "Joaquin", 19);
console.log(person1.greet); // can directly acccess the method with parethesis
console.log(person1);

//SETTER METHOD - A method that sets (updates) the value of a property.

person1.changeName = "Mark"; // Lets you validate or modify the data before setting the property
console.log(person1.greet); // Using getter method
console.log(person1);

