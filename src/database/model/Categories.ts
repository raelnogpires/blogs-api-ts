import { STRING, Model } from 'sequelize';

import db from '.';

class Categories extends Model {
  declare id: number;
  declare name: string;
}

Categories.init(
  {
    name: {
      type: STRING,
    }
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'Categories',
    timestamps: false,
  },
);

export default Categories;
