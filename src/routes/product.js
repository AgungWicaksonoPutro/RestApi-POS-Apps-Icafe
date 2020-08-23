const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')

router
    .get('/', productController.getAllProduct)
    .get('/:id', )
    .post('/', productController.insertProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

module.exports = router