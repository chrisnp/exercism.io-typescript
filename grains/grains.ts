const range = (start: number, end: number) =>
    new Array(end - start + 1).fill(undefined)
                              .map((_, i) => i + start)

export const square = (n: number): bigint => {
    if (range(1, 64).includes(n)) return 1n << BigInt(n) - 1n 
    throw new Error('square must be between 1 and 64')
}

export const total = (): bigint => (1n << 64n) - 1n
    
