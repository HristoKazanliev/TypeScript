class Animal {
    eat(): void {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Barking...");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("Meowing...");
    }
}

const dog = new Dog();
dog.eat(); // Output: Eating...
dog.bark(); // Output: Barking...

const cat = new Cat();
cat.eat(); // Output: Eating...
cat.meow(); // Output: Meowing...