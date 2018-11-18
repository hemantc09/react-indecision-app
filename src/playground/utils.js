console.log('util.js file');



// =====================================//
// Named  Export
// =====================================//

// below is inline export
export const square = (x) => x * x ;
export const add = (a, b) => a + b;



// const square = (x) => x * x ;
// const add = (a, b) => a + b;

// export {square, add};




//export - default - named exports



//ch: person .js 
//named export adult: isAdult(18) // true or false

//named export : caDrink(21) // true or false

//import isADult and caDrink

//use both priniting to the console.



// =====================================//
// default Export
// =====================================//


 const subtract = (a, b) => a - b;
//inline export default
 export default subtract;
 
//export {square, add, subtract as default};


