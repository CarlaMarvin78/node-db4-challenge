exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_step', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id').notNullable().references('recipes.id');
        tbl.integer('step_id').notNullable().references('steps.id');
        tbl.integer('step_no').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_step');
};