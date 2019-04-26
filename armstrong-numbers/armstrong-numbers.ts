
export default class ArmstrongNumbers {

  public static isArmstrongNumber(number: number) {

    return number == [...String(number)].map(x => Number(x))
                                        .reduce((acc, n) => (
                                          acc + Math.pow(n, [...String(number)].length)
                                        ), 0)
  }
}