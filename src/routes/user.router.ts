import { Router } from 'express';

import UserController from '../modules/user/controller/user.controller';
import RegisterValidation from '../middlewares/register.middleware';

const router = Router();
const controller = new UserController();

router
  .post('/', RegisterValidation.validation, (req, res, next) => controller.registerUser(req, res, next));

export default router;
