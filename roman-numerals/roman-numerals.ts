const ROMAN = {
  0: ['','I','II','III','IV','V','VI','VII','VIII','IX'],
  1: ['', 'X', 'XX', 'XXX', 'XL','L','LX','LXX','LXXX','XC'],
  2: ['','C', 'CC','CCC','CD','D','DC','DCC','DCCC','CM'],
  3: ['','M','MM','MMM'] 
}

export const toRoman = (arabic: number): string => {
  [...arabic.toString()]
  .reverse().reduce(
                (str, digit, power) => 
                      (ROMAN[power])[digit] + str, ''
             )
}
