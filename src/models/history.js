const connection = require('../configs/connection');

const history ={
    getAllHistory: () =>{
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM history', (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertHistory: (data) =>{
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