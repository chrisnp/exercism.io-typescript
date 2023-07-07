const GIGASECOND = 1e09
const MILLIS = 1e03

export class Gigasecond {

    private readonly dob: Date

    constructor (dob: Date) {
        this.dob = dob
    }

    date = (): Date => 
        new Date(this.dob.getTime() + MILLIS * GIGASECOND)
}