const bottles = (n: number): string => n === 0 
                               ? `No more bottles` 
                               : n === 1 ? `1 bottle`
                                         : `${n} bottles`

const action = (current: number): string => 
    (current === 0) 
    ? `Go to the store and buy some more,` 
    : `Take ${(current === 1) ? 'it' : 'one'} down and pass it around,`

const next = (curr: number): number => (curr === 0) ? 99 : curr - 1

export function verse(index: number = 0): string {
    const v0 = `${bottles(index)} of beer on the wall,`
    const v1 = ` ${bottles(index).toLowerCase()} of beer.`
    const v2 = action(index)
    const v3 = ` ${bottles(next(index)).toLowerCase()} of beer on the wall.`
    const v4 = ''
    return v0 + v1 + '\n' + v2 + v3 + '\n' + v4
}

export function sing(
    initialBottlesCount: number = 99,
    takeDownCount: number = 0
): string {
    if (initialBottlesCount === takeDownCount) 
        return verse(initialBottlesCount)
    return verse(initialBottlesCount) + '\n' + 
           sing(initialBottlesCount - 1, takeDownCount) 
}
