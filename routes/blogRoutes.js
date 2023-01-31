const express = require('express');
const blogController = require('../controllers/blogController');

// blog Router
const router = express.Router();

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

router.delete("/:id", blogController.blog_create_delete);


module.exports = router;