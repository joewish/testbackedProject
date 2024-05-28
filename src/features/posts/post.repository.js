import mongoose from "mongoose";
import { usersPostSchema } from "./post.schema.js";
import { customErrorHandler } from "../../middlewares/errorHandler.js";
const postSchema = mongoose.model("Post",usersPostSchema);

export const addPost = async(userID,data)=>{
    const {imageUrl,content} = data;
    try{
        const newPost = new postSchema({userID:userID,imageUrl:imageUrl,content:content});
        const doc = await newPost.save()
        console.log(doc)
        return doc
    }catch(err){
        throw new Error(err) 
    }
}

export const findOnePost = async (postID)=>{
    try{
        const post = await postSchema.findOne({_id: postID})
        return post
    }catch(err){
        throw new Error(err)
    }
}