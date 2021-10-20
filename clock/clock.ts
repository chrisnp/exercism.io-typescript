const padit = (num: number) => num < 10 ? '0' + num : num.toString()

export class Clock {
  readonly minutes: number
  constructor(hour: number, minute?: number) {
    this.minutes = !minute ? 60 * hour : 60 * hour + minute
  }
  private get hour() {
    let hours = (Math.floor (this.minutes / 60)) % 24
    return (hours < 0) ? hours + 24 : hours
  }
  private get minute() {
    let mins = this.minutes % 60
    return mins < 0 ? mins + 60 : mins
  }
  private formatTime() {
    return `${padit (this.hour)}:${padit(this.minute)}`
  }
  public toString(): string {
    return this.formatTime()
  }
  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes)
  }
  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes)
  }
  public equals(other: Clock): boolean {
    return this.formatTime() === other.toString()
  }
}