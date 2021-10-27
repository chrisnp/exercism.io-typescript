type Classification = 'perfect' | 'abundant' | 'deficient'

const range = (start: number, end: number) =>
      new Array(end - start + 1).fill(undefined)
                                .map((_, i) => i + start)

const factors = (num: number) => 
      range(1, Math.floor(num / 2))
      .filter(x => num % x === 0)
                                                            
const aliquot = (num: number) =>
      factors(num)
      .reduce((acc:number, f: number) => acc + f, 0)

export function classify(num: number): Classification {
  if (num <= 0) 
  throw new Error(
      'Classification is only possible for natural numbers.'
  )
  return aliquot(num) === num ? 'perfect'  :
         aliquot(num) > num   ? 'abundant' : 
         'deficient'
}
