class CompareElements<T>{
    dataArr: T[];

    constructor(dataArr: T[]) {
        this.dataArr = dataArr;
    }

    compare(el: T) : number{
        let count: number= 0;

        for (const element of this.dataArr) {
            if (element === el) {
                count++;
            }
        }

        return count;
    }
}

const generateCompareElement = <T>(data: T[], el: T): void => {
    const arr = new CompareElements(data);
    console.log(arr.compare(el));
}

// let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
// console.log(c.compare('b'));
// console.log("--------------------------");
// let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
// console.log(d.compare(1));

generateCompareElement(['a', 'b', 'ab', 'abc', 'cba', 'b'], 'b');
generateCompareElement([1, 2, 3, 4, 5, 1, 1], 1);