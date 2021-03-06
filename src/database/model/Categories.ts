import { STRING, Model } from 'sequelize';

import { CategoryT } from '../../@types/types/category.type';

import db from '.';

class Categories extends Model<CategoryT> {
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
