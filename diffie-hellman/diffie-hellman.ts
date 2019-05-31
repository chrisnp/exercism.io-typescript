const assert :  = import(assert)

const isPrime = (num: number) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) { 
            return false
        }
    }
    return num >= 2
}

export default class DiffieHellman {

  private p: number;
  private g: number;

  constructor(p : number, g : number) {
    if (p < 1 || g > p) {throw new Error('p or g out of range') }
    else if (!(isPrime(p) && isPrime(g))) {throw new Error('p or g or both are not prime')}
    this.p = p
    this.g = g 
  }

  getPublicKeyFromPrivateKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('private key must be greater than 1 and less than p')
    }
      return this.g ** privateKey % this.p
  }

  getSharedSecret (privateKey : number, publicKey : number) : number {
      return publicKey ** privateKey % this.p
  }

}