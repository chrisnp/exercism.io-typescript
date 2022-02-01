const notAlpha = /[^a-zA-Z]+/g, 
      lenAlpha = 26,
      justText = (text: String): String => 
            (text.replace(notAlpha, '')).toLowerCase(),
      unique = (text: String): Set<String> => 
            new Set([...justText(text)])

export function isPangram(text: String): boolean {
      return unique(text).size === lenAlpha
}
