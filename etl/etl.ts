export const transform = 
    (legacy: {[score: string]: string[]}): {[score: string]: number} => {
        let novel: {[key: string]: number} = {};
        for (const [score,  letters] of Object.entries(legacy)) {
            legacy[score].forEach (c => novel[c.toLowerCase()] =+ score)
        }
        return novel
}
