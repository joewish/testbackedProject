import mongoose from "mongoose";

export const usersPostSchema = mongoose.Schema({
    userID:{type:mongoose.Types.ObjectId,ref:"User",required:true},
    imageUrl:{type:"String"},
    content:{type:"String",required:true}
})