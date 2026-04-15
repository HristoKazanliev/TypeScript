//Union type

function greet(message: string | string[]) {
    if (typeof message === "string") {
        return message;
    }
    return message.join(" ");
}

let greeting = "Hello, World!";
let greetingArr = ["Dear", "Sir/Madam"];

//console.log(greet(greeting)); // Output: "Hello, World!"
//console.log(greet(greetingArr)); // Output: "Dear Sir/Madam"

//Intersection types
interface Person { fullname: string | string[];}

interface Contact { email: string; }

function showContact(concatPerson: Person & Contact) {
    return concatPerson;
}

let contactPerson: Person & Contact = {
    fullname: "Ivan Ivanov",
    email: "ivan.ivanov@example.com"
}

//console.log(showContact(contactPerson)); // Output: { fullname: 'Ivan Ivanov', email: 'ivan.ivanov@example.com' }

//String Literal Type
let status1: "success" | "error";
status1 = "success"; // Valid assignment

//Number Literal Type
let errorCode: 200 | 400 | 404;
errorCode = 200; // Valid assignment

//Simple Type Alias
type Age = number;
const myAge: Age = 30; // Valid assignment

//Object Type Alias
type User1 = { id: number, name: string};
const user: User1 = { id: 1, name: "Ivan Ivanov" }; // Valid assignment

//Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. A type cannot be re-opened to add new properties 

//"keyof" Usage
type Point = { x: number, y: number};
type PointKeys = keyof Point; // "x" | "y"

type Colors = { red: string, green: string, blue: string };
type ColorKeys = keyof Colors; // "red" | "green" | "blue"

//Mapped Types
type Optional<T> = { [K in keyof T]?: T[K] };
type PartialPoint = Optional<Point>;
// { x?: number; y?: number; }

type Readonly1<T> = { readonly [K in keyof T]: T[K] };
type ReadonlyColors = Readonly1<Colors>;
// { readonly red: string; readonly green: string; readonly blue: string; }

//Interface
interface Person1 {
    fullName: string,
    email: string,
}

let ivan: Person1 = {
    fullName: "Ivan Ivanov",
    email: "ivan.ivanov@example.com"
}

//console.log(ivan.fullName); // Output: "Ivan Ivanov"s

interface Calculator {
    (num1: number, num2: number, operation: string): number;
}

let calculator: Calculator = function (a: number, b: number, op: string): number {
    let result: number = 0;
    const addition = () => result = a + b; ;
    const parser: Record<string, () => void> = {
        'addition': addition,
    }

    parser[op]();
    return result;
}

//console.log(calculator(5, 3, 'addition')); // Output: 8

interface ClockLayout {
    hour: number;
    minute: number;
    showTime(h: number, m: number): string;
}

class Clock implements ClockLayout {
    public hour: number;
    public minute: number;

    constructor( h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }

    showTime() {
        return `Current time: ${this.hour}:${this.minute}`;
    }
}

let clock = new Clock(10, 30);
//console.log(clock.showTime());

class Computer {
    public RAM;
    constructor(r: number) { 
        this.RAM = r; 
    }

    showParams(): string {
        return `${this.RAM}`; 
    }
}

interface Parts extends Computer {
    CPU: string;
    showParts(): string;
}


class PC extends Computer implements Parts {
    CPU: string;

    constructor(r: number, c: string) {
        super(r);
        this.CPU = c;
    }

    showParts(): string {
        return `${this.RAM} ${this.CPU}`;
    }
    
}
