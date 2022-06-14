import { NewUserT, UserLoginT } from '../types/user.type';

export default interface IUserRepository {
  registerUser(user: NewUserT): Promise<boolean>,
  userLogin(user: UserLoginT): Promise<boolean>,
}
