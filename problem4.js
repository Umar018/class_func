class BankAccount {
    constructor(ownerName, balance = 0, accountNumber) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("yetarli mablag mavjud emas.");
        } else {
            this.balance -= amount;
            console.log(`${amount} $ yechildi, yangi balans: ${this.balance}`);
        }
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("deposit miqdori musbat bo'lishi kerak.");
        } else {
            this.balance += amount;
            console.log(`${amount} $ qo'shildi, yangi balans: ${this.balance}`);
        }
    }

    showBalance() {
        console.log(`balansda: ${this.balance}$  bor.`);
    }
}


const user1 = new BankAccount("Ali", 500, 12345);
const user2 = new BankAccount("Zuhra", 1000, 67890);

console.log("Ali hisob raqami:");
user1.deposit(200);  // 700
user1.withdraw(300); // 400
user1.showBalance(); // balansda: 400

console.log("\nVali hisob raqami:");
user2.deposit(500);  // 1500
user2.withdraw(700); // 800
user2.showBalance(); // balansda: 800


