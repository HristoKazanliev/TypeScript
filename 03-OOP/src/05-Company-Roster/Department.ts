import { Employee } from "./Employee.ts";

export class Department {
    name: string;
    employees: Employee[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getAverageSalary(): number {
        const totalSalary = this.employees.reduce((sum, employee) => sum + employee._salary, 0);
        return totalSalary / this.employees.length;
    }
}