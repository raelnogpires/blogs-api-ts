import { CategoryT } from '../../@types/types/category.type';

import ICategoryRepository from '../../@types/interfaces/category.repository.interface';

import Categories from '../../database/model/Categories';

export default class CategoryRepository implements ICategoryRepository {
  private _model;

  constructor() {
    this._model = Categories;
  }

  public async createCategory(name: string): Promise<CategoryT> {
    const create = name as unknown as CategoryT;
    const newCategory = await this._model.create(create);
    return newCategory;
  }

  public async getAllCategories(): Promise<CategoryT[]> {
    const categories = await this._model.findAll();
    return categories;
  }
}
