import { PersonDetails } from "./types/person";

export class Person implements PersonDetails {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
   
}