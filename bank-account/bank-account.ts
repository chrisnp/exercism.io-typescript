export class ValueError extends Error {
  constructor() { super('Bank account error') }
}

export class BankAccount {
    private Balance: number = NaN
    private Open: boolean = false

    constructor() {
        this.Balance = NaN
        this.Open = false
    }
    open(): void {
        if (this.Open) throw new ValueError()
        this.Open = true
        this.Balance = 0
    }
    close(): void {
        if (this.Open === false || isNaN(this.Balance)) 
            throw new ValueError()
        this.Balance = NaN
        this.Open = false
    }
    deposit(amount: number): void {
        if (!this.Open || amount < 0) throw new ValueError()
        this.Balance += amount
    }
    withdraw(amount: number): void {
        if (!this.Open || amount < 0 || amount > this.Balance) 
            throw new ValueError()
        this.Balance -= amount
    }
    get balance(): number {
        if (isNaN(this.Balance)) throw new ValueError()
        return this.Balance
    }
}
