const connection = require('../configs/connection');

const product ={
    getAllProduct: () =>{
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM product', (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}


module.exports = product;