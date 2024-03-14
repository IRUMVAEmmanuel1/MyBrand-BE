// controllers/commentController.ts
import { Request, Response } from 'express';
import { CommentService } from '../services/commentService';

export const getAllComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const comments = await CommentService.getAllComments();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Error fetching comments' });
  }
};

export const createComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { content, blogId } = req.body;
    const comment = await CommentService.createComment(content, blogId);
    res.json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Error creating comment' });
  }
};
