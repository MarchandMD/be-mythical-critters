class Dragon {
    constructor(name, rider, color) {
        this.name = name
        this.rider = rider
        this.color = color
        this.hungry = true
        this.mealCount = 0
    }

    eat() {
        this.mealCount++
        if (this.mealCount >= 3) {
            this.hungry = false
        }
    }
}

module.exports = Dragon
