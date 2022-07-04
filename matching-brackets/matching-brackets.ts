export const isPaired = (input: string): Boolean => {
  let allBrackets = input.replace(/[^[\]|()|{}]/g, '')
  let matchAndStrip: string
  do {
    matchAndStrip = allBrackets
    allBrackets = matchAndStrip.replace(/\[\]|\(\)|\{\}/g, '')
  } while (allBrackets !== matchAndStrip)
  return allBrackets === ''
}