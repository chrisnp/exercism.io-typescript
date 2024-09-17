export class CustomSet<T> {

  private elems: T[]

  constructor(initial?: T[]) {
    this.elems = initial ?? [] 
  }

  // constructor(private elems: T[] = []) 
  // {}

  empty(): boolean {
    return !this.elems.length
  }

  contains(element: T): CustomSet<T> {
    
  }

  add(element: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  subset(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
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
