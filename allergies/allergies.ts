const allergens: string[] = 
                  [ "eggs",
                    "peanuts",
                    "shellfish",
                    "strawberries",
                    "tomatoes",
                    "chocolate",
                    "pollen",
                    "cats"
                  ]

export default class Allergies {

    allergies: string[]

    constructor (private combination: number) {
        this.allergies = allergens
                         .filter ((_, i) => 
                                    this.combination & 2**i)
    }

    allergicTo = (allergen: string) => 
                 this.allergies.some(a => a == allergen)


    list = () => this.allergies
}