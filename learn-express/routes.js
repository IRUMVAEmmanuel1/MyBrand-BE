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

// Create post
router.post("/blogs", async (req, res) => {
  try {
    const post = new Blog({
      title: req.body.title,
      content: req.body.content,
    });
    await post.save();
    res.send(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get individual post
router.get("/blogs/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
      res.status(404).send({ error: "Blog not found" });
      return;
    }
    res.send(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Update post
router.patch("/blogs/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
      res.status(404).send({ error: "Post not found" });
      return;
    }
    if (req.body.title) {
      post.title = req.body.title;
    }
    if (req.body.content) {
      post.content = req.body.content;
    }
    await post.save();
    res.send(post);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete post
router.delete("/blogs/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
      res.status(404).send({ error: "Post not found" });
      return;
    }
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;