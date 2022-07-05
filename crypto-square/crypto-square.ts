const squareSize = 
    (str: string): number => Math.ceil(Math.sqrt(str.length));

export class Crypto {
    private readonly squareSize: number;
    private plaintext: string;

    constructor (text: string ="") {
        this.plaintext = text.replace(/\W/g, '').toLowerCase();
        this.squareSize = squareSize(this.plaintext);
    }

    get ciphertext (): string {
        let rows = [], cols = [];
        let listchars = [...this.plaintext];
        while (listchars.length > 0) {
            rows.push(listchars.splice(0, this.squareSize).join(""));
        }
        for (let i = 0; i < this.squareSize; ++i) {
            cols.push(rows.map(r => r[i] || " ").join(""));
        }
        return cols.join(" ");
    }
}
