export class Robot {
  private _name: string = ""

  static used = new Set()

  constructor() { this.resetName() }

  public get name(): string { return this._name }

  public resetName(): void { this._name = Robot.generateName() }

  static generateName () {
    let name: string
    do {
        name = randomAlpha() + randomNumeric()
    } while (this.used.has(name))
    this.used.add(name)
    return name
  }

  public static releaseNames(): void {
    this.used.clear()
  }
}

const randomAlpha = () => 
  String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
  String.fromCharCode(Math.floor(Math.random() * 26) + 65)

const randomNumeric = () => Math.floor(Math.random() * 1000)
                                .toString().padStart(3, "0")
