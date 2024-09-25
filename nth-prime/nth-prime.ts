const sieve = (upto: number): number[] => {
  let p = 2
  const range = [], primes = []
  for (let i = 2; i <= upto; i++) 
      range[i] = {val: i, prime: true}
  for (let i = 2; i <= upto / 2; i++) {
      for (let j = 2 * p; j <= upto; j += p) {
          range[j].prime = false
      }
      p++
  }
  for (let k in range)
      range[k].prime ? primes.push(Number(k)) : null
  return primes
}

export const nth = (n: number): number => {
  if (n < 1) throw new Error("Prime is not possible")
  let approximate = 
        n * Math.log(n) + n * Math.log(Math.log(n))
  approximate < 15 ? approximate = 15 : {}
  return sieve(approximate)[n - 1]
}

