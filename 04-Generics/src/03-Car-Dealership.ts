interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    //param: T;
    sellCar(dealerID: T, model: T): void; 
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
    
    modelsSold: Map<T, T> = new Map<T, T>(); 
    //param: T;
    
    dealershipName: T;
    soldCars: number;

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold.set(dealerID, model);
        this.soldCars++;
    }

    showDetails(): void {
        console.log(this.dealershipName);
        
        for (const [dealerID, model] of this.modelsSold.entries()) {
            console.log(`${dealerID} sold ${model}`);
        }
    }
}


let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
dealership.showDetails();