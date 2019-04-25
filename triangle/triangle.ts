export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        const order = (x: number, y: number) => x - y
        this.sides = sides.sort(order)
    }

    kind() {
        this.throwWhatever()
        const distinctSides = (new Set(this.sides)).size
        switch (distinctSides) {
            case 1: return 'equilateral'
            case 2: return 'isosceles'
            default: return 'scalene'
        }
    }

    throwWhatever() {
        if (this.sides.some((side) => side <= 0) || this.sides[2] > (this.sides[0] + this.sides[1])) {
            throw new Error('Illegal')
        }
    }
}