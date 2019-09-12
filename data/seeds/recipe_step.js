exports.seed = function(knex, Promise) {
    return knex('recipe_step').truncate()
      .then(function () {
        return knex('recipe_step').insert([
            {recipe_id: 1, step_id: 1, step_no: 1},
            {recipe_id: 1, step_id: 2, step_no: 2},
            {recipe_id: 2, step_id: 3, step_no: 1},
            {recipe_id: 2, step_id: 4, step_no: 2},
            {recipe_id: 2, step_id: 5, step_no: 3},
            {recipe_id: 2, step_id: 6, step_no: 4},
            {recipe_id: 2, step_id: 7, step_no: 5},
            {recipe_id: 2, step_id: 8, step_no: 6},
            {recipe_id: 2, step_id: 9, step_no: 7},
            {recipe_id: 2, step_id: 10, step_no: 8},
            {recipe_id: 2, step_id: 11, step_no: 9},
            
        ]);
    });
};