import { Router } from 'express';

import CategoryController from '../modules/categories/controller/category.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();

const controller = new CategoryController();
const auth = new AuthMiddleware();

router
  .post('/', auth.validateToken, (req, res, next) => controller.createCategory(req, res, next))
  .get('/', auth.validateToken, (req, res) => controller.getAllCategories(req, res));

export default router;
