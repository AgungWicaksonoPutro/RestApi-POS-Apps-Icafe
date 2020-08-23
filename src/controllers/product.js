const productModel = require('../models/product');
const helpers = require('../helpers/response');
const response = require('../helpers/response');

const product = {
    getAllProduct: (req, res)=>{
        productModel.getAllProduct()
            .then((result)=>{
                const resultProduct = result;
                helpers.response(res, resultProduct, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    insertProduct: (req, res)=>{
        const {nameProduct, stockProduct, descriptionProduct, imageProduct, priceProduct, idCategory} = req.body
        const data = {
            nameProduct,
            stockProduct,
            descriptionProduct,
            imageProduct,
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