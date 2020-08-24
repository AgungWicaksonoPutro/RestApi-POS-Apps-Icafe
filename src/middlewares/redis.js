const redis = require('redis')
const client = redis.createClient(6379)
const helper = require('../helpers/response')

module.exports = {
    cacheGetAllProduct: (req, res, next) =>{
        client.get('getAllProduct', (err, data)=>{
            // console.log(data)
            if(err) throw err
            if(data !== null){
                helper.response(res, JSON.parse(data), 200)
            }else{
                next()
            }
        })
    },
    clearGetAllProduct: (req, res, next) =>{
        client.del('getAllProduct')
        next()
    }
}