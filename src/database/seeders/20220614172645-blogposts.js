'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('BlogPosts',
    [{
      id: 1,
      title: 'Linux é muito bom',
      content: 'I use Arch btw',
      userId: 1,
      published: new Date(),
      updated: new Date(),
    },
    {
      id: 2,
      title: 'M1 chips are next level',
      content: 'CPU and GPU? Too good to be true',
      userId: 2,
      published: new Date(),
      updated: new Date(),
    }]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  }
};
