class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }
    stare(person) {
        person.stoned = true
        if (this.statues.length < 3) {
            this.statues.push(person)
        } else {
            this.statues.shift().stoned = false
            this.statues.push(person)
        }
    }
}

module.exports = Medusa
