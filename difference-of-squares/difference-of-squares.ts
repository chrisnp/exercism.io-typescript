export default class Squares {

  squareOfSums: number
  sumOfSquares: number
  difference: number

  constructor (num: number) {
      this.squareOfSums = (num * (num + 1) / 2) ** 2
      this.sumOfSquares = (num ** 3) / 3 + (num ** 2) / 2 + num / 6 
      this.difference   = this.squareOfSums - this.sumOfSquares
  }
}