const productModel = require('../models/product');
const helpers = require('../helpers/response');
const redis = require('redis')
const client = redis.createClient(6379);

const product = {
    getAllProduct: (req, res)=>{
        productModel.getAllProduct()
            .then((result)=>{
                const resultProduct = result;
                client.setex('getAllProduct', 3600 , JSON.stringify(resultProduct))
                helpers.response(res, resultProduct, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    insertProduct: (req, res)=>{
        console.log(req.file)
        const {nameProduct, stockProduct, descriptionProduct, priceProduct, idCategory} = req.body
        const data = {
            nameProduct,
            stockProduct,
            descriptionProduct,
            imageProduct: `http://localhost:3000/uploads/${req.file.filename}`,
            priceProduct,
            idCategory,
            createAt: new Date(),
            updateAt: new Date()
        }
        productModel.insertProduct(data)
            .then((result)=>{
                const resultProduct = result
                helpers.response(res, resultProduct, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    deleteProduct: (req, res)=>{
        const id = req.params.id
        console.log(id)
        productModel.deleteProduct(id)
            .then((result)=>{
                const resultProduct = result
                helpers.response(res, resultProduct, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    updateProduct: (req, res)=>{
        const id = req.params.id
        const {nameProduct, stockProduct, descriptionProduct, imageProduct, priceProduct, idCategory} = req.body
        const data = {
            nameProduct,
            stockProduct,
            descriptionProduct,
            imageProduct,
            priceProduct,
            idCategory,
            updateAt: new Date()
        }
        productModel.updateProduct(id, data)
        .then((result)=>{
            const resultProduct = result
            helpers.response(res, resultProduct, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = product;