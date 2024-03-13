// services/blogService.ts
import Blog, { IBlog } from '../models/Blog';

export class BlogService {
  static async getAllBlogs(): Promise<IBlog[]> {
    try {
      const blogs = await Blog.find();
      return blogs;
    } catch (error) {
      throw new Error('Error fetching blogs');
    }
  }

  static async createBlog(title: string, content: string, image: string): Promise<IBlog> {
    try {
      const blog = new Blog({ title, content, image });
      await blog.save();
      return blog;
    } catch (error) {
      throw new Error('Error creating blog');
    }
  }

  static async updateBlog(id: string, title: string, content: string, image: string): Promise<IBlog> {
    try {
      const blog = await Blog.findByIdAndUpdate(id, { title, content, image }, { new: true });
      if (!blog) {
        throw new Error('Blog not found');
      }
      return blog;
    } catch (error) {
      throw new Error('Error updating blog');
    }
  }

  static async deleteBlog(id: string): Promise<void> {
    try {
      const blog = await Blog.findByIdAndDelete(id);
      if (!blog) {
        throw new Error('Blog not found');
      }
    } catch (error) {
      throw new Error('Error deleting blog');
    }
  }
}
