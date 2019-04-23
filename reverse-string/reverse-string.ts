const revStrRec = (str: String, len: number): String =>
    str ? revStrRec(str.substr(1), len - 1) + str[0] : str

export default  class ReverseString {
    static reverse( str: String ): String {
        return revStrRec(str, str.length)
    }
}
