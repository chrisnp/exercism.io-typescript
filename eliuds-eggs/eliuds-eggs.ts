export const eggCount = (displayValue: number): number => { 
  let count = 0
  do {
    count += displayValue % 2
    displayValue = Math.floor(displayValue / 2)
  } while (displayValue != 0)
  return count
}
