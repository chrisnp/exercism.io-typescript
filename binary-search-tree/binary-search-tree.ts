export class BinarySearchTree {
    public val: number
    public _left?:  BinarySearchTree | undefined = undefined
    public _right?: BinarySearchTree | undefined = undefined
    

    constructor(data: number) { this.val = data }

    public get data(): number {
        return this.val
    }

    public get right(): BinarySearchTree | undefined {
        return this._right
    }

    public get left(): BinarySearchTree | undefined {
        return this._left
    }

    public insert(item: number): void {
        if (item <= this.data) 
            if (!this.left) this._left = new BinarySearchTree(item)
            else this._left?.insert(item)
        else
            if (!this.right) this._right = new BinarySearchTree(item)
            else this._right?.insert(item)
    }

    public each(callback: (data: number) => void): void {
        this._left?.each(callback)
        callback(this.data)
        this._right?.each(callback)
    }
}
