const shift = (char: string, base: number, key: number) : string =>
        String.fromCharCode((char.charCodeAt(0) - base + key) % 26 + base)

export const rotate = (text: string, key: number) : string =>
    text.replace(/[a-z]/g, (char) => shift (char, 'a'.charCodeAt(0), key))
        .replace(/[A-Z]/g, (char) => shift (char, 'A'.charCodeAt(0), key))
