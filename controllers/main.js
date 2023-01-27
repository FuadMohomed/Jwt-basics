
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')



const login = async (req,res) => {
const {username,password} = req.body

if (!username || !password) {
 throw new CustomAPIError('please provide email and passowrd',400)   
}

const id = new Date().getDate()
const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30'})

res.status(200).json({msg:"user created",token})

}



const dashboard = async (req,res) => {

console.log(req.user)
  const luckyNumber = Math.floor(Math.random()*100)
res.status(200).json({msg:`Hello ${decode.username}`,secret:` Authorized data , your lucky number
 ${luckyNumber} `})


}

module.exports = {login,dashboard}