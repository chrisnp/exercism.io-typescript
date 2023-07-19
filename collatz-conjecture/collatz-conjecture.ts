export const steps = (num: number): number => {
    const requisites = Number.isInteger(num) && num > 0
    if (!requisites) {
        throw new Error('Only positive integers are allowed')
    }
    function iter(n: number, s: number): number {
        return (n === 1) 
               ? s 
               : (n % 2 === 0) 
               ? iter(n >> 1, s + 1) 
               : iter(3 * n + 1, s + 1)
        }
    return iter(num, 0)
}
