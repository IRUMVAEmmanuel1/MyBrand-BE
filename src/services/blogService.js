// services/blogService.js

const Blog = require("../models/Blog");

// Service functions for interacting with blogs
const blogService = {
  getAllBlogs: async () => {
    return await Blog.find();
  },
  createBlog: async (blogData) => {
    return await Blog.create(blogData);
  },
  getBlogById: async (blogId) => {
    return await Blog.findById(blogId);
  },
  updateBlog: async (blogId, updatedData) => {
    return await Blog.findByIdAndUpdate(blogId, updatedData, { new: true });
  },
  deleteBlog: async (blogId) => {
    return await Blog.findByIdAndDelete(blogId);
  },
};

module.exports = blogService;
