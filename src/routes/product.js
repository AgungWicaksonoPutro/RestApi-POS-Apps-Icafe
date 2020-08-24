const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
    .get('/',auth.verifyAccess, redis.cacheGetAllProduct, productController.getAllProduct)
    .get('/:id', )
    .post('/',auth.verifyAccess, redis.clearGetAllProduct, multer.upload.single('imageProduct'), productController.insertProduct)
    .patch('/:id',auth.verifyAccess, productController.updateProduct)
    .delete('/:id',auth.verifyAccess, productController.deleteProduct)

module.exports = router