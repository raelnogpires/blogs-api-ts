import { Router } from 'express';

import UserController from '../modules/user/controller/user.controller';

import RegisterValidation from '../middlewares/register.middleware';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();
const controller = new UserController();
const auth = new AuthMiddleware();

router
  .post('/', RegisterValidation.validation, (req, res, next) => controller.registerUser(req, res, next))
  .get('/', auth.validateToken, (req, res) => controller.getAllUsers(req, res))
  .get('/:id', auth.validateToken, (req, res, next) => controller.getUserById(req, res, next));

export default router;
