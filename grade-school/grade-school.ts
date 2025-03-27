export class GradeSchool {
  private db: Roster

  constructor() {
    this.db = {};
  }
  roster() {
    return deepcopy(this.db) as Roster
  }
  add(name: string, grade: number): void {
    for (let gd in this.db) // first take out student from all grades
      this.db[gd] = this.db[gd].filter(n => n !== name)
    this.db[grade] = this.db[grade] || []
    this.db[grade].push(name) // then add them in this grade
    this.db[grade].sort() // and re-sort the grade
  }
  grade(grade: number): string[] {
    return deepcopy(this.db[grade] ?? []) as string[]
  }
}

type Roster = { [grade: number]: string[], }

const deepcopy = (x: any): any => JSON.parse(JSON.stringify(x))