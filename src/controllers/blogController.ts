// controllers/blogController.ts
import { Request, Response } from 'express';
import { BlogService } from '../services/blogService';

export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.send(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, image } = req.body;
    const blog = await BlogService.createBlog(title, content, image);
    res.send(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;
    const blog = await BlogService.updateBlog(id, title, content, image);
    res.send(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await BlogService.deleteBlog(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).send('Internal Server Error');
  }
};
