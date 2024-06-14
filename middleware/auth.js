
const jwt = require('jsonwebtoken')

const customApiError = require('../errors/errorclass')
const {unauthenticated} = require('../errors')
const {Badreq} = require('../errors')
require("dotenv").config();

const authmiddleware = async (req, res, next) => {
   const authheader = req.headers.authorization;

   if(!authheader || !authheader.startsWith('Bearer ')){
       throw new unauthenticated("No token Provided")
   }

   const token = authheader.split(' ')[1]
console.log(token);
   try {
      const decoded = jwt.verify(token,process.env.JWT_SECRET)
      req.user = decoded;
      next();
   } catch (error) {
    //    console.log(error);
       throw new unauthenticated("Not Authorized to access this route")
   }
};

module.exports = authmiddleware;