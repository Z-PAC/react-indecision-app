class Person {

  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi, ' + this.name + "!";
    return `Hi, I am ${this.name}!`;  // template strings
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }

}

class Student extends Person {

  constructor(name,age,major) {
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()){
      description += ` Their major is ${this.major}.`;
    }
    return description;
    
  }

}

class Traveler extends Person {

  constructor(name,age,homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()){
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
    
  }

}

const me = new Student('Jose Pedro', 26, 'Computer Science');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());

const traveler = new Traveler('Toby', 30, 'Narnia');
console.log(traveler.getGreeting());

const traveler2 = new Traveler('Turner', 30);
console.log(traveler2.getGreeting());