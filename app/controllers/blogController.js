const BlogPost = require('../../src/db/models/blog');

exports.getAllBlogsPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findAll(); // Mengambil semua postingan dari database
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve blog posts', error });
  }
};


