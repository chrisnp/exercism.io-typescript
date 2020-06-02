const COLORS: string[] = ["black",
                          "brown",
                          "red",
                          "orange",
                          "yellow",
                          "green",
                          "blue",
                          "violet",
                          "grey",
                          "white"]

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
    if (this.colors.length !== 2) {
      throw new Error("not enough colors");
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