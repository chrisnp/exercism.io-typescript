export class CustomSet<T> {

  private elems: T[]

  constructor(initial?: T[]) {
    this.elems = initial ?? []
    // this.elems = this.elems
    //              .filter((e, i) => this.elems.indexOf(e) === i)
    //              .sort()
  }

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

  eql(other: CustomSet<T>): boolean {
    return this.subset(other) && other.subset(this)
  }

  intersection(other: CustomSet<T>): CustomSet<T> {
    return new CustomSet(this.elems.filter((e) => other.contains(e)))
  }

  subset(other: CustomSet<T>): boolean {
    return this.elems.every(e => other.contains(e))
  }

  disjoint(other: CustomSet<T>): boolean {
    return this.intersection(other).empty()
  }

  union(other: CustomSet<T>): CustomSet<T> {
    return new CustomSet(other.elems.concat(this.difference(other).elems))
  }

  difference(other: CustomSet<T>): CustomSet<T> {
    return new CustomSet(this.elems.filter((e) => !other.contains(e)))
  }
}
