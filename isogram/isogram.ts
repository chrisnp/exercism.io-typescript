const normalform = (s: string): string => 
  s.replace(/\s|-/g, '').toLowerCase()

export const  isIsogram = (word: string): boolean =>
  normalform(word).split('')
                  .filter((c, i, w) => w.indexOf(c) === i)
                  .length === normalform(word).length

