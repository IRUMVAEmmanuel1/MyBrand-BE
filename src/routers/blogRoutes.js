const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
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
    const blog = new Blog({ title, content, image });
    await blog.save();
    res.status(201).send(blog); // 201 status code for resource created
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get an individual blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
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

// Update an existing blog
router.patch("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated blog post
      runValidators: true, 
    });
    if (!blog) {
      res.status(404).send({ error: "Blog not found" });
      return;
    }
    res.send(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a blog by ID
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      res.status(404).send({ error: "Blog not found" });
      return;
    }
    res.status(204).send(); // 204 status code for successful deletion
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
