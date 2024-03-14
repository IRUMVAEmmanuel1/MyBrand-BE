import express, { Request, Response } from 'express';
import { CommentService } from '../services/commentService';

const router = express.Router();

// Get all comments
router.get('/', async (req: Request, res: Response) => {
  try {
    const comments = await CommentService.getAllComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
});

// Create comment
router.post('/', async (req: Request, res: Response) => {
  try {
    const { content, blogId } = req.body;
    const comment = await CommentService.createComment(content, blogId);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating comment' });
  }
});

// Update comment
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const updatedComment = await CommentService.updateComment(id, content);
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating comment' });
  }
});

// Delete comment
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CommentService.deleteComment(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting comment' });
  }
});

export default router;
