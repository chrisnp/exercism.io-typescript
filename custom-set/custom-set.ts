export class CustomSet<T> {

  private elems: T[]

  constructor(initial?: T[]) {
    this.elems = initial ?? []
    this.elems = this.elems
                 .filter((e, i) => this.elems.indexOf(e) === i)
                 .sort()
  }

  // constructor(private elems: T[] = []) 
  // {}

  empty(): boolean {
    return !this.elems.length
  }

  contains(element: T): boolean {
    return this.elems.indexOf(element) >= 0
  }

  add(element: T): CustomSet<T> {
    this.contains(element) || this.elems.push(element)
    return this
  }

  subset(other: CustomSet<T>): boolean {
    return this.elems.every(e => other.contains(e))
  }

  disjoint(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  eql(other: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  union(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  intersection(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  difference(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }
}
