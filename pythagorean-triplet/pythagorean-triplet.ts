// type Options = {
//   minFactor?: number
//   maxFactor?: number
//   sum: number
// }

// export function triplets({}: Options): Triplet[] {
//   throw new Error('Remove this statement and implement this function')
// }

// class Triplet {
//   constructor() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   toArray(): [number, number, number] {
//     throw new Error('Remove this statement and implement this function')
//   }
// }
type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

export const triplets = (
  { sum, minFactor = 1, maxFactor = sum }: Options
  ): Triplet[] => 
{
  const pythagoreans: Triplet[] = []
  for (let a = minFactor; a < sum / 3; a++) {
    if (a > maxFactor) break  
    for (let b = a + 1; b < sum / 2; b++) {
      if (b > maxFactor) break
      const c = sum - a - b
      if (c <= b || c < minFactor || c > maxFactor) 
        continue
      if (c === ((x**2) + (y**2))**0.5) {
        pythagoreans.push(new Triplet(a, b, c))
      }
    }
  }
  
  return pythagoreans
}

export class Triplet {
  private a: number
  private b: number
  private c: number
  
  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c]
  }
}
