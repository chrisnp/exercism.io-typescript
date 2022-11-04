export class List {
  private list: any[]

  constructor(...items: any[]) {
    this.list = items
  }

  compare(that: List): string {
    const sameSize = this.list.length === that.list.length

    if (sameSize && this.contains(this, that)) { 
      return 'equal' 
    } else if (this.contains(that, this)) {
      return 'sublist'
    } else if (this.contains(this, that)) {
      return 'superlist'
    } else {
      return 'unequal'
    }
  }

  contains(sup: List, sub: List): boolean {
    return sub.list.length === 0 || 
           sup.list.some((_, supIdx) => 
            sub.list.every((subElem, subIdx) => 
              subElem === sup.list[supIdx + subIdx]))
  }
}

// function contains<T> (sup: T[], sub: T[]): boolean {
//   return sup === [] 
//          ? false 
//          : sub === [] 
//          ? true 
//          : sub.filter(x => !(x in sup)).length === 0
// }
