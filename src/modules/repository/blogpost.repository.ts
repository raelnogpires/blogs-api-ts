import BlogPosts from '../../database/model/BlogPosts';

import IBlogPostRepository from '../../@types/interfaces/blogpost.repository.interface';
import { CreatePostT, NewPostReturnT } from '../../@types/types/post.type';

export default class BlogPostRepository implements IBlogPostRepository {
  private _model;

  constructor() {
    this._model = BlogPosts;
  }

  public async createPost(post: CreatePostT): Promise<NewPostReturnT> {
    const newPost = await this._model.create(post);
    return newPost as NewPostReturnT;
  }
}
