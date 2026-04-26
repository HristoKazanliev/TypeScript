import { FoodAndBeverages } from "./FoodAndBeverages";

interface PlaceToVisit {
    customerName: string;
    visited: boolean;
}

export class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: PlaceToVisit[];

    constructor(placesToVisit: PlaceToVisit[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        const matchCustomer = this.placesToVisit.find((person: PlaceToVisit) => person.customerName === customerName);

        if (matchCustomer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        } else {
            this.placesToVisit.push({ customerName, visited })
            return `${customerName} just became your client.`;
        }
    }

    visitCustomer(customerName: string): string {
        const matchCustomer = this.placesToVisit.find((person: PlaceToVisit) => person.customerName === customerName);

        if (matchCustomer) {
            matchCustomer.visited = true;
            return `${customerName} visited!`;
        } else {
            throw new Error(`${customerName} is not your customer`);
        }
    }

    showCustomers(): string {
        let result: string = '';

        this.placesToVisit.forEach((customer) => {
            result += `${customer.customerName} -> ${customer.visited}\n`
        });

        return result;
    }
}