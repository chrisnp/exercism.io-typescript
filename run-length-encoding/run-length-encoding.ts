export default class RunLengthEncoding {

  static encode(plain: string): string {
    return plain.replace(/(.)\1+/g, (group, ch) =>
                                      group.length + ch)
  }

  static decode(encoded: string): string {
    return encoded.replace(/(\d+)(\w|\s)/g, (_, count, ch) =>
                                            ch.repeat(count))
  }
}