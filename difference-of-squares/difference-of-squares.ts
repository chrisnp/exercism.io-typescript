export class Squares {
  private readonly limit: number
  public sumOfSquares: number
  public squareOfSum: number
  public difference: number

  constructor (num: number) {
    this.limit = num
    this.sumOfSquares = Array.from({length: this.limit})
                             .map((_, i) => (i + 1) ** 2)
                             .reduce((acc, x) => acc + x, 0)
    this.squareOfSum =  Array.from({length: this.limit})
                             .map((_, i) => (i + 1))
                             .reduce((acc, x) => acc + x, 0) ** 2
    this.difference = this.squareOfSum - this.sumOfSquares

                      
  }
}