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
}

export type NewPostReturnT = {
  id: number,
  userId: number,
  title: string,
  content: string,
}
