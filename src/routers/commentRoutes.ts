import express, { Request, Response } from 'express';
import { createComment, deleteComment } from '../controllers/commentController';

const router = express.Router();

router.post('/comments', createComment);
router.delete('/comments/:id', deleteComment);

export default router;
