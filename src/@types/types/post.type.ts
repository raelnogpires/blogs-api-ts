export type PostT = {
  id: number,
  title: string,
  content: string,
  userId: number,
  published: Date,
  updates: Date,
}

export type CreatePostT = {
  title: string,
  categoryIds: Array<number>,
  content: string,
}

export type NewPostReturnT = {
  id: number,
  userId: number,
  title: string,
  content: string,
}
