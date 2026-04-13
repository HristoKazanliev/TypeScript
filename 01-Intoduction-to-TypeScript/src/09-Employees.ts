function employees(inputArr: string[]) {
    const arrLenght: number = inputArr.length;

    for (let index = 0; index < arrLenght; index++) {
        let employeeName = inputArr[index];
        let employeeNumber = employeeName?.length;

        //console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`);
        let employee: Employee = new Employee(employeeName!, employeeNumber!);
        employee.printEmployeeInfo();
    }
}

class Employee {
    public name: string;
    public personalNumber: number;

    constructor(name: string, personalNumber: number) {
        this.name = name;
        this.personalNumber = personalNumber;
    }

    public printEmployeeInfo(): void {
        console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
    }
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
);

employees([
'Samuel Jackson',
'Will Smith',
'Bruce Willis',
'Tom Holland'
]
);