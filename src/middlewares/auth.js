require('dotenv').config()
const jwt = require('jsonwebtoken')
const helpers = require('../helpers/response')
const auth = {
    verifyAccess: (req, res, next)=>{
        let token = req.headers.authorization
        token = token.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY , function(err, decoded){
            if(err) return helpers.response(res, {message: 'Token invalid !'}, 403, null)
            next()
        })
    }
}

module.exports = auth