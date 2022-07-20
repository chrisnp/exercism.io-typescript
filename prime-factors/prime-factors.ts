export const calculatePrimeFactors = 
    (number: number): number[] => {
        const primeFactors = []
        let candidate = 2
        while ( number > 1 ) {
            if ( number % candidate === 0 ) {
                primeFactors.push (candidate)
                number /= candidate
            } 
            else {
                candidate++
                if ( candidate % 2 === 0 ) {
                    candidate++
                }
            }
        }
        return primeFactors
}
