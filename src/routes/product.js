const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')
const pagination = require('../middlewares/pagination')
const {verifyAccess, roleAccsess} = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
    .get('/', verifyAccess, pagination.products, productController.getAllProduct)
    .get('/:id', productController.getPeoductById)
    .post('/',verifyAccess, roleAccsess, multer.upload.single('imageProduct'), productController.insertProduct)
    .patch('/:id',verifyAccess, roleAccsess, productController.updateProduct)
    .delete('/:id',verifyAccess, roleAccsess, productController.deleteProduct)

module.exports = router