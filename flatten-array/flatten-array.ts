function* flattener(list: any[], levels: number): Generator<any[]> {
    if (levels === undefined) levels = 1
    for (const item of list) {
        if (Array.isArray(item) && levels > 0) 
            yield* flattener(item, levels - 1)
        else if (item !== undefined) yield item
        else continue
    }
}

export const flatten = 
    (array: any[]): any[] => [...flattener(array, Infinity)]
