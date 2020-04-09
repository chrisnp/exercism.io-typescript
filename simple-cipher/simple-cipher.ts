const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const mod = (x: number, y: number) => (x % y + y) % y

export default class SimpleCipher {

    public readonly key: string

    constructor(key?: string) {

        if (key === undefined) {
            key = this.generateKey();
        }
        else if (key.length === 0 || key.match(/[^a-z]/)) {
            throw new Error('Bad key');
        }
        this.key = key
    }

    private xShift(key: string, input: string, sign: number) {
        return [...input]
               .reduce((output, letr, i) => {
                   const offset =
                       sign * ALPHA
                              .indexOf(key[mod(i, key.length)])
                   output +=
                       ALPHA[mod(ALPHA.indexOf(letr) + offset,
                                 ALPHA.length)]
                    return output
                }, '')
    }

    private generateKey() {
        return Array(...Array(100))
               .map(() =>
                   ALPHA[Math.floor(Math.random() * ALPHA.length)])
               .join('')
    }

    encode(plaintext: string ): string {
        return this.xShift(this.key, plaintext, 1)
    }

    decode(ciphertext: string): string {
        return this.xShift(this.key, ciphertext, -1)
    }
}