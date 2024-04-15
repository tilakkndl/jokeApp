const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
        email: {
            type: String,
            require: [true, "There should be email"],
            unique: true,
            lowerCase: true,
            validate: [validator.isEmail, "There should be valid email"]
        },
     
        password: {
            type: String,
            required: [true, "There should be password"],
            minlength: 8,
            select: true
        },
        confirmPassword:{
            type: String,
            validate: {
                validator: function(el){
                    return el === this.password;
                }
            }
        }
    
})

const User = mongoose.model("User", userSchema)

module.exports = User;