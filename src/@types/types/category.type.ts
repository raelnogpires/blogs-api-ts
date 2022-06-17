export type CategoryT = {
  id: number,
  name: string,
}

export type CreateCategoryT = Omit<CategoryT, 'id'>;
