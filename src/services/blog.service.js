
import { Blog } from "../models/blog.model.js"

export const createBlogService = async(body)=>{

    try {
        const res = await Blog.create(body)
        return res 
    } catch (error) {
        return error 
    }

}


export const getAllBlogsService = async()=>{

    try {   
        const res = await Blog.find({})
        return res
    } catch (error) {
        return error
    }

}

export const updateBlogData = async(id , body )=>{
  
    try {
        
        const res = await Blog.findByIdAndUpdate({ _id : id } ,{ $set :{ title : body.title , description : body.description }} , { new : true})
        return res

    } catch (error) {
        return error
    }

}


export const updateLikes = async(blogId , userId)=>{
 
    try {
        const res = await Blog.findById(blogId)
        if(!res){
            throw new Error (" Blog not found !")
        }
        const isLiked = res.like.includes(userId);
        if(isLiked){
            //unlike
        const filterLikes = res.like.filter(item => item !== userId) // all likes id without userId
        res.like = filterLikes
        await res.save()
        return res

        }else{
            // like
            res.like.push(userId)
            // res.like = [ ...res.like , userId ]
            await res.save()
            return res

        }


    } catch (error) {

        return error
        
    }

}

export const deleteBlogById = async(id)=>{
    try {

        const isExist = await Blog.findById(id)
        if(!isExist){
            throw new Error (" Blog not found !")
        }

        await Blog.findByIdAndDelete(id)
        
    } catch (error) {
        
    }
}