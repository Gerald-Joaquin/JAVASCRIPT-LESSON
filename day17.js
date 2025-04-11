//SUPER CLASS IN JAVASCSRIPT

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("hello " + this.name);
  }
}
class Student extends Person {
  //child class
  // constructor(name) {   // super class method
  //   super(name);
  // }
  greet() {
    console.log("Hello Student " + this.name);
  }
}

const student1 = new Person("Gerald"); // parent
student1.greet();

const student2 = new Student("Gerald"); // child
student2.greet();

// static method

class Human {
  constructor(name) {
    this.name = name;
  }
  static greet(x) {
    console.log("hello " + x.name);
  }
}

const person1 = new Human("Gerald");

Human.greet(person1);

// private method

class Human1 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  #fullName() {
    return this.firstname + " " + this.lastname;
  }

  display() {
    console.log(this.#fullName());
  }
}

const person2 = new Human1("Gerald", "Joaquin");

person2.display();

//privat static method

class Human2 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  static #fullName(x) {
    return x.firstname + " " + x.lastname;
  }

  display() {
    console.log(Human2.#fullName(this));
  }
}

const person3 = new Human1("Gerald", "Joaquin");

person3.display();
