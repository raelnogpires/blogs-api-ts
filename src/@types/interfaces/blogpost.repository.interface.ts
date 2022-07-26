import { CreatePostT, NewPostReturnT, PostReturnT } from '../types/post.type';

export default interface IBlogPostRepository {
  createPost(post: CreatePostT): Promise<NewPostReturnT>,
  getAllPosts(): Promise<PostReturnT[]>,
}
