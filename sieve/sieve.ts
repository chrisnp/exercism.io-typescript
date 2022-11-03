function* sieve (upTo: number): any {
  let eratosthenes = new Array(upTo + 1).fill(true),
      p = 2
  eratosthenes[0] = eratosthenes[1] = false
  while (p ** 2 <= upTo) {
    if (eratosthenes[p]) {
      for(let i: number = p ** 2; i <= upTo; i += p) {
        eratosthenes[i] = false
      }
    }
    p += 1
  }
  for (let i = 0; i <= eratosthenes.length; i++) {
    if ( eratosthenes[i] ) {
        yield i
    }
  }
}

export const primes = (limit: number): number[] => {
  let ps: number[] = [],
      p: any = undefined,
      sieved = sieve(limit)
  while (true) {
      p = sieved.next()
      if (p.done) break
      ps.push(Number(p.value || 0))
  }
  return ps
}
