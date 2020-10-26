const connection = require('../configs/connection');
const { actionQuery } = require('../helpers/response');

const history ={
    getAllHistory: ({ ...arg }) => {
        return actionQuery(`SELECT * FROM history ${arg.search ? 'WHERE orders LIKE ?' : ''} ORDER BY ?? ${arg.typeSort} LIMIT ${arg.limit} OFFSET ${arg.offset}`, arg.search ? [`%${arg.search}%`, arg.sortdata] : arg.sortdata)
    },
    searchProduct: (search) => {
        return actionQuery('SELECT * FROM history WHERE orders LIKE ?', `%${search}%`)
    },
    countProduct: () => {
        return actionQuery(`SELECT count(*) AS totalProduct FROM history`)
    },
    insertHistory: (data) =>{
        console.log(data)
        return new Promise((resolve, reject)=>{
            connection.query('INSERT INTO history SET ?', data, (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteHistory: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM history WHERE idHistory = ?', id, (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateHistory: (id, data)=>{
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE history SET ? WHERE idHistory = ?', [data, id], (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}


module.exports = history;