export class CustomSet<T> {

  private elems: T[]

  constructor(initial?: T[]) {
    this.elems = initial ?? []
  }

  empty(): boolean {
    return !this.elems.length
  }

  contains(element: T): boolean {
    return this.elems.indexOf(element) > -1
  }

  add(element: T): CustomSet<T> {
    this.contains(element) || this.elems.push(element)
    return this
  }

  eql(that: CustomSet<T>): boolean {
    return this.subset(that) && that.subset(this)
  }

  intersection(that: CustomSet<T>): CustomSet<T> {
    return new CustomSet(this.elems.filter((e) => that.contains(e)))
  }

  subset(that: CustomSet<T>): boolean {
    return this.elems.every(e => that.contains(e))
  }

  disjoint(that: CustomSet<T>): boolean {
    return this.intersection(that).empty()
  }

  union(that: CustomSet<T>): CustomSet<T> {
    return new CustomSet(that.elems.concat(this.difference(that).elems))
  }

  difference(that: CustomSet<T>): CustomSet<T> {
    return new CustomSet(this.elems.filter((e) => !that.contains(e)))
  }
}
