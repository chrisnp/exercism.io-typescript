const sorted = (word: string): string => [...word].sort().join('')

export class Anagram {
  private readonly word: string

  constructor(input: string) {
    this.word = input.toLowerCase()
  }

  public matches(...potentials: string[]): string[] {
    return potentials
           .filter((w) => w.toLowerCase() !== this.word)
           .filter((w) => sorted(w.toLowerCase()) === sorted(this.word))
  }
}
