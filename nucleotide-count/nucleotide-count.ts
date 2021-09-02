export const nucleotideCounts = (strand: string) => {

    const count = 
      [...strand].reduce((counts, nucleotide) => {
          if (!(nucleotide in counts)) {
            throw new Error("Invalid nucleotide in strand")
          }
          else {   
          counts[nucleotide]++
          }
          return counts
      }, 
      {A: 0, C: 0, G: 0, T: 0})

      return {A: count['A'],
              C: count['C'],
              G: count['G'],
              T: count['T']}
}
