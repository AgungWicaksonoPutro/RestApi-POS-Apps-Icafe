const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')
const auth = require('../middlewares/auth')

router
    .get('/', productController.getAllProduct)
    .get('/:id', )
    .post('/',auth.verifyAccess, productController.insertProduct)
    .patch('/:id',auth.verifyAccess, productController.updateProduct)
    .delete('/:id',auth.verifyAccess, productController.deleteProduct)

module.exports = router