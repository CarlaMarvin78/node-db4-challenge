exports.seed = function(knex, Promise) {
    return knex('recipes').truncate()
      .then(function () {
        return knex('recipes').insert([
            {name: "Jelly Sandwich"},
            {name: "Omelet"}
        ]);
    });
};