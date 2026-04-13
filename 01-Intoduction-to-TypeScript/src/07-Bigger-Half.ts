function getArrBiggerHalf(arr: number[]) {
    let sortedArr = arr.sort((a, b) => a - b);
    let arrHalfLength = Math.floor(sortedArr.length / 2);
    let arrToPrint = sortedArr.slice(arrHalfLength);

    console.log(arrToPrint);
}

getArrBiggerHalf([4, 7, 2, 5]);
getArrBiggerHalf([3, 19, 14, 7, 2, 19, 6]);