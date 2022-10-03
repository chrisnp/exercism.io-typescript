const COLORS = [ 'black',
                 'brown',
                 'red',
                 'orange',
                 'yellow',
                 'green',
                 'blue',
                 'violet',
                 'grey',
                 'white' ]

export type Colour = typeof COLORS[number]

export function decodedResistorValue([b1, b2, b3]: Colour[]) : string {
  const colours = [b1, b2, b3]
  if (colours === undefined || colours.length < 3)
    throw new Error("there must be at least 3 colours")
  const codes = colours.map(c => COLORS.indexOf(c))
  if (codes.some(code => code < 0)) {
    throw new Error("invalid colour")
  }
  const resistorValue = ((10 * codes[0]) + codes[1]) * (10 ** codes[2])
  const {value, units} = resistorValue > 1000 ? 
                         {value: resistorValue / 1000, units: `kiloohms`} : 
                         {value: resistorValue, units: `ohms`}
  return `${value} ${units}`
}
