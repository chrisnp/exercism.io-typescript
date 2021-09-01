class NucleotideCount {

  static nucleotideCounts(dna: string) {

    let strand = dna || ""
      
    if (strand.match(/[^ACGT]/g)) {
       throw new Error("Invalid nucleotide in strand")
    }

    const count = 
      [...strand].reduce((counts, nucleotide) => {   
          counts[nucleotide]++
          return counts
      }, 
      {A: 0, C: 0, G: 0, T: 0})

      return {A: count['A'],
              C: count['C'],
              G: count['G'],
              T: count['T']}

  }
}

export default NucleotideCount
