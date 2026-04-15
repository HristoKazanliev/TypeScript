interface Person2 {
  firstName: string;
  lastName: string;
  age: number;
}

function createPerson(firstName: string, lastName: string, age: string): Person2 {
  return {
    firstName,
    lastName,
    age: Number(age),
  };
}

console.log(createPerson("Peter", "Pan", "20"));
// { firstName: 'Peter', lastName: 'Pan', age: 20 }

console.log(createPerson("George", "Smith", "18"));
// { firstName: 'George', lastName: 'Smith', age: 18 }
