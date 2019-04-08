const GIGASECOND = 1e09 
const MILS = 1e03

export default class Gigasecond {

    constructor (private readonly dob: Date) {
        this.dob = dob
    }

    date = (): Date => new Date(this.dob.getTime() + MILS * GIGASECOND)
}