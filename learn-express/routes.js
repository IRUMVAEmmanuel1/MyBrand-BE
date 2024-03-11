// routes.js
const express = require("express");
const Blog = require("./models/Blog");

const router = express.Router();

// Get all blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Create blog
router.post("/blogs", async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const blog = new Blog({ title, content, image });
    await blog.save();
    res.send(blog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get individual blog
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
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


// Update blog
router.patch("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
      res.status(404).send({ error: "Blog not found" });
      return;
    }
    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.content) {
      blog.content = req.body.content;
    }
    if (req.body.image) {
      blog.image = req.body.image;
    }
    await blog.save();
    res.send(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete blog
router.delete("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
      res.status(404).send({ error: "Blog not found" });
      return;
    }
    await Blog.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
