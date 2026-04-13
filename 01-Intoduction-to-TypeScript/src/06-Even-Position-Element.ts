function findEven(arr: string[]): string {
    //let evenPositions: string[] = [];
    let evenPositions: string = "";

    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
            //evenPositions.push(arr[index]!);
            evenPositions += arr[index] + " ";
        }
        
    }

    //return evenPositions.join(" ");
    return evenPositions;
}

console.log(findEven(['20', '30', '40', '50', '60']));
console.log(findEven(['5', '10']));