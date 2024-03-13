"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/blogRoutes.ts
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const router = express_1.default.Router();
router.get('/blogs', blogController_1.getAllBlogs);
router.post('/blogs', blogController_1.createBlog);
router.patch('/blogs/:id', blogController_1.updateBlog);
router.delete('/blogs/:id', blogController_1.deleteBlog);
exports.default = router;
