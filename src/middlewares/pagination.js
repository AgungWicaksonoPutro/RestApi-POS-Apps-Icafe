const productModels = require('../models/product')
module.exports = {
    products:async(req, res, next)=>{
        parseInt
        const page = parseInt(req.query.page) || 1 ;
        const limit = req.query.limit || 9;
        const search = req.query.search;
        const resultData = await productModels.countProduct();
        const totalData = resultData[0].totalProduct;
        console.log(resultData)
        const totalPage = Math.ceil(totalData/limit);
        const paginations = {
            totalData,
            totalPage,
            currentPage: page,
            perPage: limit,
            prevPage: page > 1 ?`http://localhost:${process.env.PORT}/api/v1/icafe/product?page=${page-1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
            nextPage: page < totalPage ?`http://localhost:${process.env.PORT}/api/v1/icafe/product?page=${page+1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
        }
        req.paginations = paginations
        next();
    }
}