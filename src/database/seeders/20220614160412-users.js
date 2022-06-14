'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
    [{
      id: 1,
      displayName: 'Linus Torvalds',
      email: 'linux@penguimos.com',
      password: 'opensource',
      image: 'https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg?w=400&h=300&c=crop',
    },
    {
      id: 2,
      displayName: 'Steve Jobs',
      email: 'jobs@apple.com',
      password: 'apples25',
      image: 'https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg',
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
