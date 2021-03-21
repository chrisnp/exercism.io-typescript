const squareSize =
    (str: string): number =>
        Math.ceil(Math.sqrt(str.length));

const nub =
    (input: string, chunks: number | undefined): string[] => {
        const output: string[] = [];
        let listchars: string[] = [...input];
        while (listchars.length > 0) {
            output.push(listchars.splice(0, chunks).join(""));
        }
        return output;
    };

const cipherText =
    (square: string | any[], chunksize: number): string => {
        let cipher: string = "";
        for (let i = 0; i < chunksize; i++) {
            for (let j = 0; j < square.length; j++) {
                cipher += square[j][i] || "";
            }
        }
        return cipher;
    };

export default class Crypto {

    private readonly squareSize: number;
    private text: string;

    constructor (text: string ="") {
        this.text =
            text.toLowerCase();
        this.squareSize =
            squareSize(this.normalizePlaintext());
    }

    size (): number {
        return this.squareSize;
    }

    ciphertext (): string {
        return cipherText(this.plaintextSegments(),
                          this.squareSize);
    }

    normalizeCiphertext (): string {
        return nub(this.ciphertext(), this.squareSize)
               .join(" ");
    }

    normalizePlaintext (): string {
        return this.text.replace(/[\W]/g, "");
    }

    plaintextSegments (): string[] {
        return nub(this.normalizePlaintext(),
                   this.squareSize);
    }
}