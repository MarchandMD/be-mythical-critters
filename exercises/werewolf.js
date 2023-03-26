class Werewolf {
    constructor(name, location = "Basement lair") {
        this.name = name
        this.location = location
        this.human = true
        this.wolf = false
        this.hungry = false
    }

    change() {
        if (this.human == true) {
            this.human = false
            this.wolf = true
            this.hungry = true
        } else {
            this.human = true
            this.wolf = false
            this.hungry = false
        }
    }

    eat(victim) {
        if (this.hungry == true) {
            victim.alive = false
            this.human = true
            this.hungry = false
            this.wolf = false
            return "YUM!"
        } else {
            return "I cannot eat because I am not hungry."
        }
    }
}

module.exports = Werewolf
