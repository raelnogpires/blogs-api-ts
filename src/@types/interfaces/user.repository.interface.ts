import { NewUserReturnT, NewUserT } from '../types/user.type';

export default interface IUserRepository {
  registerUser(user: NewUserT): NewUserReturnT,
}
