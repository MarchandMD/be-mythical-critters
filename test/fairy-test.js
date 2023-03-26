var expect = require("chai").expect
var Fairy = require("../exercises/fairy")

describe("Fairy", function () {
    it("should be a function", function () {
        expect(Fairy).to.be.a("function")
    })

    it("should instantiate a fairy", function () {
        var fairy = new Fairy()

        // assert.isObject(fairy);
        expect(fairy).to.be.an.instanceOf(Fairy)
    })

    it("should have a name", function () {
        var fairy = new Fairy("Holly")

        expect(fairy.name).to.eq("Holly")
    })

    it("should have some fairy dust by default", function () {
        var fairy = new Fairy("Mab")

        expect(fairy.dust).to.eq(10)
    })

    it("should get a small amount of fairy dust when others believe in her", function () {
        var fairy = new Fairy("Sookie")
        var dustBefore = fairy.dust

        fairy.receiveBelief()

        var dustAfter = fairy.dust
        var difference = dustAfter - dustBefore
        expect(difference).to.eq(1)
    })

    it("should get a lot of fairy dust from believing in herself", function () {
        var fairy = new Fairy("Tinkerbell")
        var dustBefore = fairy.dust

        fairy.believe()

        var dustAfter = fairy.dust
        var difference = dustAfter - dustBefore
        expect(difference).to.eq(10)
    })

    it("should start with an Iris flower dress", function () {
        var fairy = new Fairy("Rose")

        expect(fairy.clothes).to.deep.equal({ dresses: ["Iris"] })
    })

    it("should turn flowers into more dresses", function () {
        var fairy = new Fairy("Honeysuckle")

        fairy.makeDresses(["Daffodil", "Tulip", "Poppy"])

        expect(fairy.clothes.dresses).to.deep.equal([
            "Iris",
            "Daffodil",
            "Tulip",
            "Poppy",
        ])
    })

    it("should turn more flowers into even more dresses", function () {
        var fairy = new Fairy("Cosmo Pepperfeet")

        fairy.makeDresses(["Ranunculus", "Daisy"])
        fairy.makeDresses(["Hydrangea", "Forget-me-not"])

        expect(fairy.clothes.dresses).to.deep.equal([
            "Iris",
            "Ranunculus",
            "Daisy",
            "Hydrangea",
            "Forget-me-not",
        ])
    })

    it("should start out good natured", function () {
        var fairy = new Fairy("Cologne")

        expect(fairy.disposition).to.eq("Good natured")
    })

    it("should become real scary when provoked", function () {
        var fairy = new Fairy("Aine")

        fairy.provoke()

        expect(fairy.disposition).to.eq("Vengeful")
    })

    it("should steal infants and return near identical changelings when feeling vengeful", function () {
        var fairy = new Fairy("Claudine")
        var firstInfant = { name: "Sue", eyes: "Blue", disposition: "Sweet" }
        var secondInfant = {
            name: "Henry",
            eyes: "Brown",
            disposition: "Charming",
        }

        fairy.provoke()
        fairy.replaceInfant(firstInfant)
        fairy.replaceInfant(secondInfant)

        expect(firstInfant).to.deep.equal({
            name: "Sue",
            eyes: "Blue",
            disposition: "Malicious",
        })
        expect(secondInfant).to.deep.equal({
            name: "Henry",
            eyes: "Brown",
            disposition: "Malicious",
        })
    })

    it("should only steal infants when feeling vengeful", function () {
        var fairy = new Fairy("Marceline")
        var firstInfant = { name: "Josiah", eyes: "Green", disposition: "Calm" }

        var newFirstInfant = fairy.replaceInfant(firstInfant)

        expect(firstInfant).to.eq(newFirstInfant)
    })

    it("should raise stolen infants as its own", function () {
        var fairy = new Fairy("Winnie")
        var firstInfant = { name: "Mary", eyes: "Green", disposition: "Calm" }
        var secondInfant = {
            name: "Clarke",
            eyes: "Brown",
            disposition: "Gentle",
        }

        fairy.provoke()
        fairy.replaceInfant(firstInfant)
        fairy.replaceInfant(secondInfant)

        expect(fairy.humanWards).to.deep.equal([firstInfant, secondInfant])
    })

    it("should calm down after stealing three infants", function () {
        var fairy = new Fairy("Basil")
        var firstInfant = { name: "Josiah", eyes: "Green", disposition: "Calm" }
        var secondInfant = {
            name: "Clarence",
            eyes: "Brown",
            disposition: "Delightful",
        }
        var thirdInfant = {
            name: "Louise",
            eyes: "Brown",
            disposition: "Agreeable",
        }

        fairy.provoke()

        fairy.replaceInfant(firstInfant)
        fairy.replaceInfant(secondInfant)
        fairy.replaceInfant(thirdInfant)

        expect(fairy.disposition).to.eq('Good natured')
    })
})
