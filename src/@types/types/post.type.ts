import { UserReturnT } from './user.type';
import { CategoryT } from './category.type';

export type PostT = {
  id: number,
  title: string,
  content: string,
  userId: number,
  published: Date,
  updates: Date,
}

export type CreatePostT = {
  userId: number,
  title: string,
  content: string,
  categoryIds: number[],
}

export type NewPostReturnT = {
  id: number,
  userId: number,
  title: string,
  content: string,
}

export type PostReturnT = {
  id: number,
  title: string,
  content: string,
  userId: number,
  published: Date,
  updates: Date,
  user: UserReturnT,
  categories: CategoryT[],
}
