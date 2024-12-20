export const valid = (digitString: string): boolean => {
    digitString = digitString.replace(/\s+/g, '')
    if (/[^0-9]/.test(digitString)) return false
    const digits = [...digitString].reverse()
    const luhn = digits.map(d => parseInt(d))
                       .map((d, i) => 
                            (i & 1) !== 0 
                            ? (d << 1) - (d > 4 ? 9 : 0) 
                            : d
                        )
                        .reduce((sum, d) => sum + d, 0)
    return luhn >= 0 && !(luhn % 10) && digits.length > 1
}
