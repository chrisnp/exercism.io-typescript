export class List<T> {

  constructor(public list: T[]) {}

  public static create<T>(...values: T[]): List<T> {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    if (!values) {
        throw new Error('Oops')
    }
    return new List(values);
  }

  public append(list: List<T>): List<T> {
      return list.foldr(lambda acc, x: [x] + acc, xs, ys)
  }
      
}
