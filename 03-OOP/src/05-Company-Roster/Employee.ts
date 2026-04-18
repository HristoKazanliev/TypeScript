export class Employee {
    _name: string;
    _salary: number;
    _position: string;
    _department: string;
    _email: string;
    _age: number;    

    constructor(name: string, salary: number, position: string, department: string, email: string = "n/a", age: number = -1) {
        this._name = name;
        this._salary = salary;
        this._position = position;
        this._department = department;
        this._email = email;
        this._age = age;
    }
}