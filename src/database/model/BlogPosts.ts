import { DATE, INTEGER, Model, STRING } from 'sequelize/types';

// @ts-ignore
import db from '.';

class BlogPosts extends Model {}

BlogPosts.init(
  {
    title: STRING,
    content: STRING,
    userId: INTEGER,
    published: DATE,
    updated: DATE,
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

export default BlogPosts;