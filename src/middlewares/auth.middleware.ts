import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'restify-errors';

import { verifyToken } from '../auth/index';
import Users from '../database/model/Users';

export default class AuthMiddleware {
  private _model: typeof Users;

  constructor() {
    this._model = Users;
  }

  public async validateToken(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
      const err = new UnauthorizedError('Token not found');
      return next(err);
    }

    const auth = verifyToken(authorization);
    if (!auth) {
      const err = new UnauthorizedError('Expired or invalid token');
      return next(err);
    }

    const { data } = auth;
    const user = await this._model.findOne({ where: { email: data.email } });
    if (user !== null) {
      req.headers.userId = `${user.id}`;
    }

    return next();
  }
}
