const toType = (obj?: Object) => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

const validBase = (base: number) => toType(base) == 'number' && Math.floor(base) === base && base > 1

const validInput = (input: number[], fromBase: number) => input.length > 0
                   && !(input.length > 1 && input[0] === 0) && input.every((d) => 0 <= d && d < fromBase)

export default class Converter {

    convert (input: number[] ,fromBase: number, toBase: number) {
        
        if (!validBase(fromBase)) {
            throw new Error("Wrong input base")
        }

        if (!validBase(toBase)) { 
            throw new Error("Wrong output base")
        }

        if (!validInput (input, fromBase)) {
            throw new Error("Input has wrong format")
        }
        
        let num = input.reduce((acc, x) => acc * fromBase + x, 0)

        const digits : number[] = []

        do {
            digits.unshift(num % toBase)
            num = Math.floor(num / toBase)
        } while (num > 0)

        return digits
    }
}   