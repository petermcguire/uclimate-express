'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Homes', [
      {
        name: 'My House 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'My House 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Homes', null, {});
  }
};
