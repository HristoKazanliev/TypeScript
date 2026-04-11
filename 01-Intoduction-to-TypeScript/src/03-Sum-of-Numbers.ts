function sumOfNumbers(num1: string, num2: string) : number {
    let sum: number = 0;
    let n = Number(num1);
    let m = Number(num2);

    for (let index = n; index <= m; index++) {
        sum += index;
    }

    return sum;
}

console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));