import { CreatePostT, NewPostReturnT } from '../types/post.type';

export default interface IBlogPostRepository {
  createPost(post: CreatePostT): Promise<NewPostReturnT>,
}
