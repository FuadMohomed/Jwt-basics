const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const authenticationMiddleware = (req,res,next) => {
const authHeader = req.headers.authorization

if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('no token provided', 401)
}

const token = authHeader.split(' ')[1]

try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decode)


} catch (error) {
    throw new CustomAPIError('Not Authorized to access this route',401)  
}

next()
}

module.exports = authenticationMiddleware