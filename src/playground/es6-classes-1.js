/*---------------*/
//everything is in the console
/*---------------*/


//car 
//make
//model
//vin
//getDescription


// add a second optionla item name and age default = 0
//method getDescription - Hemant is 26 years old



class Person {
    constructor(name = 'Pratik', age = 26) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'I am ' + this.name + '!';
        return `Hi I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        //check if student has major
      return !!this.major;  
    }
    //override method
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
   
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        
        if(this.location) {
            greeting +=  ` I am visiting from ${this.location}. `;
        }

        return greeting;
    }
}

//create new subclass travel extend person 
// add support home location
//override getGreeting -
//1. hi i am Hemant  '' I am visting from LA
// 2. hi I am Hemant



//make a new instance of class

const m1 = new Traveler('Hemant Choudhari', 25 , 'Los Angeles');
console.log(m1.getGreeting());

const me = new Traveler(undefined,undefined,'no location');
console.log(me.getGreeting());