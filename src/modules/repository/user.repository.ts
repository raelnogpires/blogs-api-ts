import Users from '../../database/model/Users';

import { NewUserT } from '../../@types/types/user.type';
import IUserRepository from '../../@types/interfaces/user.repository.interface';

export default class UserRepository implements IUserRepository {
  private _model;

  constructor() {
    this._model = Users;
  }

  public async registerUser(user: NewUserT): Promise<boolean> {
    const exist = this._model.findOne({ where: { email: user.email } });
    if (!exist) {
      return false;
    }

    await this._model.create(user);

    return true;
  }
}
