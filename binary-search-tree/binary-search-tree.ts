export class BinarySearchTree<T> {
    private _data: T
    private _left?: BinarySearchTree<T>
    private _right?: BinarySearchTree<T>

    // API
    constructor(data: T) {
        this._data = data
    }

    public get data(): T {
        return this._data
    }

    public get left(): BinarySearchTree<T> | undefined {
        return this._left
    }

    public get right(): BinarySearchTree<T> | undefined {
        return this._right
    }

    public insert(item: T): void {
        if (item <= this._data) {
            if (!this._left) this._left = new BinarySearchTree<T>(item)
            else this._left.insert(item)
            
        } else {
            if (!this._right) this._right = new BinarySearchTree<T>(item)
            else this._right.insert(item)
        }
    }

    public each(callback: (data: T) => void): void {
        // In-order traversal: left subtree, current node, right subtree
        this._left?.each(callback)
        callback(this._data)
        this._right?.each(callback)
    }

    // Additional utility methods

    public search(item: T): boolean {
        if (item === this._data) return true
        else if (item < this._data) return this._left 
                                           ? this._left.search(item) 
                                           : false
        else return this._right 
                    ? this._right.search(item) 
                    : false
    }

    public size(): number {
        const leftSize = this._left ? this._left.size() : 0
        const rightSize = this._right ? this._right.size() : 0
        return 1 + leftSize + rightSize
    }

    public depth(): number {
        const leftDepth = this._left ? this._left.depth() : 0
        const rightDepth = this._right ? this._right.depth() : 0
        return 1 + Math.max(leftDepth, rightDepth)
    }

    public toArray(): T[] {
        const result: T[] = []
        this.each((data) => result.push(data))
        return result
    }
}