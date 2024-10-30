const gcd = (x: number, y: number): number => 
  y !== 0 ? gcd(y, x % y) : Math.abs(x)

export class Rational {
  num: number
  den: number

  constructor(numerator: number, denominator = 1) {
    if (denominator === 0) throw "Can't divide by zero"
    this.num = numerator
    this.den = denominator
    this.reduce()
  }

  get numerator(): number { return this.num }
  get denominator(): number { return this.den }

  add(that: Rational): Rational {
    return new  Rational(
                  this.num * that.den + that.num * this.den,
                  this.den * that.den
                )
  }

  sub(that: Rational): Rational {
    return new  Rational(
                  this.num * that.den - that.num * this.den,
                  this.den * that.den
                )
}

  mul(that: Rational): Rational {
    return new Rational(this.num * that.num, this.den * that.den)
  }

  div(that: Rational): Rational {
    return new Rational(this.num * that.den, this.den * that.num).reduce()
  }

  abs(): Rational {
    return new Rational(
                  Math.abs(this.num), 
                  Math.abs(this.den)
               ).reduce()
  }

  exprational(exponent: number): Rational {
    return (exponent < 0)
           ? new Rational(this.den ** -exponent, this.num ** -exponent)
                 .reduce()
           : new Rational(this.num ** exponent, this.den ** exponent)
                 .reduce()
  }

  expreal(real: number): number {
    return real ** (this.num / this.den)
  }

  reduce(): Rational {
    const gcdiv = gcd(this.num, this.den)
    this.num /= gcdiv
    this.den /= gcdiv
    return this.den < 0
           ? new Rational(-this.num, -this.den).reduce()
           : this
  }
}
