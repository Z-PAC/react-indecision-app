import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor(){
//     this.name = 'Mike';
//   }
//   getGreeting() {
//     return `Hi, my name is ${this.name}.`;
//   }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi, my name is ${this.name}.`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());