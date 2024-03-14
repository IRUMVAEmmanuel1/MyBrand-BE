// models/comment.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  content: string;
  createdAt: Date;
  blog: Schema.Types.ObjectId;
}

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'Blog',
    required: true,
  },
});

export default mongoose.model<IComment>('Comment', commentSchema);
