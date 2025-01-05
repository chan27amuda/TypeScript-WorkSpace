let langName: string = "JavaScript";
let age: number = 30;
let isValid: boolean = true;

console.log(`${langName}, ${age}, ${isValid}`); // Output: JavaScript, 30, true

//Arrays:

let marks: number[] = [56, 78, 95, 45, 66];
marks.push(87);
//marks.push("JS"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'. This line will perfectly work in JavaScript.

function getLangName(langName: string): string {
    return langName + " is a programming language.";
}

let res = getLangName("JavaScript");
console.log(res); // Output: JavaScript is a programming language.


//When we are not returning anything from a function, we can use void as a return type.
function getLangName2(langName: string): void {
    console.log(`${langName} +  is a programming language.`);
}

let res2 = getLangName2("JavaScript");  
console.log(res2); // Output: undefinedS


//Objects:
let details: {langName: string, age: number};
details = {langName: "JavaScript", age: 30};
console.log(details); 
