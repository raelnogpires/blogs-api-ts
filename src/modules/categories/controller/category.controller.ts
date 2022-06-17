import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from 'restify-errors';
import CategoryService from '../service/category.services';

export default class CategoryController {
  private _service;

  constructor() {
    this._service = new CategoryService();
  }

  public async createCategory(
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<Response | void> {
    const { name } = req.body;
    if (!name) {
      const err = new BadRequestError('"name" is required');
      return next(err);
    }
    const newCategory = await this._service.createCategory(req.body);
    return res.status(200).json(newCategory);
  }
}
