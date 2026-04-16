export class BankAccount {
    private static idCounter: number = 1;
    private static interestRate: number = 0.02; // 2% interest rate

    private _id: number;
    private _balance: number;

    constructor() {
        this._id = BankAccount.idCounter++;
        this._balance = 0;
    }

    public get id(): number {
        return this._id;
    }

    public get balance(): number {
        return this._balance;
    }

    public static setInterestRate(rate: number) {
        BankAccount.interestRate = rate;
    }

    public getInterest(years: number): number {
        return this._balance * BankAccount.interestRate * years;
    }

    public deposit(amount: number): void {
        this._balance += amount;
    }
}