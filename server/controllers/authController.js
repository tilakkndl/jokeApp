const User = require("../models/userModel")
const catchAsync = require("../utils/catchAsync")
const AppError = require("./../utils/AppError")

exports.signup = catchAsync(async(req, res, next)=>{
const {name, email, password, confirmPassword} = req.body;
console.log(name, email, password, confirmPassword)
 return res.status(200).json({name: name})
})