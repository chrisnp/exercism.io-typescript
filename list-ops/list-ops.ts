export class List<T> {
    private values?: { head: unknown, tail: List<T> } | undefined;
    constructor(head?: unknown, tail?: List<T>) {
        this.values = head ? {head, tail: tail ?? new List()} : undefined
    }
    public static create<T = any>(...values: T[]): List<T> {
        if (values.length === 0) { return new List<T>() }
        const [head, ...tail] = values
        return new List<T>(head, List.create<T>(...tail))
    }
    public foldl<U, T>(fn: (acc: U, x: T) => U, init: U): U {
        if(this.values === undefined) { return init }
        return this.values?.tail.foldl(fn, fn(init, this.values?.head as T))
    }
    public foldr<U, T>(fn: (acc: U, x: T) => U, init: U): U {
        if(this.values === undefined) { return init } 
        return fn(this.values?.tail.foldr(fn, init), this.values?.head as T)
    }
    public append<T>(list: List<T>): List<T> {
        return this.foldr<List<T>, unknown>((acc, x) => new List(x, acc), list)
    }
    public concat<T>(lists: List<List<T>>): List<T> {
        return lists.foldl<List<T>, List<T>>((acc, x) => acc.append(x), this)
    }
    public length(): number {
        return this.foldl<number, unknown>((len, _) => len + 1, 0)
    }
    public map<T>(fn: (arg: T) => T): List<T> {
        return this.foldr<List<T>, T>((acc, x) => new List(fn(x), acc), List.create())
    }
    public filter<T>(fn: (arg: T) => boolean): List<T> {
        return this.foldr<List<T>, T>((acc, x) => (fn(x) 
                                                   ? new List(x, acc) 
                                                   : acc), 
                                     List.create())
    }
    public reverse<T>(): List<T> {
        return this.foldl<List<T>, T>((acc, x) => new List(x, acc), List.create())
    }
    public forEach<T>(fn: (arg: unknown) => T): void {
        this.foldl<unknown, void>((_, x) => fn(x), undefined)
    }
}