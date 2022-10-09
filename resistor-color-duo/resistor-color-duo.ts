enum Colors {
        black = 0,
        brown,
        red,
        orange,
        yellow,
        green,
        blue,
        violet,
        grey,
        white
}

type Color = keyof typeof Colors;

const LESS_THAN_TWO_COLORS = "At least two colors need to be present";

class ResistorColor {
  private colors: Color[];
  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error(LESS_THAN_TWO_COLORS);
    }
    this.colors = colors.slice(0, 2);
  }
  value = (): number => {
    const [c1, c2] = this.colors.map(c => Colors[c]);
    return 10 * c1 + c2;
  }
}

export const decodedValue = (bands: Color[]): number => {
    return new ResistorColor(bands).value()
}
