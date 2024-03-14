import Blog, { IBlog } from '../models/Blog';

export class BlogService {
  static async getAllBlogs(): Promise<IBlog[]> {
    try {
      const blogs = await Blog.find();
      return blogs;
    } catch (error) {
      console.log(error)
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

  static async updateBlog(id: string, title: string, content: string, image: string): Promise<IBlog | null> {
    try {
      const blog = await Blog.findByIdAndUpdate(id, { title, content, image }, { new: true });
      return blog;
    } catch (error) {
      throw new Error('Error updating blog');
    }
  }

  static async deleteBlog(id: string): Promise<void> {
    try {
      await Blog.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error deleting blog');
    }
  }

  static async getBlogById(id: string): Promise<IBlog | null> {
    try {
      const blog = await Blog.findById(id);
      return blog;
    } catch (error) {
      throw new Error('Error fetching blog by id');
    }
  }
}
