import { DATE, INTEGER, Model, STRING } from 'sequelize/types';

// @ts-ignore
import db from '.';
import Users from './Users';

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

BlogPosts.belongsTo(Users, {
  foreignKey: 'userId', as: 'Users',
});

export default BlogPosts;