// routes/blogRoutes.ts
import express from 'express';
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from '../controllers/blogController';

const router = express.Router();

router.get('/blogs', getAllBlogs);
router.post('/blogs', createBlog);
router.patch('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

export default router;
