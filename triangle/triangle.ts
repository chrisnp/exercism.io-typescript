class Triangle {

    sides: number[]
    
    constructor (...sides: number[]) {
        const order = (x: number, y: number) => x - y
        this.sides = sides.sort(order)
    }

    kind () {
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

    triangleInequality = () => 
        2 * Math.max(...this.sides) <
        this.sides.reduce((sum, s) => sum + s, 0); 

    anySideZero = () =>
        this.sides.some((s) => s <= 0); 

    throwWhatever () { 
        if ( !this.triangleInequality() || this.anySideZero() ) 
               throw new Error('Illegal')
    }
}

export default Triangle