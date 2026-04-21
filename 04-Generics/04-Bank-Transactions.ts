abstract class CreateAccount<T, V> {
    bankName: T;
    bankID: V;

    constructor(bankName: T, bankID: V) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount<T, V> extends CreateAccount<T, V> {
    readonly ownerName: string;
    money: number = 0;
    recentTransactions: { [key: string]: number} = {};

    constructor(bankName: T, bankID: V, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.money += amount;
    }

    expense(amount: number, expenseType: string) {
        if (this.money >= 0) {
            if (!this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] = amount;
                this.money -= amount;
            } else {
                this.recentTransactions[expenseType] += amount;
                this.money -= amount;
            }
        } else {
            throw new Error(`You cant make ${expenseType} transaction`);
            
        }
    }

    showDetails(): string {
        let totalMoneySpentOnExpenses = 0;

        for (const key in this.recentTransactions) {
            totalMoneySpentOnExpenses += this.recentTransactions[key];
        }

        return `
        Bank name: ${this.bankName}
        Bank ID: ${this.bankID}
        Owner name: ${this.ownerName}
        Money: ${this.money}
        Money spent: ${totalMoneySpentOnExpenses}`;
    }

}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());

console.log("------------");

let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
