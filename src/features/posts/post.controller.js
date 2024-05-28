import { customErrorHandler } from "../../middlewares/errorHandler.js";
import { addPost,findOnePost } from "./post.repository.js";

export const createNewPost = async (req, res,next)=>{
    console.log("createNewPost")
    try{
        console.log(req._id)
        const result = await addPost(req._id,req.body)
        if(result){
            res.status(200).send({result})
        }else{
            res.status(400).send({message:"Unable to add post"})
        }
    }catch (err){
        next(new customErrorHandler(404,err.message))
    }
}

export const getOnePost = async (req,res,next)=>{
    try{
        const result = await findOnePost(req.params.id)
        if(result){
            res.status(200).send(result)
        }
    }catch(err){
        next(new customErrorHandler(404, err.message));
    }
}