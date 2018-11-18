// import './utils.js';  be careful while importing . for the file path. Because
//all files are moved in to playground folder


// import { square, add } from './utils.js';
// import subtract, { square, add  } from './utils.js';

// importing default export only as below
//import subtract from './utils.js'


// import { isAdult, canDrink } from './person.js';
// // default export below
// import isSenior from './person.js';

//import third part 

// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';



// =====================================//
// Named  Export - import here
// =====================================//


// console.log("app is running!!!");
// console.log(square(9));
// console.log(add(9, 5));
// console.log(subtract(100, 81));


// console.log("From Person.js");

// console.log(isAdult(100));
// console.log(canDrink(20));


// =====================================//
// Default  Export - import here
// =====================================//

// console.log(isAdult(100));
// console.log("can I drink - ", canDrink(20));
// console.log("is the person senior - " ,  isSenior(6));

//setting up the default export and function
// grab the default and call it



// third party module

// console.log("is valid email: ", validator.isEmail('test@g.com'));

const template = <p>This is JSX from webpack</p>;

ReactDOM.render(template, document.getElementById('app'));