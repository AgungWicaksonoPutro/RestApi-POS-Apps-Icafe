require('dotenv').config()
const jwt = require('jsonwebtoken')
const helpers = require('../helpers/response')
const auth = {
    verifyAccess: (req, res, next)=>{
        let token = req.headers.authorization
        token = token.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY , function(err, decoded){
            if (err) {
                if (err.name === 'JsonWebTokenError') {
                  return helpers.response(res, {message: 'Token invalid !'}, 403, null)
                } else if (err.name === 'TokenExpiredError') {
                  return helpers.response(res, {message: 'Token Expired !'}, 403, null)
                } else {
                  return helpers.response(res, null, 403, err)
                }
              }
            req.roleId = decoded.roleId
            next()
        })
    },
    roleAccsess : (req, res, next) => {
        if (req.roleId === 1) return next()
        return helpers.response(res, {message: 'Accsess Denied'}, 403, null)
      }
}

module.exports = auth