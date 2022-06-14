import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

export default class LoginValidation {
  private static joi = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  public static validation(req: Request, _res: Response, next: NextFunction) {
    const { error } = LoginValidation.joi.validate(req.body);

    if (error) {
      return next(error);
    }

    return next();
  }
}
