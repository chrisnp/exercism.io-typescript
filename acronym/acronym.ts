export const parse = (phrase: string): string =>  
    (phrase.match(/[A-Z\']+[a-z']*|[a-z']+/g) ?? [])
    .map((word) => word[0].toUpperCase()) 
    .reduce((acro, cap) => acro += cap, '')