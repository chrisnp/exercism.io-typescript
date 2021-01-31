function transform(legacy: { [score: string]: string[] }):
                                { [score: string]: number } {
    let novel: { [key: string]: number } = {};

    for (const [score,  letters] of Object.entries(legacy)) {
      legacy[score].forEach (ch =>
            novel[ch.toLowerCase()] =+ score);
    }
    return novel;
}

export default transform;
