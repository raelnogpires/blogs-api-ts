import { CreatePostT, NewPostReturnT } from '../../../@types/types/post.type';

import BlogPostRepository from '../../../modules/repository/blogpost.repository';

export default class BlogPostService {
  private _repository;

  constructor() {
    this._repository = new BlogPostRepository();
  }

  public async createPost(post: CreatePostT): Promise<NewPostReturnT> {
    const newPost = await this._repository.createPost(post);
    return newPost as NewPostReturnT;
  }
}
