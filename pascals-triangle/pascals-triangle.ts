const factorial = (n: number): number => 
            n <= 1 
            ? 1 
            : n * factorial (n - 1), 
      binomial = (n: number, k: number): number => 
            factorial (n) / (factorial (k) * factorial (n - k))

export class Triangle {
    rows: number[][]
    lastRow: number[]

    constructor (n: number) {
        this.rows = 
            [...Array(n)].map((_, i) => 
                [...Array(i + 1)].map((_, j) => 
                    binomial (i, j)
                )
            )
        this.lastRow = this.rows[this.rows.length - 1]
    }
}
