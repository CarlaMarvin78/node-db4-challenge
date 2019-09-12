exports.seed = function(knex, Promise) {
    return knex('steps').truncate()
      .then(function () {
        return knex('steps').insert([
            {description: "Spread jelly on bread"},
            {description: "Fold bread in half"},
            {description: "Preheat skillet"},
            {description: "Cook bacon slices until sligthly crisp."},
            {description: "Crumble bacon into small pieces."},
            {description: "Mix eggs with cheese and crumbled bacon"},
            {description: "Put eggs in skillet"},
            {description: "Cook eggs until firm"},
            {description: "Fold eggs in half"},
            {description: "Put eggs on plate"},
            {description: "Turn burner off"},
        ]);
    });
};