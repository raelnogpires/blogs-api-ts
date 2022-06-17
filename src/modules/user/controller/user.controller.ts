import { NextFunction, Request, Response } from "express";
import { generateToken } from "../../../auth";
import UserService from "../service/user.services";

export default class UserController {
  private _service;

  constructor() {
    this._service = new UserService();
  }

  public async registerUser(
    req: Request,
    res: Response,
    next: NextFunction,
    ): Promise<Response | void> {
    try {
      await this._service.registerUser(req.body);
      const { email } = req.body;
      const token = generateToken(email);
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
      const token = generateToken(email);
      req.headers.authorization = token;

      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  }

  public async getAllUsers(_req: Request, res: Response): Promise<Response> {
    const users = await this._service.getAllUsers();
    return res.status(200).json(users);
  }
}