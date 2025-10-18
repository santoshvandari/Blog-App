import mongoose from "mongoose";


const postSchema = mongoose.Schema(
    {
        title: String,
        content: String 

    }
)

const post = mongoose.model.post || mongoose.model(post,postSchema)


export default post;






