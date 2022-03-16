interface IPosition {
  readonly black: number[]
  readonly white: number[]
}

export class QueenAttack implements IPosition{

  public readonly black: number[]
  public readonly white: number[]

  constructor(position: IPosition = {black: [0, 0], white: [0, 0]}) {

    const { black: [bfile, brank], white: [wfile, wrank] } = position

    this.black = position.black
    this.white = position.white

    if (bfile === wfile && brank === wrank) {
      throw new Error("Queens cannot share the same space")
    }
  }

  get position(): IPosition {
    return [this., this.col]
  }

  toString(): string {
    const [wfile, wrank] = this.white
    const [bfile, brank] = this.black
    const board = Array.from(Array(8), () => Array(8).fill('_'))

    board[bfile][brank] = 'B'
    board[wfile][wrank] = 'W'

    return board.map(row => row.join(' '))
                .join('\n') + "\n"
  }

  canAttack(): boolean {
    const [wfile, wrank] = this.white
    const [bfile, brank] = this.black
    const dfile = Math.abs(wfile - bfile)
    const drank = Math.abs(wrank - brank)

    return dfile * drank === 0 || 
           dfile / drank === 1
  }
}