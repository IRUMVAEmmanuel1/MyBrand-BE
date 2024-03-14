import { Request, Response } from 'express';
import { CommentService } from '../services/commentService';

export const createComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { postId, content } = req.body;
    const comment = await CommentService.createComment(postId, content);
    res.json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await CommentService.deleteComment(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add other comment controllers as needed
