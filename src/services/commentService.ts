// services/commentService.ts
import Comment, { IComment } from '../models/comment';

export class CommentService {
  static async getAllComments(): Promise<IComment[]> {
    try {
      const comments = await Comment.find();
      return comments;
    } catch (error) {
      throw new Error('Error fetching comments');
    }
  }

  static async createComment(content: string, blogId: string): Promise<IComment> {
    try {
      const comment = new Comment({ content, blog: blogId });
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error('Error creating comment');
    }
  }
}
