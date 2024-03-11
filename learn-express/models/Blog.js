const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String, // Assuming the image URL will be stored as a string
    required: true
  }
});

module.exports = mongoose.model("Blog", blogSchema);
