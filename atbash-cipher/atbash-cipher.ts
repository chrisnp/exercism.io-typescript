const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
const cipher = [...alphabet].reverse()

const chunk = (str: string) => str.match(/.{1,5}/g)?.join(' ')

export const encode = (plainText: string | null) => 
    chunk([...plainText!.toString().toLowerCase().replace(/[^\da-z]/gi, '')]
          .map(x => (Number(x)) ? x : cipher[alphabet.indexOf(x)]).join(''))

export const decode = (cipherText: string | null) =>
   [...cipherText!.toString().toLowerCase().replace(/[^\da-z]/gi, '')]
   .map(x => (Number(x)) ? x : alphabet[cipher.indexOf(x)]).join('')
