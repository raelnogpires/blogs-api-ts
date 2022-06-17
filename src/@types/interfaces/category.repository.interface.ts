import { CategoryT } from '../types/category.type';

export default interface ICategoryRepository {
  createCategory(name: string): Promise<CategoryT>,
}