class Fairy {
    constructor(name, dust = 10, clothes = { dresses: ["Iris"] }, disposition = 'Good natured') {
        this.name = name
        this.dust = dust
        this.clothes = clothes
        this.disposition = disposition
        this.humanWards = []
    }

    receiveBelief() {
        this.dust++
    }

    believe() {
        this.dust += 10
    }

  makeDresses(arr) {
    arr.forEach(flower => {
      this.clothes.dresses.push(flower)
    })
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition == 'Vengeful') {
      this.humanWards.push(infant)
      if (this.humanWards.length >= 3) {
        this.disposition = 'Good natured'
      }
      return infant.disposition = 'Malicious';
    } else {
      return infant;
    }
  }
}

module.exports = Fairy