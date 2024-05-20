
const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect("mongodb+srv://phanitteja:phaniteja@cluster0.rytf0w4.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0");






const userSchema = new mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String
})
const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
   
    balance:{
        type:Number,
        required:true
    }
})
const User = mongoose.model("User",userSchema)
const Account = mongoose.model("Account",accountSchema)

module.exports = {
    User,Account
}