var expect = require("chai").expect
var Ogre = require("../exercises/ogre")
var Human = require("../exercises/human")

describe("Ogre", function () {
    it("should be a function", function () {
        expect(Ogre).to.be.a("function")
    })

    it("should instantiate our good friend, Ogre", function () {
        var ogre = new Ogre()
        expect(ogre).to.be.an.instanceof(Ogre)
    })

    it("should have a name", function () {
        var ogre = new Ogre("Brak")
        expect(ogre.name).to.eq("Brak")
    })

    it("should live in a Swamp by default", function () {
        var ogre = new Ogre("Brak")
        expect(ogre.home).to.eq("Swamp")
    })

    it("does not have to live in a swamp", function () {
        var ogre = new Ogre("Brak", "The Ritz")
        expect(ogre.home).to.eq("The Ritz")
    })

    it("it can meet humans", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        expect(human.name).to.eq("Jane")

        ogre.encounter(human)
        expect(human.encounterCounter).to.eq(1)
    })

    it("humans should only notice an ogre every third encounter", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        ogre.encounter(human)
        ogre.encounter(human)
        expect(human.noticesOgre()).to.eq(false)

        ogre.encounter(human)
        expect(human.noticesOgre()).to.eq(true)
    })

    it("human notices ogre on the sixth encounter", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        expect(human.noticesOgre()).to.eq(false)

        ogre.encounter(human)
        ogre.encounter(human)
        ogre.encounter(human)
        expect(human.noticesOgre()).to.eq(true)

        ogre.encounter(human)
        ogre.encounter(human)
        expect(human.noticesOgre()).to.eq(false)

        ogre.encounter(human)
        expect(human.noticesOgre()).to.eq(true)
    })

    it("can swing a club", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        ogre.swingAt(human)

        expect(ogre.swings).to.eq(1)
    })

    it("ogre swings the club when a human notices it", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        ogre.encounter(human)
        expect(ogre.swings).to.eq(0)

        ogre.encounter(human)
        ogre.encounter(human)

        expect(human.noticesOgre()).to.eq(true)
        expect(ogre.swings).to.eq(1)
    })

    it("ogre hits human every second time it swings", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        ogre.encounter(human)
        ogre.encounter(human)
        ogre.encounter(human)
        ogre.encounter(human)
        ogre.encounter(human)
        ogre.encounter(human)

        expect(human.encounterCounter).to.eq(6)
        expect(ogre.swings).to.eq(2)
        expect(human.knockedOut).to.eq(true)
    })

    it("human wakes up when ogre apologizes", function () {
        var ogre = new Ogre("Brak")
        var human = new Human("Jane")

        ogre.apologize(human)
        expect(human.knockedOut).to.eq(false)
    })
})
