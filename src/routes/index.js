const express = require('express');
const app = express();
const route = express.Router()
const routerProduct = require('./product')

route
    .use('/product', routerProduct)


module.exports = route