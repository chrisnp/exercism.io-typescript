class Node<T> {
  value: T
  prev?: Node<T>
  next?: Node<T>
  constructor(value: T) {
    this.value = value
  }
}

export class LinkedList<T> {
  private head?: Node<T>
  private last?: Node<T>

  public push = (element: T): LinkedList<T> => {
    const node = new Node<T>(element)
    if (!this.last) {
      this.head = node
    }
    else {
      this.last.next = node
      node.prev = this.last
    }
    this.last = node
    return this
  }

  public pop = (): T => {
    const node = this.last
    if (!node) throw new Error("Empty list. Cant't pop.")
    if (node.prev) {
      node.prev.next = undefined
      this.last = node.prev
    }
    else {
      this.last = undefined
      this.head = undefined
    }
    return node.value 
  }

  public shift = (): T => {
    const node = this.head
    if (!node) throw new Error("Empty list. Can't shift")
    if (node.next) {
      node.next.prev = undefined
      this.head = node.next
    }
    else {
      this.head = undefined
      this.last = undefined
    }
    return node.value
  }

  public unshift = (element: T): LinkedList<T> => {
    const node = new Node<T>(element)
    if (!this.head) {
      this.last = node
    }
    else {
      this.head.prev = node
      node.next = this.head
    }
    this.head = node
    return this
  }

  public delete = (element: T): LinkedList<T> => {
    let node = this.head
    while (node) {
      if (node.value == element) {
        if (node.next) node.next.prev = node.prev
        if (node.prev) node.prev.next = node.next
        if (this.head == node) this.head = undefined
        if (this.last == node) this.last = undefined
        break
      }
      node = node.next
    }
    return this
  }

  public count = (): number => {
    let count = 0, node = this.last
    while (node) {
      count += 1
      node = node.prev
    }
    return count
  }
}
