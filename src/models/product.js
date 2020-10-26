const connection = require('../configs/connection');
const {actionQuery} = require('../helpers/response');

const product ={
    getProductById: (id)=>{
        return actionQuery('SELECT * FROOM product WHERE idProduct = ?', id)
    },
    searchProduct: (search) => {
        return actionQuery('SELECT * FROM product WHERE title LIKE ?', `%${search}%`)
    },
    getAllProduct: ({...arg}) =>{
        return actionQuery(`SELECT product.* , category.categoryName FROM product INNER JOIN category ON product.idCategory=category.idCategory ${arg.search? 'WHERE nameProduct LIKE ?':''} ORDER BY ?? ${arg.typeSort} LIMIT ${arg.limit} OFFSET ${arg.offset}`, arg.search ? [`%${arg.search}%`, arg.sortdata]:arg.sortdata)
    },
    countProduct:() => {
        return actionQuery(`SELECT count(*) AS totalProduct FROM product`)
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