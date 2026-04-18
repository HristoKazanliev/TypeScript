import { Department } from "./Department.ts";
import { Employee } from "./Employee.ts";


function getHighestAverageSalary(employeesInput: string[]): void {
    const departments: Map<string, Department> = new Map();
    const numberOfEmployees = Number(employeesInput[0]);

    for (let index = 1; index < numberOfEmployees; index++) {
        const parts = employeesInput[index].split(" ");
        const name = parts[0];
        const salary = Number(parts[1]);
        const position = parts[2];
        const department = parts[3];

        const email = parts.length > 4 && parts[4].includes("@") ? parts[4] : "n/a";
        const age = parts.length > 4 && !parts[4].includes("@") ? Number(parts[4]) : (Number(parts[5])) || -1;

        const employee = new Employee(name, salary, position, department, email, age);

        if (!departments.has(department)) {
            departments.set(department, new Department(department));
        } 

        departments.get(department)!.addEmployee(employee);
    }


    let highestDepartament: string = "";
    let highestAverageSalary: number = 0;

    departments.forEach((department) => {
        const avgSalary = department.getAverageSalary();

        if (avgSalary > highestAverageSalary) {
            highestAverageSalary = avgSalary;
            highestDepartament = department.name;
        }
    });

    const topDepartment = departments.get(highestDepartament)!;
    topDepartment.employees.sort((a, b) => b._salary - a._salary);

    console.log(`Highest Average Salary: ${highestDepartament}`);
    topDepartment.employees.forEach((employee) => {
        console.log(`${employee._name} ${employee._salary} ${employee._email} ${employee._age}`);
    });
    
}

getHighestAverageSalary([
    "4",
    "Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com",
    "George 0.20 Freeloader Nowhere 18"
]);

console.log("---------------------");

getHighestAverageSalary([
    "6",
    "Silver 496.37 Temp Coding silver@yahoo.com",
    "Sam 610.13 Manager Sales",
    "John 609.99 Manager Sales john@abv.bg 44",
    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",
    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey"
]);
