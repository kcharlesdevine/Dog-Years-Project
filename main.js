// current age
var myAge = 36; 

// first 2 dog year vs. human years
var earlyYears = 2; 

earlyYears *= 10.5
console.log(earlyYears); 

// human years accounted for in earlyYears
var laterYears = myAge - 2;
console.log(laterYears);

// dog years to guman years after human age 2
laterYears *= 4;
console.log(laterYears);

// accelerated early dog years + later dog years (*4 human years)
var myAgeInDogYears = earlyYears + laterYears 
console.log(myAgeInDogYears); 

// my name lower case
var myName = ('KEVIN'.toLowerCase())
console.log(myName); 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
