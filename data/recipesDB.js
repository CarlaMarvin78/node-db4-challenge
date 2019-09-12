const db = require('./dbConfig');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('ingredients').join('recipe_ingredient',{'ingredients.id': 'recipe_ingredient.ingredient_id'})
    .where('recipe_id', recipe_id)
    .select('quantity', 'name');
}

function getInstructions(recipe_id) {
    return db('steps').join('recipe_step', {'steps.id': 'recipe_step.step_id'})
    .where('recipe_id', recipe_id)
    .orderBy('step_no')
    .select('description');

}

function getRecipesByIngredient(ingredient_id) {
    return db('recipes').join('recipe_ingredient', {'recipes.id': 'recipe_ingredient.recipe_id'})
    .where('ingredient_id', ingredient_id)
    .select('recipes.name');
}

module.exports = {getRecipes, getShoppingList, getInstructions, getRecipesByIngredient};