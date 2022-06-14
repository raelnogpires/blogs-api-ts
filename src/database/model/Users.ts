import { STRING, Model } from 'sequelize/types';

// @ts-ignore
import db from '.';

import BlogPosts from './BlogPosts';

class Users extends Model {}

Users.init(
  {
    displayName: {
      type: STRING,
    },
    email: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
    image: {
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

Users.hasMany(BlogPosts, { foreignKey: 'userId', as: 'BlogPosts' });

export default Users;
