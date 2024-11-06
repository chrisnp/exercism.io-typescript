export const isValid = (isbn: string): boolean => {
    const clean = isbn.replace(/-/g, '')
    if (!/^\d{9}[0-9X]$/.test(clean)) return false
    const digits = [...clean].map ( 
        d => d === 'X' 
             ? 10  
             : (d.match(/\d/)) 
             ? parseInt (d, 10) 
             : NaN 
    )
    let checksum = digits.map((d, i) => d * (10 - i))
                         .reduce((acc, d) => acc + d, 0)     
    return checksum % 11 === 0
}
