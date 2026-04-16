import { Car } from "./Car.ts";

function getCarInfo(input: string) {
    const [brand, model, horsepower] = input.split(' ');
    const car = new Car(brand, model, Number(horsepower));

    return car.printInfo();
}

console.log(getCarInfo("Chevrolet Impala 390"));
console.log(getCarInfo("Skoda Karoq 150"));
