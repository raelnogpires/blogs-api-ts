import { BadRequestError, ConflictError, NotFoundError } from 'restify-errors';
import { UserReturnT, NewUserT, UserLoginT, UserT } from '../../../@types/types/user.type';

import UserRepository from '../../../modules/repository/user.repository';

export default class UserService {
  private _repository;

  constructor() {
    this._repository = new UserRepository();
  }

  public async registerUser(user: NewUserT): Promise<void> {
    const register = await this._repository.registerUser(user);

    if (!register) {
      throw new ConflictError('User already registered');
    }
  }

  public async userLogin(user: UserLoginT): Promise<void> {
    const u = await this._repository.userLogin(user);
    if (!u) {
      throw new BadRequestError('Invalid fields');
    }
  }

  public async getAllUsers(): Promise<UserReturnT[]> {
    const users = await this._repository.getAllUsers();
    return users;
  }

  public async getUserById(id: number): Promise<UserReturnT> {
    const user = await this._repository.getUserById(id)
    if (!user) {
      throw new NotFoundError(`User doesn't exist`);
    }

    return user;
  }
}
