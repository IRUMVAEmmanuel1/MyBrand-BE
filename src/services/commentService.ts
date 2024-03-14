import Comment, { IComment } from '../models/comment';

export class CommentService {
  static async getAllComments(postId: string): Promise<IComment[]> {
    try {
      const comments = await Comment.find({ postId });
      return comments;
    } catch (error) {
      throw new Error('Error fetching comments');
    }
  }

  static async createComment(postId: string, content: string): Promise<IComment> {
    try {
      const comment = new Comment({ postId, content });
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error('Error creating comment');
    }
  }

  static async deleteComment(commentId: string): Promise<void> {
    try {
      const comment = await Comment.findByIdAndDelete(commentId);
      if (!comment) {
        throw new Error('Comment not found');
      }
    } catch (error) {
      throw new Error('Error deleting comment');
    }
  }
}
