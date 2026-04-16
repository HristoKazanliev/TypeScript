import { BankAccount } from "./BankAccount.ts";

function createAccount(arrInnput: string[]) {
    const accounts: Map<number, BankAccount > = new Map();

    for (const command of arrInnput) {
        const parts = command.split(' ');
        const action = parts[0];

        if (action === "End") {
            break;
        } else if (action === "Create") {
            const account = new BankAccount();
            accounts.set(account.id, account);
            console.log(`Account ID${account.id} created`);
        } else if (action === "Deposit") {
            const id = Number(parts[1]);
            const amount = Number(parts[2]);
            const account = accounts.get(id);

            if (!account) {
                console.log("Account does not exist");
            } else {
                account.deposit(amount);
                console.log(`Deposited ${amount} to ID${id}`);
            }
        } else if (action === "SetInterest") {
            const interestRate = Number(parts[1]);
            BankAccount.setInterestRate(interestRate);
        } else if (action === "GetInterest") {
            const id = Number(parts[1]);
            const years = Number(parts[2]);
            const account = accounts.get(id);

            if (!account) {
                console.log("Account does not exist");
            } else {
                const interest = account.getInterest(years);
                console.log(`${interest.toFixed(2)}`);
            }

        }
    }
}

createAccount(['Create', 'Deposit 1 20', 'GetInterest 1 10', 'End']);
createAccount(['Create', 'Create', 'Deposit 1 20', 'Deposit 3 20', 'Deposit 2 10', 'SetInterest 1.5',
'GetInterest 1 1', 'GetInterest 2 1', 'GetInterest 3 1', 'End'
]);
