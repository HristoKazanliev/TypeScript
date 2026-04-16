import { Person } from "./Person.ts";

function getPersonInfo(input: string) {
    const [name, age] = input.split(" ");
    const person = new Person(name, Number(age));

    person.printInfo();
}

getPersonInfo("Peter 12");
getPersonInfo("Sofia 33");