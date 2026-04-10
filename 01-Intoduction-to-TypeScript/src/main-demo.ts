//String

let str: string = 'Hello World';
str = 'singleQuotes'; //valid
str = "doubleQuotes"; //valid
//str = 123; // invalid Error: Type 'number' is not assignable to type 'string'
let message: string = `The value of str is: ${str}`; //valid

//Number
let decimal: number = 123; //valid
let hex: number = 7E3; //valid
let binary: number = 11111100011 //valid
let float: number = 3.14; //valid
//decimal = '456' // invalid Error: Type 'string' is not assignable to type 'number'

//Boolean
let isBool: boolean = true; //valid
isBool = 5 < 2; // valid
let numbers = [1, 2, 3];
isBool = numbers.includes(100); // valid
//isBool = 123; // invalid Error: Type 'number' is not assignable to type 'boolean'

//Symbol
let uniqueSymbol: symbol = Symbol('mySymbol'); //valid
let anotherSymbol: symbol = Symbol('mySymbol'); //valid
console.log(uniqueSymbol === anotherSymbol); // false, each symbol is unique

//null and undefined
let undefinedValue1; // undefined
let undefinedValue2: undefined = undefined; // undefined
let person: null = null;

//Array
let arrayOfStrings: string[] = [];
arrayOfStrings.push('Hello'); // valid
arrayOfStrings.push('World'); // valid
//arrayOfStrings.push(123) // invalid Error: Argument of type 'number' is not assignable to parameter of type 'string'

//Tuple - array with fixed number of elements whose types are known
let tuple: [string, number]; 
tuple = ['Hello', 12]; // valid
//tuple = [12, 'Hello']; // invalid Error: Type 'number' is not assignable to type 'string' and Type 'string' is not assignable to type 'number'

//Enum - gives sets of numeric values morereadable names
enum DaysOfWeek {
    Monday, // 0 by default, enums start with 0 and increment by 1 for each member 
    Tuesday, // 1
    Wednesday,
}

let day: DaysOfWeek;
day = DaysOfWeek.Monday; // valid
console.log(day); // 0

if (day === DaysOfWeek.Monday) {
    console.log('I hope you all had a great weekend!');
} //It will print the message

//Any and Unknown - takes any and all values. It's a way to escape the strong types. Unknown is safer.
let x: any = 5;
x = [1, 2, 3];
x = true;
x = { name: "Gosho" };

let a: any = 'hello'; // let a: unknown = 'hello';
a = true; //valid
a = 11 ; //valid

//Void - represents the absence of a value, typically used for functions that do not return anything
function greet(message: string): void {
    console.log(message);
}

greet('Hello, world!');

function optionalParams1(name: string, mail?: string) {
    console.log(name + ' ' + mail);
} //valid

// function optionalParams2(name?: string, mail: string) {
//     console.log(name + ' ' + mail);
// } //invalid Required parameters cannot follow optional ones

// Return Type
function greeting (name: string): string {
    return name;
}
console.log(greeting('Pesho'));

function getFullName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}

const fName = getFullName("Ivan", "Peshov");
console.log(fName);

// DEMO
const intCollect: number[] = [1, 2, 3, 4, 5, 6, 7];
intCollect.forEach((int) => {
  console.log(int);
});

