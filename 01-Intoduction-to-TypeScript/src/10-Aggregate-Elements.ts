function aggregateElements(arrInput: number[]) {
    const arrLenght: number = arrInput.length;
    let sum: number = 0;
    let inverseSum: number = 0;
    let concat: string = '';

    //sum
    for (let index = 0; index < arrLenght; index++) {
        sum += arrInput[index]!;
    }

    //inverse sum
    for (let index = 0; index < arrLenght; index++) {
        inverseSum += 1 / arrInput[index]!;
    }

    //concat
    concat = arrInput.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);