require('dotenv').config()
const bcrypt = require('bcryptjs');
const modelUsers = require('../models/users')
const helpers = require('../helpers/response');
const jwt = require('jsonwebtoken')

const users = {
    register: (req, res)=>{
        const{firstName, lastName, email, password, roleId} = req.body
        const data = {
            firstName,
            lastName,
            email,
            password,
            roleId,
            createdAt: new Date(),
            updatedAt : new Date()
        }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(data.password, salt, function(err, hash) {
                data.password = hash
                modelUsers.register(data)
                .then((result)=>{
                    helpers.response(res, result, 200, null)
                })
                .catch((err)=>{
                    console.log(err)
                })
            });
        });
    },
    login: (req, res)=>{
        const {email, password} = req.body
        modelUsers.getUsers(email)
        .then((result)=>{
            if (result.length < 1) return helpers.response(res, {message: 'Email Not Found!'}, 200, null)
            const user = result[0]
            const hash = user.password
            bcrypt.compare(password, hash).then((resCompare) => {
                if(!resCompare) return helpers.response(res, {message: 'Password Wrong!'}, 200, null)
                const payload = {
                    id: user.id,
                    email: user.email,
                    roleId: user.roleId
                }
                jwt.sign(payload, process.env.SECRET_KEY , {expiresIn: '1h'},(err, token)=>{
                    user.token = token
                    delete user.password
                    delete user.createdAt
                    delete user.updatedAt
                    helpers.response(res, user, 200)
                })
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = users;