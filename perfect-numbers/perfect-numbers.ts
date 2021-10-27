type Classification = 'perfect' | 'abundant' | 'deficient'

const aliquot = (num: number) =>
 [...Array(num - 1).keys()]
 .map(i => num % (i + 1) !== 0 ? 0 : i + 1)
 .reduce((acc:number, i: number) => acc + i, 0)

export function classify(num: number): Classification {
  if (num <= 0) 
  throw new Error(
      'Classification is only possible for natural numbers.'
  )
  return aliquot(num) === num ? 'perfect'  :
         aliquot(num) > num   ? 'abundant' : 
         'deficient'
}
