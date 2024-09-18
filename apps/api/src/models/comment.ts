import mongoose, { Document, Schema } from 'mongoose';

/*interface IComment extends Document {
  author: string,
  content: string,
}*/

export const commentSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, 'Property is required']
    },
    content: {
      type: String,
      required: [true, 'Property is required']
    },
    post_id: {
      type: mongoose.Types.ObjectId, required: true, ref: 'Post'
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model('Comment', commentSchema);


export default Comment;