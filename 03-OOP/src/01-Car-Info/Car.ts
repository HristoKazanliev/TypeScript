export class Car {
    private _brand: string;
    private _model: string;
    private _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    
    public get brand() : string {
        return this._brand;
    }
    
    public set brand(value : string) {
        this._brand = value;
    }
    
    public get model() : string {
        return this._model;
    }

    public set model(value : string) {
        this._model = value;
    }

    public get horsepower() : number {
        return this._horsepower;
    }

    public set horsepower(value : number) {
        this._horsepower = value;
    }

    public printInfo(): string {
        return `The car is: ${this._brand} ${this._model} – ${this._horsepower} HP.`;
    }
    
}