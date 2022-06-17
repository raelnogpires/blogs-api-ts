import { Request, Response } from 'express';
import CategoryService from '../service/category.services';

export default class CategoryController {
  private _service;

  constructor() {
    this._service = new CategoryService();
  }

  public async createCategory(req: Request, res: Response): Promise<Response> {
    const newCategory = await this._service.createCategory(req.body);
    return res.status(200).json(newCategory);
  }
}
