import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  postId: string;
  content: string;
}

const commentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Blog', // Assuming the blog model is named 'Blog'
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IComment>('Comment', commentSchema);
