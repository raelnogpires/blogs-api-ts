import { NextFunction, Request, Response } from "express";
import { nextTick } from "process";
import AuthService from "../../../auth";
import UserService from "../service/user.services";

export default class UserController {
  private _service;
  private _auth;

  constructor() {
    this._service = new UserService();
    this._auth = new AuthService();
  }

  public async registerUser(
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<Response | void> {
    try {
      await this._service.registerUser(req.body);
      const { email } = req.body;
      const token = this._auth.generate(email);
      return res.status(201).json({ token });
    } catch (error) {
      return next(error);
    }
  }

  public async userLogin(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      await this._service.userLogin(req.body);

      const { email } = req.body;
      const token = this._auth.generate(email);
      req.headers.authorization = token;

      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  }
}