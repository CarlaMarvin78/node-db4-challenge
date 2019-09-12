const express = require('express');
const server = express();
const recipesRouter = require ('./recipesRouter')
const ingredientsRouter = require ('./ingredientsRouter')

server.use(express.json());
server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

module.exports = server;