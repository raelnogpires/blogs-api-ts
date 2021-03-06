import { DATE, INTEGER, Model, STRING } from 'sequelize';

import db from '.';

class BlogPosts extends Model {
  declare id: number;
  declare title: string;
  declare content: string;
  declare userId: number;
  declare published: Date;
  declare updated: Date;
}

BlogPosts.init(
  {
    title: STRING,
    content: STRING,
    userId: INTEGER,
    published: DATE,
    updated: DATE,
  },
  {
    underscored: false,
    sequelize: db,
    tableName: 'BlogPosts',
    timestamps: false,
  },
);

export default BlogPosts;