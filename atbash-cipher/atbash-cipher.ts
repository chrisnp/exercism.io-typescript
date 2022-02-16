const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

const cipher = [...alphabet].reverse()

const chunk = (str: string) => str.match(/.{1,5}/g)?.join(' ')

export function encode(plainText: string | null) {
    return chunk([...plainText!.toString().toLowerCase().replace(/[^\da-z]/gi, '')]
                 .map(x => (Number(x)) ? x : cipher[alphabet.indexOf(x)])
                 .join(''))
}

export function decode(cipherText: string | null) {
   return [...cipherText!.toString().toLowerCase().replace(/[^\da-z]/gi, '')]
          .map(x => (Number(x)) ? x : alphabet[cipher.indexOf(x)])
          .join('')
}
