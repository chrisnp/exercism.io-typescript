function gcd(x: number, y: number): number {
  return y ? gcd(y, x % y) : x
}

const nthRoot = (base: number, n: number) => Math.pow(base, 1 / n) 

export class Rational {
  numerator: number
  denominator: number

  constructor(numerator: number, denominator: number = 1) {
    if (denominator === 0) throw "Can't divide by zero"
    this.numerator = numerator
    this.denominator = denominator
    this.reduce()
  }

  add(other: Rational): Rational {
    const numerator = 
      this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = 
      this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  sub(other: Rational): Rational {
    const numerator = 
      this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = 
      this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  mul(other: Rational): Rational {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  div(other: Rational): Rational {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  exprational(exponent: number): Rational {
    if (exponent < 0) {
      exponent = -exponent
      return new Rational(this.denominator ** exponent, this.numerator ** exponent)
    } else {
      return new Rational(this.numerator ** exponent, this.denominator ** exponent)
    }
  }

  expreal(real: number): number {
    return Math.pow(real ** (1/this.denominator), this.numerator);
  }

  toReal(): number {
    return this.numerator / this.denominator;
  }

  reduce(): Rational {
    const divisor = gcd(this.numerator, this.denominator)
    return new Rational(
                  this.numerator / divisor, 
                  this.denominator / divisor
               )
  }
}
