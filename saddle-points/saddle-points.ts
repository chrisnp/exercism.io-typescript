type Point = {row: number, column: number}

function* points(matrix: number[][]) {
    let rows = matrix, 
        cols = rows[0].map((_, c) => rows.map(r => r[c]))
    const isSaddle = (r: number, c: number): boolean =>
        Math.max(...rows[r]) === Math.min(...cols[c])
    for (let row = 1; row < rows.length + 1; row++)
        for (let col = 1; col < cols.length + 1; col++) 
            if (isSaddle(row - 1, col - 1)) 
                yield({row: row, column: col})
}

export const saddlePoints = 
    (matrix: number[][]): Point[] => [...points(matrix)]
