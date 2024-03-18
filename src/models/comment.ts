import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  content: string;
  blog: string; // Assuming the reference to the blog's ID
  createdAt: Date;
}

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'Blog', // Assuming the name of the Blog model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IComment>('Comment', commentSchema);
