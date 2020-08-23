const productModel = require('../models/product');
const helpers = require('../helpers/response')

const product = {
    getAllProduct: (req, res)=>{
        productModel.getAllProduct()
            .then((result)=>{
                const resultIcafe = result;
                helpers.response(res, resultIcafe, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

module.exports = product;