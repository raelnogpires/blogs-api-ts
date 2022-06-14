export type UserT = {
  id: number,
  displayName: string,
  email: string,
  password: string,
  image: string,
}

export type NewUserT = Omit<UserT, 'id'>;

export type UserLoginT = Pick<UserT, 'email' | 'password'>;

export type NewUserReturnT = {
  id: number,
  displayName: string,
  email: string,
  password: string,
  image: string,
}
