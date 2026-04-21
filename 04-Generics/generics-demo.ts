//Non-generic
function echo1(arg: number): number {
    return arg;
}

function echo2(arg: string): string {
    return arg;
}

//Generic
function echo3<T> (args: T): T {
    console.log(typeof args);
    return args;
}

//echo3(11111);
//echo3('Hello');

//Generic Functions
const takeLast = <T>(array: T[]) => {
    return array.pop();
}

//const sample = takeLast(['Hello', 'World', 'TypeScript']);
const secondSample = takeLast([1, 2, 3, 4]);
//console.log(sample, secondSample); //TypeScript, 4

const makeTuple = <T, V>(a: T, b: V) => {
    return [a, b];
}  

const firstTuple = makeTuple(1, 2);
const secondTuple = makeTuple('a', 'b');
//console.log(firstTuple, secondTuple); //[ 1, 2 ] [ 'a', 'b' ]

//Generic Interfaces
interface GenericConstructor<T, V> {
    (arg: T, param: V): [T, V];
}

const generatedFunc: GenericConstructor<string, string> = <T, V>(arg: T, param: V) => {
    return [arg, param];
}

const sample = generatedFunc('Hello', 'World');
//console.log(sample); // [ 'Hello', 'World' ]

//Generic Class Using Multiple Parameters
class UserInput<F, S> {
    public first: F;
    public second: S;

    constructor(f: F, s: S) {
        this.first = f;
        this.second = s;
    }

    showBoth() {
        return `First: ${this.first}, second: ${this.second}`;
    }
}

let test1 = new UserInput('Ten', 10);
let test2 = new UserInput(1, true);
//console.log(test1.showBoth()); // First: Ten, second: 10
//console.log(test2.showBoth()); // First: 1, second: true

//Generic Class Implements Interface
interface ShowComponents<T, V> {
    print(key: T, value: V): string;
}

class Components<T, V> implements ShowComponents<T, V> {
    public key: T;
    public value: V;

    constructor(k: T, v: V) {
        this.key = k;
        this.value = v;
    }
    print() {
        return `Key: ${this.key} and value: ${this.value}`;
    }
}

let test: ShowComponents<string, string> = new Components('New', 'Test');
console.log(test.print('Test', 'Hello')); // Key: New and value: Test

//Generic Type Constraints
function fullName<T extends { fName: string, lName: string}> (obj: T) {
    return `The full name is ${obj.fName} ${obj.lName}.`;
}

let output = fullName({fName: 'Ivan', lName: 'Ivanov'});
console.log(output); // The full name is Ivan Ivanov.

