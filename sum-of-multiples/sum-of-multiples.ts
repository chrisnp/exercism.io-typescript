export const sum = (fs: number[], max: number): number => 
  [...Array(max).keys()]
  .reduce((summs, m) => 
            summs + (fs.some(f => m % f === 0) && m || 0), 0)
