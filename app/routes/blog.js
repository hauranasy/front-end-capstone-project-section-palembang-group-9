const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Rute untuk membuat postingan blog baru
router.post('/create', blogController.createBlogPost);

// Rute untuk mendapatkan semua postingan blog
router.get('/getAll', blogController.getAllBlogsPost);

module.exports = router;
