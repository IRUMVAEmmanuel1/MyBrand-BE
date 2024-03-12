// src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const blogRoutes = require("./routers/blogRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
