var nameVar = 'Hemantc09';
nameVar = 'Pratik';
console.log('newVar',nameVar);

//scoping 
let  nameLet = 'Jack';
nameLet = 'jackie';
console.log('nameLet', nameLet);

const nameConst = 'Marry';
console.log('nameCost', nameConst);

function getPetName() {
    const petName = 'guddie';
    return petName;
}

const petName = getPetName();
console.log(petName);

//block scoping 

const fullName = 'Hemant Choudhari';
let firstName; 

if(fullName){
    //split the name by space and print first one
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);