exports.seed = function(knex, Promise) {
    return knex('recipe_ingredient').truncate()
      .then(function () {
        return knex('recipe_ingredient').insert([
            {recipe_id: 1, ingredient_id: 1, quantity: 1},
            {recipe_id: 1, ingredient_id: 2, quantity: 4},
            {recipe_id: 2, ingredient_id: 3, quantity: 3},
            {recipe_id: 2, ingredient_id: 4, quantity: 2},
            {recipe_id: 2, ingredient_id: 5, quantity: 0.5},
        ]);
    });
};