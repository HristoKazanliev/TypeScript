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

    newCustomer(customerName: string, visited: boolean): string {
        const matchCustomer = this.placesToVisit.find((person: PlaceToVisit) => person.customerName === customerName);

        if (matchCustomer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        } else {
            this.placesToVisit.push({ customerName, visited })
            return `${customerName} just became your client.`;
        }
    }

    visitCustomer(customerName: string): string {
        throw new Error("Method not implemented.");
    }

    showCustomers(): string {
        throw new Error("Method not implemented.");
    }
}