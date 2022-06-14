import { INTEGER, Model } from 'sequelize/types';

// @ts-ignore
import db from '.';
import BlogPosts from './BlogPosts';

import Categories from './Categories';

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

Categories.belongsToMany(BlogPosts, {
  foreignKey: 'categoryId', otherKey: 'postId', through: 'PostCategories', as: 'BlogPosts',
});

PostCategories.belongsToMany(Categories, {
  foreignKey: 'postId', otherKey: 'categoryId', through: 'PostCategories', as: 'Categories',
});


export default PostCategories;