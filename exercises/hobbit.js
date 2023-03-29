class Hobbit {
    constructor(name, disposition = 'homebody') {
      this.name = name
      this.disposition = disposition
      this.age = 0
      this.adult = false
      this.old = false
      this.isShort = true
      // if (this.name == 'Frodo') {
      //   this.hasRing = true
      // } else {
      //   this.hasRing = false
      // }
    this.hasRing = this.name === "Frodo"
    }

  celebrateBirthday() {
    this.age++;
    if (this.age > 32 && this.age <= 100) {
      this.adult = true
    } else if (this.age > 100) {
      this.adult = true
      this.old = true
    }
  }
}


module.exports = Hobbit
