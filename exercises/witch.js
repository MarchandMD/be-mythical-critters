class Witch {
    constructor(name) {
        this.name = name
        this.pantry = {}
        this.recipes = []
        this.potions = {}
        this.missingIngredients = {}
    }

    collect(item, count) {
        if (this.pantry[item] == undefined) {
            this.pantry[item] = count
        } else {
            this.pantry[item] += count
        }
    }

    learnRecipe(recipe) {
        if (this.recipes.includes(recipe)) {
            return `Already know: ${recipe.name}`
        } else {
            this.recipes.push(recipe)
            return `Learned: ${recipe.name}`
        }
    }

    attemptToMake(recipe) {
        for (const [key, value] of Object.entries(recipe.ingredients)) {
            if (this.pantry[key] < value && this.pantry[key] !== undefined) {
                this.missingIngredients[key] = value - this.pantry[key]
            } else if (this.pantry[key] === undefined) {
                this.missingIngredients[key] = value
            } else {
                this.pantry[key] = this.pantry[key] - recipe.ingredients[key]
            }
        }
    }

    brewPotion(recipe) {
        let recipeNames = this.recipes.flatMap((recipe) => recipe.name)
        let formattedMissing = []

        if (!recipeNames.includes(recipe.name))
            return `Don't know recipe: ${recipe.name}`

        this.attemptToMake(recipe)

        if (Object.values(this.missingIngredients).length != 0) {
            for (const [key, value] of Object.entries(
                this.missingIngredients
            )) {
                formattedMissing.push(`(${value} ${key})`)
            }
            return `Not enough ingredients. Need: ${formattedMissing.join(" ")}`
        } else {
            if (this.potions[`${recipe.name}`] === undefined) {
                this.potions[`${recipe.name}`] = 1
                return `Brewed 1 ${recipe.name}`
            } else {
                this.potions[`${recipe.name}`]++
                return `Brewed 1 ${recipe.name}`
            }
        }
    }
}

module.exports = Witch
