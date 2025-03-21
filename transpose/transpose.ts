export function transpose(rows: string[]): string[] {
    const maxCol = Math.max(0, ...(rows.map(row => row.length)))
    return [...Array(maxCol).keys()]
           .map (col => 
                   trimTrailing(rows.map ((_, row) => rows[row][col]))
                   .map (ch => ch || ' ').join('')
            )
}

const trimTrailing = (array: string[]): string[] =>
    array.slice(0, 
                array.length - [...array]
                               .reverse()
                               .findIndex(x => x !== undefined)
    ) 
