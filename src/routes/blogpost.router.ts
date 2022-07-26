import { Router } from 'express';

import BlogPostController from '../modules/blogposts/controller/blogpost.controller';
import AuthMiddleware from '../middlewares/auth.middleware';
import PostMiddleware from '../middlewares/post.middleware';

const router = Router();
const controller = new BlogPostController();
const auth = new AuthMiddleware();
const check = new PostMiddleware();

router
  .post('/',
  auth.validateToken,
  check.validateBody,
  check.checkCategories,
  (req, res, next) => controller.createPost(req, res, next));

router
  .get('/',
  auth.validateToken,
  (req, res) => controller.getAllPosts(req, res));

export default router;
