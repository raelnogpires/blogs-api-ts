'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories',
    [{
      id: 1,
      name: 'Tecnologia',
    },
    {
      id: 2,
      name: 'Desenvolvimento',
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
