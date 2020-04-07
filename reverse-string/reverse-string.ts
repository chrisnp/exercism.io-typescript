export default class ReverseString {
    static reverse(str: String) {
        return str === ""
               ?
               str
               :
               [...str]
               .reduce((revStr, ch) => ch + revStr)
    }
}