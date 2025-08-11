export class BinarySearchTree<T> {
    public val: T
    public _left?:  BinarySearchTree<T> | undefined = undefined
    public _right?: BinarySearchTree<T> | undefined = undefined

    constructor(data: T) { this.val = data }

    public get data(): T {
        return this.val
    }

    public get right(): BinarySearchTree<T> | undefined {
        return this._right
    }

    public get left(): BinarySearchTree<T> | undefined {
        return this._left
    }

    public insert(item: T): void {
        if (item <= this.data) 
            if (!this.left) this._left = new BinarySearchTree<T>(item)
            else this._left?.insert(item)
        else
            if (!this.right) this._right = new BinarySearchTree<T>(item)
            else this._right?.insert(item)
    }

    public each(callback: (data: T) => void): void {
        this._left?.each(callback)
        callback(this.data)
        this._right?.each(callback)
    }
}
