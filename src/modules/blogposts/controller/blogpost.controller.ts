import { NextFunction, Request, Response } from 'express';
import { BadGatewayError } from 'restify-errors';

import BlogPostService from '../service/blogpost.services';

export default class BlogPostController {
  private _service;

  constructor() {
    this._service = new BlogPostService();
  }

  public async createPost(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { title, content, categoryIds } = req.body;

    const { userId } = req.headers;
    if(!userId) {
      const err = new BadGatewayError('userId not found');
      return next(err);
    }

    const postData = { userId: parseInt(userId[0]), title, content, categoryIds }
    const newPost = await this._service.createPost(postData);

    return res.status(200).json(newPost);
  }

  public async getAllPosts(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const posts = await this._service.getAllPosts();
    return res.status(200).json(posts);
  }
}
