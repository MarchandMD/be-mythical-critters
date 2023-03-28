class Sphinx {
    constructor(name) {
        this.name = name
        this.riddles = []
        this.heroesEaten = 0
    }

    collectRiddle(riddle) {
        if (this.riddles.length < 3) {
            this.riddles.push(riddle)
        } else if (this.riddles.length >= 3) {
            this.riddles.shift()
            this.riddles.push(riddle)
        }
    }

    attemptAnswer(answer) {
        let answers = []
        for (let i = this.riddles.length - 1; i >= 0; i--) {
            answers.push(this.riddles[i].answer)
            if (this.riddles[i].answer == answer) {
                this.riddles.splice(i, 1)
                if (this.riddles.length == 0) {
                    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
                } else {
                    return "That wasn't that hard, I bet you don't get the next one"
                }
            }
        }
        if (!answers.includes(answer)) {
            this.heroesEaten++
        }
    }
}

module.exports = Sphinx
