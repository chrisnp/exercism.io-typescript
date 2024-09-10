export const proverb = (...xs: string[]) : string => {
  if (xs.length < 1) return ""
  let verses: string[] = []
  const premise = (cause: string): string => `For want of a ${cause}`,
        conclusion = (loss: string): string => ` the ${loss} was lost.\n`
  for (let i = 1; i < xs.length; ++i) {
    verses.push(`${premise(xs[i-1])}${conclusion(xs[i])}`)
  }
  const epilogue = `And all for the want of a ${xs[0]}.`
  verses.push(epilogue)
  return verses.join("")
}
