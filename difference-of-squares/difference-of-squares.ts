export default class Squares {

  squareOfSum:  number
  sumOfSquares: number
  difference:   number

  constructor (num: number) {
      this.squareOfSum  = (num * (num + 1) / 2) ** 2
      this.sumOfSquares = (num ** 3) / 3 + (num ** 2) / 2 + num / 6
      this.difference   = this.squareOfSum - this.sumOfSquares
  }
}