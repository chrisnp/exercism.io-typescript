const isPrime = (n: number): boolean => {
  let c = 3
  while (c <= Math.floor(Math.sqrt(n))) {
    if (n % c === 0) { return false }
    c += 2
  }
  return n >= 2
}
const ERR_OUT_OF_RANGE = 'p or g out of range'
const ERR_NOT_PRIME = 'p or g or both are not prime'
const ERR_PRIVATE_KEY_RANGE =
  'private key must be greater than 1 and less than p'

export class DiffieHellman {
  private p: number
  private g: number
  constructor(p: number, g: number) {
    if (p < 1 || g > p) {
      throw new Error(ERR_OUT_OF_RANGE)
    }
    else if (!(isPrime(p) && isPrime(g))) {
      throw new Error(ERR_NOT_PRIME)
    }
    this.p = p, this.g = g
  }
  getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error(ERR_PRIVATE_KEY_RANGE)
    }
      return this.g ** privateKey % this.p
  }
  getSecret (publicKey: number, privateKey: number): number {
      return publicKey ** privateKey % this.p
  }
}