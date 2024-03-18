import Comment, { IComment } from '../models/Comment';

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

  static async deleteComment(id: string): Promise<void> {
    try {
      const comment = await Comment.findByIdAndDelete(id);
      if (!comment) {
        throw new Error('Comment not found');
      }
    } catch (error) {
      throw new Error('Error deleting comment');
    }
  }
}
