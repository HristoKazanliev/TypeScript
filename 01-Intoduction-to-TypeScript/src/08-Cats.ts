function catSayMeow(inputArr: string[]) {
    
    for (let catInfo of inputArr) {
        let [name, age] = catInfo.split(' ');
        let cat: Cat = new Cat(name!, age!);
        cat.meow();
    }
}

class Cat {
    private name: string;
    private age: string;

    public constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }

    public meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    } 
}

catSayMeow(['Mellow 2', 'Tom 5']);
catSayMeow(['Candy 1', 'Poppy 3', 'Nyx 2']);