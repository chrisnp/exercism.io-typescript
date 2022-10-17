const sieve = (upTo: number): boolean[] => {
  let eratosthenes = new Array(upTo + 1).fill(null).map((x, i) => x = true )
  eratosthenes[0] = eratosthenes[1] = false
  let p = 2
  while (p ** 2 <= upTo) {
    if (eratosthenes[p]) {
      for(let i: number = p ** 2; i <= upTo; i += p) {
        eratosthenes[i] = false
      }
    }
    p += 1
  }
  return eratosthenes
}

export function primes(limit: number): any {
  const sieved: boolean[] = sieve(limit)
  let ps: number[] = []

  for (let i = 0; i <= sieved.length - 1; i++) {
    ps = sieved[i] ? ps.concat([Number(i)]) : ps
  }
  return ps
}
