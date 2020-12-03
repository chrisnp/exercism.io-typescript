export default class CollatzConjecture {

    static steps(num: number) {

        if (num <= 0) {
            throw new 
                Error('Only positive numbers are allowed')
        }

        function iter(n: number, s: number): number {
            return (n === 1) ?
                   s :
                   (n % 2 === 0) ?
                   iter(n / 2, s + 1) :
                   iter((3 * n) + 1, s + 1)
        }

        return iter(num, 0)
    }
}
