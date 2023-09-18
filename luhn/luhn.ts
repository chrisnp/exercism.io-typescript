export const valid = (digitString: string): boolean => {
    digitString = digitString.replace(/\s/g, '')
    if (digitString.length <= 1 || /\D/.test(digitString))
        return false
    const digits = [...digitString].reverse()
    const luhn = digits.map(d => parseInt(d, 10))
                       .map((d, i) => 
                            !(i & 2) ? (d << 1) - (d > 4 ? 9 : 0) : d)
                    //    .map(d => (d > 9) ? d - 9 : d)
                       .reduce((sum, d) => sum + d, 0)
    return luhn > 0 && luhn % 10 === 0
}
