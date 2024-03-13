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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getAllBlogs = void 0;
const blogService_1 = require("../services/blogService");
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogService_1.BlogService.getAllBlogs();
        res.send(blogs);
    }
    catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.getAllBlogs = getAllBlogs;
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, image } = req.body;
        const blog = yield blogService_1.BlogService.createBlog(title, content, image);
        res.send(blog);
    }
    catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.createBlog = createBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content, image } = req.body;
        const blog = yield blogService_1.BlogService.updateBlog(id, title, content, image);
        res.send(blog);
    }
    catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield blogService_1.BlogService.deleteBlog(id);
        res.status(204).send();
    }
    catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send('Internal Server Error');
    }
});
exports.deleteBlog = deleteBlog;
