const COLORS: string[] =
  ["black", "brown", "red", "orange", "yellow",
   "green", "blue", "violet", "grey", "white"];

const LESS_THAN_TWO_COLORS: string =
    "At least two colors need to be present";

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
    if (this.colors.length < 2) {
      throw new Error(LESS_THAN_TWO_COLORS);
    }
    if (this.colors.length > 2) {
      this.colors = [this.colors[0],
                     this.colors[1]];
    }
  }

  value = (): number => {
    let c1: number =
        COLORS.indexOf(this.colors[0]);
    let c2: number =
        COLORS.indexOf(this.colors[1]);
    return 10 * c1 + c2;
  }
}
