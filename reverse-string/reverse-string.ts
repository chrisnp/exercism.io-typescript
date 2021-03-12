class ReverseString {
    static reverse(str: String) {
        return [...str].reduce((revStr, ch) => 
                                ch + revStr, "")
    }
}

export default ReverseString