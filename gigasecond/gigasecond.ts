const GIGASECOND = 1e09
const MILS = 1e03

export default class Gigasecond {

    private readonly dob: Date

    constructor (dob: Date) {
        this.dob = dob
    }

    date = (): Date =>
                    new Date(this.dob.getTime() +
                        MILS * GIGASECOND)
}