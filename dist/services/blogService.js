"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
// services/blogService.ts
const Blog_1 = __importDefault(require("../models/Blog"));
class BlogService {
    static getAllBlogs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blogs = yield Blog_1.default.find();
                return blogs;
            }
            catch (error) {
                throw new Error('Error fetching blogs');
            }
        });
    }
    static createBlog(title, content, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = new Blog_1.default({ title, content, image });
                yield blog.save();
                return blog;
            }
            catch (error) {
                throw new Error('Error creating blog');
            }
        });
    }
    static updateBlog(id, title, content, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield Blog_1.default.findByIdAndUpdate(id, { title, content, image }, { new: true });
                if (!blog) {
                    throw new Error('Blog not found');
                }
                return blog;
            }
            catch (error) {
                throw new Error('Error updating blog');
            }
        });
    }
    static deleteBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield Blog_1.default.findByIdAndDelete(id);
                if (!blog) {
                    throw new Error('Blog not found');
                }
            }
            catch (error) {
                throw new Error('Error deleting blog');
            }
        });
    }
}
exports.BlogService = BlogService;
