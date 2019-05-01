function toType(obj?: Object) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function validBase(base: number) {
    return toType(base) == 'number' && Math.floor(base) === base && base > 1
}

function validInput(input: number[], fromBase: number) {
    return input.length > 0
        && !(input.length > 1 && input[0] === 0)
        && input.every((d) => 0 <= d && d < fromBase)
}

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

        const digits = []

        do {
            digits.unshift(num % toBase)
            num = Math.floor(num / toBase)
        } while (num > 0)

        return digits
    }
}   