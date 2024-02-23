enum Colors {    
    black = 0,
    brown, red, orange, yellow,
    green, blue, violet, grey, white 
}

export type Colour = keyof typeof Colors

export const decodedResistorValue = (colours: Colour[]) : string => {
  if (colours === undefined || colours.length < 3)
    throw new Error("At least 3 colors need to be present")
  const codes = colours.map(c => Colors[c])
  if (codes.some(code => code < 0)) {
    throw new Error("Invalid colour")
  }
  const resistorValue = ((10 * codes[0]) + codes[1]) * (10 ** codes[2])
  const {value, units} = 
      resistorValue > 1000000000 
      ? {value: resistorValue / 1000000000, units: `gigaohms`} 
      : resistorValue > 1000000 
      ? {value: resistorValue / 1000000, units: `megaohms`} 
      : resistorValue > 1000 
      ? {value: resistorValue / 1000, units: `kiloohms`} 
      : {value: resistorValue, units: `ohms`}
  return `${value} ${units}`
}
