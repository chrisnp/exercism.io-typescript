export const encode = (plain: string): string =>
  plain.replace(/(.)\1+/g, (group, c) => group.length + c)

export const decode = (encoded: string): string => 
  encoded.replace(/(\d+)(\w|\s)/g, (_, count, c) => c.repeat(count))