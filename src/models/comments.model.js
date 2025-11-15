import { model, Schema } from "mongoose";


const commentsSchema = new Schema({
    comments : {
        type : String,
        require : true 


    },

    blogId : {
        type : Schema.Types.ObjectId,
        ref : "blog",
        require: true
    },

      createdBy: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true, versionKey: false })

export const Comment = model("comment", commentsSchema);