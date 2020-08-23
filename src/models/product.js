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
    },
    insertProduct: (data) =>{
        return new Promise((resolve, reject)=>{
            connection.query('INSERT INTO product SET ?', data, (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteProduct: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM product WHERE idProduct = ?', id, (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateProduct: (id, data)=>{
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE product SET ? WHERE idProduct = ?', [data, id], (err, result)=>{
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