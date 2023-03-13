
// function component() {
//     const element = document.createElement('div');
    
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
//     return element;
// }

// document.body.appendChild(component());


var oneLinerJoke = require('one-liner-joke');
var getJoke = oneLinerJoke.getRandomJoke();
console.log(getJoke)

console.log('Hello World')
// // 1. SELECTING YOUR ELEMENTS

// const paragraph = document.querySelector('.paragraph')
// const header = document.querySelector('.header')

// console.log(paragraph)
// // 2. ADDING YOUR EVENT LISTENERS
// paragraph.addEventListener('click', () => {
    
//     // 3. Manupilating your elements
//     paragraph.style.color = 'red'
//     // paragraph.style.color = 'blue'
// })