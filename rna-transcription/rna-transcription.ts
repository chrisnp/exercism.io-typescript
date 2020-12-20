const TRANSL: { [nucl: string]: string } = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
};

export default class Transcriptor {

    toRna(dna: string): string {
        if (/[^ACGT]/.test(dna)) {
            throw new
                Error("Invalid input DNA.");
        } else {
            return dna
                   .split("")
                   .map((n) => TRANSL[n])
                   .join("");
        }
    }
}