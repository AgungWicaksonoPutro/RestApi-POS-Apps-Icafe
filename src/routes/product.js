const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')
const {verifyAccess, roleAccsess} = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
    .get('/', verifyAccess, roleAccsess, redis.cacheGetAllProduct, productController.getAllProduct)
    .get('/:id', )
    .post('/',verifyAccess, roleAccsess, redis.clearGetAllProduct, multer.upload.single('imageProduct'), productController.insertProduct)
    .patch('/:id',verifyAccess, roleAccsess, productController.updateProduct)
    .delete('/:id',verifyAccess, roleAccsess, productController.deleteProduct)

module.exports = router