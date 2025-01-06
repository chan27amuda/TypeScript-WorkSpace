/*
let age = 56; //Here the data type of variable age is Number
console.log(typeof(age));

age = "Test"; ////Here the data type of variable age is String
console.log(typeof(age));

age = {name: "Student1", department: "CS", age: "56"}; ////Here the data type of variable age is Object
console.log(typeof(age));
*/


function calcAge(yearOfBirth) {
    return 2024 - yearOfBirth;
}

let calculateAge;

calculateAge = calcAge(1984);
console.log(calculateAge);

calculateAge = calcAge(true);
console.log(calculateAge); 

calculateAge = calcAge("JavaScript");
console.log(calculateAge); 





