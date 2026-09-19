class BankAccount{
    #balance; //declare private fiels
    constructor(initialBalance){
        this.#balance = initialBalance;
    }
    //public method view balance
    getBalance(){
        return this.#balance;
    }
    //public method to modify balance
    deposit(amount){
        if (amount<=0){
            console.log("deposit amount must be positive.");
            return;
        }
        this.#balance += amount;
        console.log('Deposited: $${amount}. New Balance: $${this.#balance}');

    }
}
const myAccount = new BankAccount(100);
myAccount.deposite(50);
myAccount.deposite(-20);

