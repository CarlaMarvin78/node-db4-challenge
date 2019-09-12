const db = require('./data/recipesDB');
const express = require ('express')
const router = express.Router()

router.get('/:id/recipes', (req, res) => {
    db.getRecipesByIngredient(req.params.id)
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
        console.log('recipes by ingredient', err);
        res.status(500).json({error: "The recipes could not be retrieved."});
    })
});

module.exports = router