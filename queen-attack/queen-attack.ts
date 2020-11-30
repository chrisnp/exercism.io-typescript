interface IPosition {
  black: number[]
  white: number[]
}

export default class QueenAttack implements IPosition{

  readonly black: number[]
  readonly white: number[]

  constructor(position: IPosition) {

    const { black: [bfile, brank],
            white: [wfile, wrank] } = position

    this.black = position.black
    this.white = position.white

    if (bfile === wfile && brank === wrank) {
      throw new Error("Queens cannot share the same space")
    }
  }

  toString(): string {
    const [wfile, wrank] = this.white
    const [bfile, brank] = this.black
    const board = 
        Array.from(Array(8), () => Array(8).fill('_'))

    board[bfile][brank] = 'B';
    board[wfile][wrank] = 'W';

    return board.map(row => row.join(' '))
                .join('\n') + 
                "\n"
  }

  canAttack(): boolean {
    const [wfile, wrank] = this.white
    const [bfile, brank] = this.black
    const dfile = Math.abs(wfile - bfile)
    const drank = Math.abs(wrank - brank)

    return dfile === 0 || drank === 0 || dfile / drank === 1
  }
}