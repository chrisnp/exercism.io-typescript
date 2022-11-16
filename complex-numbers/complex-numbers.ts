export class ComplexNumber {
  private _real: number
  private _imag: number

  constructor(real: number, imaginary: number) {
    this._real = real
    this._imag = imaginary
  }

  public get real(): number {
    return this._real
  }

  public get imag(): number {
    return this._imag
  }

  public add(that: ComplexNumber): ComplexNumber {
    const real = this.real + that.real,
          imag = this.imag + that.imag
    return new ComplexNumber(real, imag)
  }

  public sub(that: ComplexNumber): ComplexNumber {
    const real = this.real - that.real,
          imag = this.imag - that.imag
    return new ComplexNumber(real, imag)
  }

  public div(that: ComplexNumber): ComplexNumber {
    const denom = that.real ** 2 + that.imag ** 2,
          real = (this.real * that.real + this.imag * that.imag) / denom,
          imag = (this.imag * that.real - this.real * that.imag) / denom
    return new ComplexNumber(real, imag)
  }

  public mul(that: ComplexNumber): ComplexNumber {
    const real = this.real * that.real - this.imag * that.imag,
          imag = this.imag * that.real + this.real * that.imag
    return new ComplexNumber(real, imag)
  }

  public get abs(): number {
    return (this.real ** 2 + this.imag ** 2) ** 0.5
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, -this.imag || 0)
  }

  public get exp(): ComplexNumber {
    const real = Math.exp(this.real) * Math.cos(this.imag),
          imag = Math.sin(this.imag)
    return new ComplexNumber(real, imag)
  }
}
