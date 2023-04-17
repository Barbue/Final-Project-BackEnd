//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

//create a userSchema 
const userSchema = new mongoose.Schema({
    email: String,
    password: String, 
    id: {type: String, default: uuidv4},
}); 


//register model to collection
const User = mongoose.model("users", userSchema);

//make our model accessible to outside files 
module.exports = User;