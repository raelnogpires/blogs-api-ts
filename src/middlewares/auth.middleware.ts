import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'restify-errors';
import AuthService from '../auth';

export default class AuthMiddleware {
  private _auth;

  constructor() {
    this._auth = new AuthService();
  }

  public async validate(req: Request, _res: Response, next: NextFunction) {
    const { authorization: token } = req.headers;
    if (!token) {
      const err = new UnauthorizedError('Token not found');
      return next(err);
    }

    const verify = this._auth.verify(token);
    if (!verify) {
      const err = new UnauthorizedError('Expired or invalid token');
      return next(err);
    }

    return next();
  }
}
