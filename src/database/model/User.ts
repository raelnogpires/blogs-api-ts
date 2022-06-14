import { STRING, Model } from 'sequelize/types';

// @ts-ignore
import db from '.';

class User extends Model {}

User.init(
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

export default User;
