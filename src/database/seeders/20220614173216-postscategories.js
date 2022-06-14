'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('PostsCategories',
    [
      {
        postId: 1,
        categoryId: 1
      },
      {
        postId: 2,
        categoryId: 1,
      },
    ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('PostsCategories', null, {});
  }
};
