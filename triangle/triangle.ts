export class Triangle {
    sides: number[]
    constructor (...sides: number[]) {
        const order = (x: number, y: number) => x - y
        this.sides = sides.sort(order)
    }
    triangleInequality = (): boolean => 
        2 * Math.max(...this.sides) <
        this.sides.reduce((sum, s) => sum + s, 0); 
    anySideZero = (): boolean =>
        this.sides.some((s) => s <= 0); 
    throwWhatever = (): boolean => { 
        if ( !this.triangleInequality() || this.anySideZero() ) 
               return true
        return false
    }
    distinct = (): number => {
        const distinctSides = 
            (new Set(this.sides)).size
        return distinctSides
    }
    get isEquilateral (): boolean { 
        return !this.throwWhatever() && 
        this.distinct() === 1 
    }
    get isIsosceles (): boolean { 
        return !this.throwWhatever() && 
        this.distinct() <= 2 
    }
    get isScalene (): boolean { 
        return !this.throwWhatever() && 
        this.distinct() === 3 
    }
}
