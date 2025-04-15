import mongoose, { Schema } from "mongoose";

const quesSchema = new mongoose.Schema({
    title : String,
    questionArray : Array,
    isActive : Boolean
})

export const questions =mongoose.model("questions", quesSchema)