import { NewUserT, UserLoginT, UserReturnT } from '../types/user.type';

export default interface IUserRepository {
  registerUser(user: NewUserT): Promise<boolean>,
  userLogin(user: UserLoginT): Promise<boolean>,
  getAllUsers(): Promise<UserReturnT[]>,
  getUserById(id: number): Promise<UserReturnT>
}
