export default class Triangle {

    sides: number[]
    triangleInequality: boolean
    no_zero_side: boolean

    constructor(...sides: number[]) {
        const order = (x: number, y: number) => x - y
        
        this.sides = sides.sort(order)

        this.triangleInequality =  
            2 * Math.max(...this.sides) <
            this.sides.reduce((sum, s) => sum + s, 0); 
            
        this.no_zero_side = 
            this.sides.some((s) => s <= 0); 
    }

    kind() {
        this.throwWhatever()
        const distinctSides = 
            (new Set(this.sides)).size
        switch (distinctSides) {
            case 1:  return 'equilateral'
            case 2:  return 'isosceles'
            default: return 'scalene'
        }
    }

    throwWhatever() {
        if (!this.triangleInequality || 
            this.no_zero_side) 
        {
            throw new Error('Illegal')
        }
    }
}