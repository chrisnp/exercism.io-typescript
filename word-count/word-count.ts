export const count = (sentence: String): Map<string, number> => 
    [...(sentence.trim().toLowerCase().match(/\b(\w|')+\b/g) ?? [])]
    .reduce(
        (freqs, word) => 
            freqs.set(word, (freqs.get(word) || 0) + 1), 
            new Map()
     )
