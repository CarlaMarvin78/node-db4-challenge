exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredient', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id').notNullable().references('recipes.id');
        tbl.integer('ingredient_id').notNullable().references('ingredients.id');
        tbl.float('quantity').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredient');
};