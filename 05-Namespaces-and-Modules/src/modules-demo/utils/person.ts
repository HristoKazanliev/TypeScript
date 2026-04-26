import { PersonDetails } from "../types/person";

export function getAvgAge(people: PersonDetails[]) : number {
    let sum = 0;
    people.forEach((person) => {
        sum += person.age
    });

    return sum / people.length;
} 