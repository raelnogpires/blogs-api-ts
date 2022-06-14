import { Router } from 'express';

import UserController from '../modules/user/controller/user.controller';
import LoginValidation from '../middlewares/login.middleware';

const router = Router();
const controller = new UserController();

router
  .post('/', LoginValidation.validation, (req, res, next) => controller.userLogin(req, res, next));

export default router;
