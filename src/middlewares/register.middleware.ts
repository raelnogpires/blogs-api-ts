import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { BadRequestError } from 'restify-errors';

export default class RegisterValidation {
  private static joi = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().required(),
    password: Joi.string().length(8).required(),
  });

  public static validation(req: Request, res: Response, next: NextFunction) {
    const { error } = RegisterValidation.joi.validate(req.body);

    if (error) {
      const err = new BadRequestError(error.message);
      return next(err);
    }

    return next();
  }
}
