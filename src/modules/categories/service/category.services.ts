import { CategoryT } from '../../../@types/types/category.type';

import CategoryRepository from '../../../modules/repository/category.repository';

export default class CategoryService {
  private _repository;

  constructor() {
    this._repository = new CategoryRepository();
  }

  public async createCategory(name: string): Promise<CategoryT> {
    const newCategory = await this._repository.createCategory(name);
    return newCategory;
  }

  public async getAllCategories(): Promise<CategoryT[]> {
    const categories = await this._repository.getAllCategories();
    return categories;
  }
}