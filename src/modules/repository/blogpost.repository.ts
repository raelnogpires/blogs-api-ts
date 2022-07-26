import BlogPosts from '../../database/model/BlogPosts';
import PostCategories from '../../database/model/PostCategories';

import IBlogPostRepository from '../../@types/interfaces/blogpost.repository.interface';
import { CreatePostT, NewPostReturnT } from '../../@types/types/post.type';

export default class BlogPostRepository implements IBlogPostRepository {
  private _postModel;
  private _catPostModel;

  constructor() {
    this._postModel = BlogPosts;
    this._catPostModel = PostCategories;
  }

  public async createPost(post: CreatePostT): Promise<NewPostReturnT> {
    const newPost = await this._postModel.create(post);
    const { id } = newPost;
    const { categoryIds } = post;
    categoryIds.forEach(async (cId: number) => {
      await this._catPostModel.create({ postId: id, categoryId: cId });
    });
    return newPost as NewPostReturnT;
  }
}
