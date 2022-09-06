export class Triangle {

    sides: number[]
    
    constructor (...sides: number[]) {
        const order = (x: number, y: number) => x - y
        this.sides = sides.sort(order)
    }

    kind = (): string => {
        this.throwWhatever()
        const distinctSides = 
            (new Set(this.sides)).size
        switch (distinctSides) {
            case 1:  return 'equilateral'
            case 2:  return 'isosceles'
            case 3:  return 'scalene'
            default: return 'degenerate'
        }
    }

    get isEquilateral(): boolean { return this.kind() === 'equilateral' }
    get isIsosceles(): boolean { return this.kind() === 'isosceles' }
    get isScalene(): boolean { return this.kind() === 'scalene' }

    triangleInequality = (): boolean => 
        2 * Math.max(...this.sides) <
        this.sides.reduce((sum, s) => sum + s, 0); 

    anySideZero = (): boolean =>
        this.sides.some((s) => s <= 0); 

    throwWhatever = (): boolean => { 
        if ( !this.triangleInequality() || this.anySideZero() ) 
               throw new Error('Illegal')
        return true
    }
}
