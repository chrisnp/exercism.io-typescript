
export default class ArmstrongNumbers {

  public static isArmstrongNumber(num: number) {

    return num === [...String(num)]
                   .map(x => Number(x))
                   .reduce((acc, n) =>
                    (acc + Math.pow(n, [...String(num)].length)
                    ), 0)
  }
}