const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')

router
    .get('/', productController.getAllProduct)
    .get('/:id', )
    .post('/', )
    .patch('/:id', )
    .delete('/:id', )

module.exports = router