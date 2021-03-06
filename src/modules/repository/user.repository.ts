import Users from '../../database/model/Users';

import { UserReturnT, NewUserT, UserLoginT } from '../../@types/types/user.type';
import IUserRepository from '../../@types/interfaces/user.repository.interface';

export default class UserRepository implements IUserRepository {
  private _model;

  constructor() {
    this._model = Users;
  }

  public async registerUser(user: NewUserT): Promise<boolean> {
    const exist = await this._model.findOne({ where: { email: user.email } });
    if (exist) {
      return false;
    }

    await this._model.create(user);

    return true;
  }

  public async userLogin(user: UserLoginT): Promise<boolean> {
    const { email, password } = user;

    const exist = await this._model.findOne({ where: { email, password } });
    if (!exist) {
      return false;
    }

    return true;
  }

  public async getAllUsers(): Promise<UserReturnT[]> {
    const users = await this._model.findAll({
      attributes: { exclude: ['password'] },
    });

    return users;
  }

  public async getUserById(id: number): Promise<UserReturnT | null> {
    const user = await this._model.findByPk(id);
    return user;
  }

  public getUserByEmail = async (email: string): Promise<UserReturnT | null> => {
    const user = await this._model.findOne({ where: { email } });
    return user;
  }
}
