function mathOperations(num1: number, num2: number, operation: string): number{
    let result: number = 0;
    
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
      
    }

    return result;
}

console.log(mathOperations(5, 6, '+'));
console.log(mathOperations(3, 5.5, '*'));
console.log(mathOperations(10, 3, '%'));
console.log(mathOperations(2, 3, '**'));