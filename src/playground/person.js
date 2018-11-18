import { version } from "core-js";

//  const isAdult = (age) =>  {
//     if(age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }


//short version 
const isAdult = (age) => age >= 18;


// const canDrink = (age) => {
//     if(age >= 21 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// short version

const canDrink =(age) => age >= 21;

const isSenior = (age) => age  >= 60;

export { isAdult, canDrink };
export default isSenior;



