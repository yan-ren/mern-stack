import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from './controller/posts.js';
import { get } from './controller/base.js' 
const router = express.Router();

router.get('/', get);

router.get('/post/', getPosts);
router.post('/post/', createPost);
router.get('/post/:id', getPost);
router.patch('/post/:id', updatePost);
router.delete('/post/:id', deletePost);
router.patch('/post/:id/likePost', likePost);

export default router;