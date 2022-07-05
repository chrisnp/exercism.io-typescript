type Queen = readonly [number, number]

type Position = { white: Queen; black: Queen }

export class QueenAttack {
  readonly black: Queen
  readonly white: Queen

  constructor({ black, white }: Partial<Position> = {}) 
  {
    this.black = black || [0, 3]
    this.white = white || [7, 3]
    const [bfile, brank] = this.black, 
          [wfile, wrank] = this.white 
    if ([bfile, brank, wfile, wrank].some(p => p < 0 || p > 7)) {
        throw new Error('Queen must be placed on the board')
    }
    if (bfile === wfile && brank === wrank) {
      throw new Error("Queens cannot share the same space")
    }
  }

  toString(): string {
    const [wfile, wrank] = this.white,
          [bfile, brank] = this.black,
          board = Array.from(Array(8), () => Array(8).fill('_'))
    board[bfile][brank] = 'B'
    board[wfile][wrank] = 'W'
    return board.map(row => row.join(' ')).join('\n')
  }

  get canAttack(): boolean {
    const [wfile, wrank] = this.white,
          [bfile, brank] = this.black,
          dfile = Math.abs(wfile - bfile),
          drank = Math.abs(wrank - brank)
    return dfile * drank === 0 || 
           dfile / drank === 1
  }
}


