const productModels = require('../models/product')
const historyModels = require('../models/history')
module.exports = {
    products:async(req, res, next)=>{
        parseInt
        const page = parseInt(req.query.page) || 1 ;
        const limit = req.query.limit || 9;
        const search = req.query.search;
        const resultData = await productModels.countProduct();
        const totalData = resultData[0].totalProduct;
        const totalPage = Math.ceil(totalData/limit);
        const paginations = {
            totalData,
            totalPage,
            currentPage: page,
            perPage: limit,
            prevPage: page > 1 ?`${page-1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
            nextPage: page < totalPage ?`${page+1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
        }
        req.paginations = paginations
        next();
    },
    historys:async(req, res, next)=>{
        parseInt
        const page = parseInt(req.query.page) || 1 ;
        const limit = req.query.limit || 9;
        const search = req.query.search;
        const resultData = await historyModels.countProduct();
        const totalData = resultData[0].totalProduct;
        const totalPage = Math.ceil(totalData/limit);
        const paginations = {
            totalData,
            totalPage,
            currentPage: page,
            perPage: limit,
            prevPage: page > 1 ?`${page-1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
            nextPage: page < totalPage ?`${page+1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
        }
        req.paginations = paginations
        next();
    }
}