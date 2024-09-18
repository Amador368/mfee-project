import mongoose, { Document, Schema } from 'mongoose';

interface IPost extends Document {
   
    title: string,
    image: string,
    description: string,
    category: string, //string Id of the category
    comments: string[], //array Array of comment ids
}

export const postSchema = new Schema (
    {
       
        title: {
            type: String,
            required: [true, 'Property is required']
        },
        image: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String
        },
        comments: {
            type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
        }
    }
);

const Post = mongoose.model('Post', postSchema);

export default Post