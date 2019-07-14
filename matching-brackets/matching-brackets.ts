export default class MatchingBrackets {

  bracketsOnly: string

  constructor(input: string) {
    this.bracketsOnly = input.replace(/[^\[\]|\(\)|\{\}]/g, '')
  }

  isPaired(): Boolean {
    let allBrackets = this.bracketsOnly
    let matchAndStrip
    do {
      matchAndStrip = allBrackets
      allBrackets = matchAndStrip.replace(/\[\]|\(\)|\{\}/g, '')
    } while (allBrackets !== matchAndStrip)
    return allBrackets === ''
  }
}