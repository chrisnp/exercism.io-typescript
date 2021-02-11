const CODONS:
  { [codon: string]: string } = {
                  AUG: "Methionine",
                  UUU: "Phenylalanine",
                  UUC: "Phenylalanine",
                  UUA: "Leucine",
                  UUG: "Leucine",
                  UCU: "Serine",
                  UCC: "Serine",
                  UCA: "Serine",
                  UCG: "Serine",
                  UAU: "Tyrosine",
                  UAC: "Tyrosine",
                  UGU: "Cysteine",
                  UGC: "Cysteine",
                  UGG: "Tryptophan",
                  UAA: "STOP",
                  UAG: "STOP",
                  UGA: "STOP",
  };

export default class ProteinTranslation {

  static proteins(rna: string = ""): string[] {

    const rnaSeq: string[] = rna.match (/.../g) || [];
    const proteins: string[] =
      rnaSeq.map (codon =>
                    CODONS[codon] || "INVALID");

    if ( proteins.includes("INVALID") ) {
      throw new Error("Invalid codon");
    }

    const stop: number = proteins.indexOf("STOP");
    
    return stop > -1 ?
           proteins.slice(0, stop) :
           proteins;
  }
}
