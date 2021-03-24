class FlattenArray {

    static flatten(array: any[]): any[] {

        const flat: any[] = []
        
        array.forEach((item) => {
            if (!Array.isArray(item)) {
                if (item !== null && item !== undefined) {
                    flat.push(item)
                }
            } else {
                this.flatten(item).forEach((i) =>
                        flat.push(i))
            }
        })

        return flat
    }
}

export default FlattenArray