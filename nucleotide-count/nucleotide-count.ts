// const getKeyValue = 
//   <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

class NucleotideCount {

  static nucleotideCounts(dna: string) {

    let strand = dna || ""
      
    if (strand.match(/[^ACGT]/g)) {
       throw new Error("Invalid nucleotide in strand")
    }

    const nuCounts  = 
      [...strand].reduce((counts, nucleotide) =>
      {   
          if (nucleotide) {
            counts[nucleotide]++
          }
          return counts
      }, 
      {A: 0, C: 0, G: 0, T: 0})

      return {"A": nuCounts['A'],
              "C": nuCounts['C'],
              "G": nuCounts['G'],
              "T": nuCounts['T']}

  }
}

export default NucleotideCount
