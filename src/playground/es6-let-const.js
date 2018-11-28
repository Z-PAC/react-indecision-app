// ES5 - var
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// ES6 - let. Does not allow re-declaration
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// ES6 - const. Does not allow re-declaration or re-definition
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hel';
  return petName;
}

console.log(getPetName());


var fullName = 'Jen Mead';

// 'var' is function scoped. 'let/const' are block scoped
if(fullName){
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);