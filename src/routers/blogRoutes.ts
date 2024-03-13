// src/routes/blogRoutes.ts
import express, { Request, Response } from 'express';
import { BlogService } from '../services/blogService';

const router = express.Router();

// Get all blogs
router.get('/blogs', async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.send(blogs);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching blogs' });
  }
});

// Create blog
router.post('/blogs', async (req: Request, res: Response) => {
  const { title, content, image } = req.body;
  try {
    const blog = await BlogService.createBlog(title, content, image);
    res.send(blog);
  } catch (error) {
    res.status(500).send({ error: 'Error creating blog' });
  }
});

// Get individual blog
router.get('/blogs/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const blog = await BlogService.getBlogById(id);
    if (!blog) {
      res.status(404).send({ error: 'Blog not found' });
      return;
    }
    res.send(blog);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching blog' });
  }
});

// Update blog
router.patch('/blogs/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, content, image } = req.body;
  try {
    const updatedBlog = await BlogService.updateBlog(id, title, content, image);
    if (!updatedBlog) {
      res.status(404).send({ error: 'Blog not found' });
      return;
    }
    res.send(updatedBlog);
  } catch (error) {
    res.status(500).send({ error: 'Error updating blog' });
  }
});

// Delete blog
router.delete('/blogs/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await BlogService.deleteBlog(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: 'Error deleting blog' });
  }
});

export default router;
