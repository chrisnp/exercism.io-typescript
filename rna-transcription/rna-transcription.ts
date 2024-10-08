const TRANSCRIBE: { [nucl: string]: string } = {
    G: 'C', C: 'G', T: 'A', A: 'U'
}

export const toRna = (dna: string): string => {
    if (/[^ACGT]/.test(dna))
        throw new Error('Invalid input DNA.');
    return dna.split('')
              .map((n) => TRANSCRIBE[n])
              .join('');
}
