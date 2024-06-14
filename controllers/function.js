
const jwt = require('jsonwebtoken')

const customeApiError = require('../errors/errorclass')
const {unauthenticated} = require('../errors')
const {Badreq} = require('../errors')

const login = async (req,res) =>{

    const {username,password} = req.body
    try {
        if(!username || !password){
            return res.status(400).send({ msg : "Please provide username and password both"})
        }
        const id = new Date().getDate()
        const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'2d'})
        res.status(200).send({msg : "user create" , token})
    } catch (error) {
        console.log(error);
        throw new Error("Error name",500);
    }
}

const dashboard = (req,res)=>{
    console.log(req.user);
    const luckynum = Math.floor(Math.random() * 100)
    res.status(200).json({msg : `hello ${req.user.username}`,secret : `Your lucky no ${luckynum}`})
}

module.exports = {login,dashboard}