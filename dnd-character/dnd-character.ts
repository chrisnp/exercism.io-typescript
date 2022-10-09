const roll = (sides: number) => Math.floor(1 + (Math.random() * sides))

export class DnDCharacter {
  readonly strength: number = 
      DnDCharacter.generateAbilityScore()
  readonly dexterity: number = 
      DnDCharacter.generateAbilityScore()
  readonly constitution: number = 
      DnDCharacter.generateAbilityScore()
  readonly intelligence: number = 
      DnDCharacter.generateAbilityScore()
  readonly wisdom: number = 
      DnDCharacter.generateAbilityScore()
  readonly charisma: number  = 
      DnDCharacter.generateAbilityScore()
  readonly hitpoints: number = 
      10 + DnDCharacter.getModifierFor(this.constitution)

  public static generateAbilityScore (): number {
      function *rolls (): IterableIterator<number> {
        for (let i = 0; i < 4; i++) {
          yield roll(6)
        }
      }
      return [...rolls()].sort((a, b) => a - b)
                         .slice(-3)
                         .reduce((a, b) => a + b, 0)
  }

  public static getModifierFor(abilityValue: number): number {
      return (abilityValue < 3) 
             ? (() => {throw new Error("score must be at least 3")})() 
             : (abilityValue > 18)
             ? (() => {throw new Error("score can be at most 18")})() 
             : Math.floor ((abilityValue - 10) >> 1)
  }
}
