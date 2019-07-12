export default class FlattenArray {

    static flatten(array: any[]): any[] {
      
        let flat: any[] = []
      
        array.forEach(element => {
            if (!Array.isArray(element)) {
                if (element !== null && element !== undefined)
                    flat.push(element)
            }
            else {
                this.flatten(element).forEach(e => flat.push(e))
            }
        })
        return flat
    }
}