export class GradeSchool {
  private db: Roster

  constructor() {
    this.db = {};
  }
  roster() {
    return deepcopy(this.db) as Roster
  }
  add(name: string, grade: number): void {
    for (let grade in this.db)
      this.db[grade] = this.db[grade].filter(n => n !== name)
    this.db[grade] = this.db[grade] || []
    this.db[grade].push(name)
    this.db[grade].sort()
  }
  grade(grade: number): string[] {
    return deepcopy(this.db[grade] ?? []) as string[]
  }
}

type Roster = { [grade: number]: string[], }

const deepcopy = (x: any): any => JSON.parse(JSON.stringify(x))