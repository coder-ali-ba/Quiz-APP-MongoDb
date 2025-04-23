import mongoose, { Schema } from "mongoose";

const quesSchema = new mongoose.Schema({
    title : String,
    questionArray : Array,
    isActive : Boolean
})

const userSchema = new mongoose.Schema ({
    fullName :{ 
        type : String,
        required : true
    },
    phNo : {
        type : Number ,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ["male" , "female"]
    },
    password : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        required : true,
    }

})

const currUserSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    }
})


export const logIn =mongoose.model("currUser", currUserSchema)
export const signUp = mongoose.model("Users" , userSchema)
export const questions =mongoose.model("questions", quesSchema)