const COMMANDS: Map<number, string> = new Map([
  [1 << 0, 'wink'],
  [1 << 1, 'double blink'],
  [1 << 2, 'close your eyes'],
  [1 << 3, 'jump']
])      

export const commands = (num: number) => {
  let secret: string[] = [] 
  for (const [mask, c] of COMMANDS)
    if ((num & mask) !== 0) secret.push(c) 
  if ((num & 1 << 4) !== 0) secret.reverse()
  return secret
}
