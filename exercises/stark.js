class Stark {
    constructor(name, location = "Winterfell") {
        this.name = name
        this.location = location
        this.safe = false
    }

    houseWords() {
        if (this.safe == false) {
            return "Winter is Coming"
        } else {
            return "The North Remembers"
        }
    }
}

module.exports = Stark