export class List<T> {
    private values?: { head: unknown, tail: List<T> } | undefined;

    public static create<T = any>(...values: T[]): List<T> {
        // Do *not* construct any array literal ([]) in your solution.
        // Do *not* construct any arrays through new Array in your solution.
        // DO *not* use any of the Array.prototype methods in your solution.
        // You may use the destructuring and spreading (...) syntax from Iterable.
        if (values.length === 0) { return new List<T>() }
        const [head, ...tail] = values
        return new List<T>(head, List.create<T>(...tail))
    }

    constructor(head?: unknown, tail?: List<T>) {
        this.values = head ? {head, tail: tail ?? new List()} : undefined
    }

    public foldl<U, T>(fn: (acc: U, x: T) => U, init: U): U {
        if(this.values === undefined) { return init }
        return this.values?.tail.foldl(fn, fn(init, this.values?.head as T))
    }

    public foldr<U, T>(fn: (acc: U, x: T) => U, init: U): U {
        if(this.values === undefined) { return init } 
        return fn(this.values?.tail.foldr(fn, init), this.values?.head as T)
    }

    public append(list: List<T>): List<T> {
        return this.foldr<List<T>, unknown>((acc, x) => new List(x, acc), list)
    }

    public concat(lists: List<List<T>>): List<T> {
        return lists.foldl<List<T>, List<T>>((acc, x) => acc.append(x), this)
    }

    public length(): number {
        return this.foldl<number, unknown>((len, _) => len + 1, 0)
    }

    public map<U>(fn: (arg: T) => U): List<U> {
        return this.foldr<List<U>, T>((acc, x) => new List(fn(x), acc), 
                                      List.create())
    }

    public filter<T>(fn: (arg: T) => boolean): List<T> {
        return this.foldr<List<T>, unknown>((acc, x) => (fn(x as T) 
                                                         ? new List(x, acc) 
                                                         : acc), 
                                            List.create())
    }

    public reverse(): List<T> {
        return this.foldl<List<T>, unknown>((acc, x) => new List(x, acc), 
                                            List.create())
    }

    public forEach(fn: (arg: unknown) => unknown): void {
        this.foldl<unknown, void>((_, x) => fn(x), undefined)
    }
}