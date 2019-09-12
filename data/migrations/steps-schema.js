exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments('id');
        tbl.string('description').unique().notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};