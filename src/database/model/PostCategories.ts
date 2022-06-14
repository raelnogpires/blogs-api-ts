import { INTEGER, Model } from 'sequelize/types';

// @ts-ignore
import db from '.';

class PostCategories extends Model {}

PostCategories.init(
  {
    postId: {
      type: INTEGER,
    },
    categoryId: {
      type: INTEGER,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

export default PostCategories;