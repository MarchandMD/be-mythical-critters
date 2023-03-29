class Wizard {
    constructor(data) {
        this.name = data.name
        this.bearded = data.bearded == undefined ? true : data.bearded
        this.rested = true
        this.castCounter = 0
    }

    incantation(spell) {
        return spell.toUpperCase()
    }
    cast() {
        this.castCounter++
        if (this.castCounter >= 3) {
            this.rested = false
            return "I SHALL NOT CAST!"
        } else {
            return "MAGIC BULLET"
        }
    }
}

module.exports = Wizard
