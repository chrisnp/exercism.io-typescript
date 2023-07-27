export const isArmstrongNumber = (num: number | bigint): boolean =>
    BigInt(num) === 
    [...String(num)].map(x => BigInt(x))
                    .reduce(
                      (acc, n) =>
                        (acc + (n ** BigInt([...String(num)].length))), 
                      BigInt(0)
                    )