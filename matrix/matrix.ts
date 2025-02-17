export class Matrix {
  private _rows: number[][]
  private _columns: number[][]

  constructor(matrix: string) {
    this._rows = matrix.split('\n')
                       .map(r => r.split(' ').map(n => Number(n)))
    this._columns = this._rows[0]
                        .map((_, i) => this._rows.map((r) => r[i]))
  }

  get rows(): number[][] {
    return this._rows
  }

  get columns(): number[][] {
    return this._columns
  }
}
