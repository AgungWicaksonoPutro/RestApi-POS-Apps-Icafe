const express = require('express');
const route = express.Router()
const routerProducts = require('./product')
const routerCategory = require('./category')
const routerHistory = require('./history')
const routerUsers = require('./users')
const routerEmployes = require('./employes')

route
    .use('/product', routerProducts)
    .use('/category', routerCategory)
    .use('/history', routerHistory)
    .use('/employes', routerEmployes)
    .use('/users', routerUsers)


module.exports = route