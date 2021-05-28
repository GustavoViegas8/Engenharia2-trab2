const express = require("express");
const routes = express.Router();

const stock = require('./controllers/stock')

routes
    .get('/stock', stock.get)


module.exports = routes;