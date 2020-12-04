type Color = "black"|"brown"|"red"|"orange"|
             "yellow"|"green"|"blue"|"violet"|
             "grey"|"white";

const Colors: {[c in Color]: number} = {
                black: 0,
                brown: 1,
                red: 2,
                orange: 3,
                yellow: 4,
                green: 5,
                blue: 6,
                violet: 7,
                grey: 8,
                white: 9,
      };

const LESS_THAN_TWO_COLORS : string =
    "At least two colors need to be present";

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error(LESS_THAN_TWO_COLORS);
    }
    this.colors = colors.slice(0, 2);
  }

  value = (): number => {
    let [c1, c2] = this.colors.map(c =>
                                   Colors[c]);
    return 10 * c1 + c2;
  }
}
