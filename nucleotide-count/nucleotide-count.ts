class NucleotideCount {

  static nucleotideCounts(dna: string) {

    let strand = dna || ""
      
    if (strand.match(/[^ACGT]/g)) {
       throw new Error("Invalid nucleotide in strand")
    }

    const nuCounts: {[nuc: string]: number} = 
      [...strand].reduce((count, nucleotide) => {   
        return count[nucleotide] += 1
        }, {'A': 0, 'C': 0, 'G': 0, 'T': 0})

      return `${nuCounts['A']} 
              ${nuCounts['C']} 
              ${nuCounts['G']} 
              ${nuCounts['T']}`

  }
}

export default NucleotideCount
