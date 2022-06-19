import { Router } from 'express';

import BlogPostController from '../modules/blogposts/controller/blogpost.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();
const controller = new BlogPostController();
const auth = new AuthMiddleware();

router
  .post('/', auth.validateToken, (req, res, next) => controller.createPost(req, res, next));

export default router;
