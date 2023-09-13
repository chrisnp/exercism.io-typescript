export const compute = (str1: string, str2: string): number => {
    if (str1.length !== str2.length) {
        throw new Error(
            "DNA strands must be of equal length."
        );
    }
    return [...str1].reduce(
        (distance, nucleotide, idx) => nucleotide !== str2[idx] 
                                       ? ++distance 
                                       : distance,
        0);
}