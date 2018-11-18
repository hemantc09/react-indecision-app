//arguments object - no longer bound with arow function

const add  = (a, b)=> {
    //console.log(arguments);
    return a + b ;
}
console.log(add(55,1,1001));
//this keyword - no longer bound


const user = {
    name: 'Hemant',
    cities:['philadelphia','New york','india'],
    printPlacesLived(){
       return this.cities.map((city) =>  this.name + '!' + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//challenge

const multiplier = {
    num : 2,
    numberArr : [1,2,3],
    multiply(){
        return this.numberArr.map((number) => this.num * number );
    }
    //number array of numbers
    //multiply - single number
    //multiple - return a new array where the numbe have been multipled
}


console.log(multiplier.multiply()); //[1,2,3] x 2 = [2,4,6]