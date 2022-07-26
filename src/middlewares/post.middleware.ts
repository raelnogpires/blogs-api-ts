import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { BadGatewayError } from 'restify-errors';

import { CategoryT } from '../@types/types/category.type';

import Categories from '../database/model/Categories';

export default class PostMiddleware {
  private _model;

  constructor() { this._model = Categories }

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
    const allCategories = await this._model.findAll();

    categoryIds.forEach((c: CategoryT) => {
      const exist = allCategories.find((i) => {
        i.id === c.id
      });

      if (!exist) {
        const err = new BadGatewayError('"categoryIds" not found');
        return next(err);
      }
    });

    return next();
  };
}