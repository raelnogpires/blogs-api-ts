import { BadRequestError, ConflictError } from 'restify-errors';
import { NewUserT, UserLoginT, UserT } from '../../../@types/types/user.type';

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
}
