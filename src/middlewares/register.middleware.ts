import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { BadRequestError } from 'restify-errors';

const emailRegex = /\S+@\S+\.\S+/;
const validateEmailWithRegex = (email: string) => emailRegex.test(email);

export default class RegisterValidation {
  private static joi = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().allow(''),
  });

  public static validation(req: Request, _res: Response, next: NextFunction) {
    const { error } = RegisterValidation.joi.validate(req.body);

    if (error) {
      const err = new BadRequestError(error.message);
      return next(err);
    }

    const emailFormatValidation = validateEmailWithRegex(req.body.email);
    if (!emailFormatValidation) {
      const err = new BadRequestError('"email" must be a valid email')
      return next(err);
    }

    return next();
  }
}
