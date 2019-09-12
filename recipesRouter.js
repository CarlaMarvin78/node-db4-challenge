const express = require ('express')
const router = express.Router()
const db = require('./data/recipesDB')

router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
        console.log('get recipes',err);
        res.status(500).json({error: "The recipes could not be retrieved."});
    })
});

router.get('/:id/shoppingList', (req, res) => {
    db.getShoppingList(req.params.id)
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => {
        console.log('get shopping list', err);
        res.status(500).json({error: "The ingredients could not be retrieved."});
    })
});


router.get('/:id/instructions', (req, res) => {
    db.getInstructions(req.params.id)
    .then(instructions => res.status(200).json(instructions))
    .catch(err => {
        console.log('get instructions', err);
        res.status(500).json({error: "The instructions could not be retrieved."});
    })
});


module.exports = router;
