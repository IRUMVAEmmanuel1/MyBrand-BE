// models/Blog.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  timestamp: Date;
  image: string;
}

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IBlog>('Blog', blogSchema);
