export class Series {
  readonly Errors: string[] = 
    [
      'series cannot be empty', 
      'slice length cannot be zero', 
      'slice length cannot be negative', 
      'slice length cannot be greater than series length'
    ]; EMPTY = 0; ZERO = 1; NEGATIVE = 2; TOO_LONG = 3
    readonly #digits: number[] 

  constructor(private series: string) {
    if (!series) { throw new Error(this.Errors[this.EMPTY]) }
    this.#digits = [...series].map(Number)
  }

  get digits() {
    return this.#digits
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength > this.digits.length) 
      throw new Error(this.Errors[this.TOO_LONG])
    if (sliceLength === 0) throw new Error(this.Errors[this.ZERO])
    if (sliceLength < 0) throw new Error(this.Errors[this.NEGATIVE])
    return Array.from(Array(this.digits.length - sliceLength + 1), 
                      (_, i) => this.digits.slice(i, i + sliceLength)) 
  }
}
