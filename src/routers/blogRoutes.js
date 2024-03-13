const express = require("express");
const router = express.Router();
const blogService = require("../services/blogService");

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.send(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const newBlog = await blogService.createBlog({ title, content, image });
    res.status(201).send(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get a single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) {
      res.status(404).send({ error: "Blog not found" });
      return;
    }
    res.send(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Update a blog by ID
router.patch("/:id", async (req, res) => {
  try {
    const updatedBlog = await blogService.updateBlog(req.params.id, req.body);
    res.send(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a blog by ID
router.delete("/:id", async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
