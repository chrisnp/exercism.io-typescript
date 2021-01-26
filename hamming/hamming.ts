export default class Hamming {

    compute (str1: string, str2: string): number {
        if (str1.length !== str2.length) {
            throw new Error(
                "DNA strands must be of equal length."
            );
        }
        return [...str1]
               .reduce((distance, nucl, i) =>
                            (nucl !== str2[i]) ?
                            ++distance :
                            distance,
                        0);
    }
}