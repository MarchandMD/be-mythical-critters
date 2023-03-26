// This is similar to writing a class in Ruby
class Medusa {
  // instead of a def initialize, this constructor does the same stuff
    constructor(name) {
      // instead of using an attr_accessor, or the like, can set the attributes here; default values apply in a similar fashion
        this.name = name
        this.statues = []
    }

  // this is how a function is created for an instance of the class (object?)
    stare(person) {
      // this allowed me to update the value of the #stoned attribute for the Person object
        person.stoned = true
        // some basic branching logic; be sure to include the parenthesis
        if (this.statues.length < 3) {
          // this is how things are added to the array; push works
            this.statues.push(person)
            // be mindful of the curly braces
        } else {
            this.statues.shift().stoned = false
            this.statues.push(person)
        }
    }
// could re-factor to DRY code
}

module.exports = Medusa
