class Centaur {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
        this.standing = true
        this.cranky = false
        this.action_counter = 0
        this.layingDown = false
    }

    crank_o_meter(count) {
        if (count >= 3) {
            this.cranky = true
        }
    }
    shoot() {
        this.action_counter++
        this.crank_o_meter(this.action_counter)
        if (this.cranky == true || this.layingDown) {
            return "NO!"
        } else {
            return "Twang!!!"
        }
    }

    run() {
        this.action_counter++
        this.crank_o_meter(this.action_counter)
        if (this.layingDown) {
            return "NO!"
        } else {
            return "Clop clop clop clop!!!"
        }
    }

    sleep() {
        if (this.standing == true) {
            return "NO!"
        } else {
            this.cranky = false
            this.action_counter = 0
            return "ZZZZ"
        }
    }

    layDown() {
        this.standing = false
        this.layingDown = true
    }

    standUp() {
        this.standing = true
        this.layingDown = false
    }

    drinkPotion() {
        if (this.layingDown) {
            return "Not while I'm laying down!"
        } else if (this.cranky == false) {
            this.cranky = true
        }
        else {
            this.cranky = false
        }

    }
}

module.exports = Centaur
