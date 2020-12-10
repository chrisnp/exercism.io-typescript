export default class MatchingBrackets {

  justTheBrackets: string

  constructor(input: string) {
    this.justTheBrackets = 
        input.replace(/[^\[\]|\(\)|\{\}]/g, '')
  }

  isPaired(): Boolean {
    let allBrackets = 
        this.justTheBrackets
    let matchAndStrip
    do {
      matchAndStrip = 
            allBrackets
      allBrackets = 
          matchAndStrip.replace(/\[\]|\(\)|\{\}/g, '')
    } while (allBrackets !== matchAndStrip)
    return allBrackets === ''
  }
}