import { Person } from "./person";
import { getAvgAge } from "./utils/person";

const ivan = new Person("Ivan", 20);
const mitko = new Person("Mitko", 25);
const kiro = new Person("Kiro", 38);
const iva = new Person("Iva", 22);

const avgAge = getAvgAge([ivan, mitko, kiro, iva]);
console.log("avg age is " + avgAge);
