const productModel = require('../models/product');
const helpers = require('../helpers/response');
const redis = require('redis')
const client = redis.createClient(6379);

const product = {
    getPeoductById: (req, res) => {
        const id = req.params.id
        productModel.getProductById(id)
            .then((result)=>{
                resultProduct = result;
                helpers.response(res, resultProduct, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    getAllProduct: (req, res)=>{
        const sortdata = req.query.sort || 'idProduct';
        const typeSort = req.query.typesort || 'ASC'
        const search = req.query.search
        const limit = req.query.limit || 9
        const offset = ((req.query.page || 1) - 1) * limit
        productModel.getAllProduct({sortdata, typeSort, search, limit, offset})
            .then((result)=>{
                const resultProduct = result;
                client.setex('getAllProduct', 3600 , JSON.stringify(resultProduct))
                helpers.response(res, resultProduct, 200, null, req.paginations)
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
            imageProduct: `http://localhost:3400/uploads/${req.file.filename}`,
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
            priceProduct,
            idCategory,
            updateAt: new Date()

        }
        if(req.file){
            data.imageProduct =  `http://localhost:3400/uploads/${req.file.filename}`
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