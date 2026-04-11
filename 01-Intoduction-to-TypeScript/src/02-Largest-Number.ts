function largestNumber(num1: number, num2: number, num3: number) : string {
    let number: number;
    number = Math.max(num1, num2, num3);

    return `The largest number is ${number}.`;
}

console.log(largestNumber(5, -3, 16));
console.log(largestNumber(-3, -5, -22.5));