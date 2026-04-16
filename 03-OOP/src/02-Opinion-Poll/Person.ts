export class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name() : string {
        return this._name;
    }
    
    set name(v : string) {
        this._name = v;
    }   

    get age() : number {
        return this._age;
    }
    
    set age(v : number) {
        this._age = v;
    }

    printInfo(): void {
        console.log(`${this._name} is ${this._age} years old.`);         
    }

}