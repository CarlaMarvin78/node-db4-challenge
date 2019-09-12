exports.seed = function(knex, Promise) {
    return knex('ingredients').truncate()
      .then(function () {
        return knex('ingredients').insert([
            {name: "Slice of bread"},
            {name: "Tbsp of jelly"},
            {name: "Egg"},
            {name: "Slices of bacon"},
            {name: "Cup of cheese"},
        ]);
    });
};