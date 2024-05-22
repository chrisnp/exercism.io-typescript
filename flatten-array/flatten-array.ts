function* flattener(list: any[], levels: number): Generator<any[]> {
    if (levels === undefined) levels = 1
    for (const item of list) {
        if (Array.isArray(item) && levels > 0) 
            yield* flattener(item, levels - 1)
        else if (item !== undefined) yield item
        else continue
    }
}

class FlattenArray {
    static flatten(array: any[]): any[] {
        return [...flattener(array, Infinity)]
    }
}

export default FlattenArray