const express = require("express");
const routes = express.Router();

const stock = require('./controllers/stock')

routes.use(express.json())

routes
    .get('/stock', stock.get)
    .post('/stock', stock.post)
    .delete('/stock/:id', stock.delete)
    .put('/stock/:id', stock.put)

module.exports = routes;