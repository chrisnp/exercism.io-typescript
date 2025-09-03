// export const largestProduct = () => {
//   throw new Error('Remove this statement and implement this function')
// }
class Series {
    private digits: number[]

    constructor(series: string) {
        if (series.match('[^0-9]')) {
            throw new Error(
              'Digits input must only contain digits'
            )
        }
        this.digits = [...series].map(d => +d)
    }

    partition(size: number): number[][] {
        if (size > this.digits.length) {
            throw new Error(
              'Span must be smaller than string length'
            )
        }
        return this.digits
                   .slice(0, this.digits.length - size + 1)
                   .map((_, i) => this.digits.slice(i, i + size))
    }

    largestProduct(span: number): number {
        if (span < 0) {
            throw new Error(
              'Span must not be negative'
            )
        }
        let prod = 0, max = (span === 0) ? 1 : 0
        this.partition(span).forEach(s => {
            prod = s.reduce((a, c) => a * c, 1)
            if (prod > max) max = prod;
        })
        return max
    }
}

export const largestProduct = 
    (series: string, span: number): number => 
        new Series(series).largestProduct(span)