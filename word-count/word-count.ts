export const count = (sentence: String): Map<string, number> => 
      sentence.trim().toLowerCase().split(/\s+/)
              .reduce((nums, word) => 
                  nums.set(word, (nums.get(word) || 0) + 1), 
                  new Map()
              )

