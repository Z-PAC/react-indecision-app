// ES5 function
const square = function (x) {
  return x*x;
}

// ES6 - arrow functions
const squareArrow = (x) => { 
  return x*x; 
};

// More concise syntax for single expression functions
const squareArrow2 = (x) => x*x;

console.log(squareArrow2(9));

// Challenge
const getFirstName = (username) => {
  return username.split(' ')[0];
}
const getFirstNameShort = (username) => username.split(' ')[0];

const name = 'Jose Pedro';
console.log(getFirstName(name));
console.log(getFirstNameShort(name));

// arguments object - is no longer bound
const add = function (a,b) {  // ES5
  console.log(arguments); // returns a,b and other arguments the user passes
  return a+b;
};
console.log(add(55,1));

const addArrow = (a,b) => {
  // console.log(arguments) // doesn't exist
  return a+b;
};
console.log(addArrow(55,2));

// this keyword - no longer bound
const user = {
  name: 'Jose',
  cities: ['Lisbon', 'Tokyo'],
  printPlacesLived: function() {

    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {
      // console.log(this.name + ' has lived in ' + city); // 'this' doesn't exist
    });

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  },
  printPlacesLivedArrow: () => {  // ES6
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {   // 'this' doesn't exist
      console.log(this.name + ' has lived in ' + city);
    });

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  },
  printPlacesLived2() {
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city + '!';
    });
    return cityMessages;
  }
}
console.log(user.printPlacesLived2());

// Challenge
const multiplier = {
  numbers: [1, 3, 5],
  multiplyBy: 2,
  multiply() {
    const result = this.numbers.map((val) => {
      return val*this.multiplyBy;
    });
    return result;
  }
}
console.log(multiplier.multiply());

