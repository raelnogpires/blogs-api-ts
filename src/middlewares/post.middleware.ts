import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { BadGatewayError } from 'restify-errors';

import { CategoryT } from '../@types/types/category.type';

import CategoryRepository from '../modules/repository/category.repository';

export default class PostMiddleware {
  private static joi = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  });

  public async validateBody(
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { error } = PostMiddleware.joi.validate(req.body);
    if (error) {
      return next(error.message);
    }

    return next();
  }

  public async checkCategories(
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { categoryIds } = req.body;
    const { getAllCategories } = new CategoryRepository();
    const allCategories = await getAllCategories();

    categoryIds.forEach((c: number) => {
      const exist = allCategories.find((i) => i.id === c);

      if (!exist) {
        const err = new BadGatewayError('"categoryIds" not found');
        return next(err);
      }
    });

    return next();
  };
}