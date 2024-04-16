const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")

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

userSchema.pre('save', async function(next) {
    //only run this function if password was actually modified
    if (!this.isModified('password')) return next();
    //Hash the password with cost of 12
    this.password = await bcryptjs.hash(this.password, 12);
  
    //Delete passwordConfirm field
    this.confirmPassword = undefined;
    next();
  });

  userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcryptjs.compare(candidatePassword, userPassword);
  };

const User = mongoose.model("User", userSchema)

module.exports = User;