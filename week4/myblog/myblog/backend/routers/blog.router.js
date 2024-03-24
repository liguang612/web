const router = require('express').Router();

const { model } = require('mongoose');
const { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog, } = require("../controllers/blog.controller");

router.route("/")
    .get(getAllBlogs)
    .post(createBlog);
router.route("/:id")
    .get(getBlogById)
    .put(updateBlog)
    .delete(deleteBlog);

module.exports = router;