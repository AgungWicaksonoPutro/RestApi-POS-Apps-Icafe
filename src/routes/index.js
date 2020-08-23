const express = require('express');
const route = express.Router()
const routerProducts = require('./product')
const routerCategory = require('./category')
const routerHistory = require('./history')
const routerUsers = require('./employes')

route
    .use('/product', routerProducts)
    .use('/category', routerCategory)
    .use('/history', routerHistory)
    .use('/employes', routerUsers)


module.exports = route