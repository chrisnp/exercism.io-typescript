export const valid = (digitString: string): boolean => {
    digitString = digitString.replace(/\s/g, '')
    const digits = [...digitString]
    const luhn = digits.map(d => parseInt(d, 10))
                       .map((d, i) => ((i % 2) !== 0) ? d * 2 : d)
                       .map(d => (d > 9) ? d - 9 : d)
                       .reduce((sum, d) => sum + d, 0)
    return luhn > 0 && luhn % 10 === 0
}
