const connection = require('../configs/connection');

const users ={
    register: (data) =>{
        return new Promise((resolve, reject)=>{
            connection.query('INSERT INTO users SET ?', data, (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getUsers: (email) =>{
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM users WHERE email = ?', email, (err, result)=>{
                if(!err){
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}


module.exports = users;