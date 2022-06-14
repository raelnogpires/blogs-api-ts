import { Model, STRING } from 'sequelize';

import db from '.';

import BlogPosts from './BlogPosts';

class Users extends Model {
  declare id: number;
  declare displayName: string;
  declare email: string;
  declare password: string;
  declare image: string;
}

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
    sequelize: db,
    tableName: 'Users',
    timestamps: false,
  },
);

Users.hasMany(BlogPosts, { foreignKey: 'userId' });

// https://dev.to/jctaveras/sequelize-typescript-what-you-need-to-know-41mj
BlogPosts.belongsTo(Users, { foreignKey: 'userId', as: 'Users' });

export default Users;
